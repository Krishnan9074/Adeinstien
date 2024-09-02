import time

import os
import glob
from random import shuffle
from instabot import Bot 


def upload_videos(username, password, video_name=None, caption_text=None):
    bot = Bot()
    bot.login(username=username, password=password)

    posted_video_file = "videos.txt"
    posted_video_list = []

    # Load the list of already posted videos
    if os.path.isfile(posted_video_file):
        with open(posted_video_file, "r") as f:
            posted_video_list = f.read().splitlines()
    else:
        with open(posted_video_file, "w"):
            pass

    # Get the list of videos to upload
    if not video_name:
        exts = ["mp4", "MP4", "mov", "MOV"]
        videos = []
        for ext in exts:
            videos += [os.path.basename(x) for x in glob.glob("media/*.{}".format(ext))]
        shuffle(videos)
    else:
        videos = [video_name]

    # Filter out videos that have already been posted
    videos = list(set(videos) - set(posted_video_list))
    if len(videos) == 0:
        if not video_name:
            bot.logger.warning("NO MORE VIDEO TO UPLOAD")
            return
        else:
            bot.logger.error(f"The video `{videos[0]}` has already been posted")
            return

    try:
        for video in videos:
            bot.logger.info(f"Checking {video}")
            if caption_text:
                caption = caption_text
            else:
                caption = captions_for_medias.CAPTIONS.get(video, "")
                if not caption:
                    caption = input("No caption found for this media. Type the caption now: ")

            bot.logger.info(f"Uploading video `{video}` with caption: `{caption}`")
            if not bot.upload_video(os.path.join("media", video), caption=caption):
                bot.logger.error("Something went wrong...")
                break

            # Mark the video as posted
            posted_video_list.append(video)
            with open(posted_video_file, "a") as f:
                f.write(video + "\n")

            bot.logger.info(f"Successfully uploaded: {video}")
            break
    except Exception as e:
        if "429" in str(e):
            bot.logger.error("429 Error: Too many requests. Sleeping for 10 minutes...")
            time.sleep(600)  # Increase sleep time to 10 minutes
        else:
            bot.logger.error("\033[41mERROR...\033[0m")
            bot.logger.error(str(e))

# Example usage:
upload_videos("username", "password", video_name="test_video.mp4", caption_text="Your caption")
