# from moviepy.editor import *

# # Define the duration of each image and the transition duration
# image_duration = 2  # Duration each image is displayed
# transition_duration = 1  # Duration of the transition

# # Create image clips
# clip1 = ImageClip('images/image2.png').set_duration(image_duration)
# clip2 = ImageClip('images/image.png').set_duration(image_duration)
# clip3 = ImageClip('images/image3.png').set_duration(image_duration)

# # Add crossfade transitions to each clip
# clip1 = clip1.crossfadein(transition_duration)
# clip2 = clip2.crossfadein(transition_duration)
# clip3 = clip3.crossfadein(transition_duration)

# # Concatenate the clips with the crossfade transition
# clips = [clip1, clip2, clip3]
# video_clip = concatenate_videoclips(clips, method='compose', padding=-transition_duration)

# # Write the final video file
# video_clip.write_videofile("video-output1.mp4", fps=24, remove_temp=True, codec="libx264", audio_codec="aac")

# import os
# from moviepy.editor import *

# def create_slideshow_with_transitions(image_folder, output_file="slideshow_with_transitions.mp4", duration_per_image=2, transition_duration=1, fps=24, width=366, height=650):
#     # List all image files in the folder
#     images = [img for img in os.listdir(image_folder) if img.endswith(".jpg") or img.endswith(".png")]
#     images.sort()  # Sort the images if needed

#     # Create a list of ImageClips and resize them
#     clips = [ImageClip(os.path.join(image_folder, img)).set_duration(duration_per_image).resize(newsize=(width, height)) for img in images]

#     # Apply crossfade transitions
#     for i in range(len(clips) - 1):
#         clips[i] = clips[i].crossfadeout(transition_duration)  # Crossfade out
#         clips[i+1] = clips[i+1].crossfadein(transition_duration)  # Crossfade in

#     # Concatenate the clips with crossfade transitions
#     video = concatenate_videoclips(clips, method="compose")

#     # Write the result to a file
#     video.write_videofile(output_file, fps=fps)

#     print("Video with transitions created successfully!")

# # Example usage
# create_slideshow_with_transitions(image_folder=os.path.join(os.getcwd(), 'images'))


#working
# import os
# from moviepy.editor import *

# # Define the folder containing the images relative to the current script
# image_folder = os.path.join(os.getcwd(), 'images')

# # List all image files in the folder
# images = [img for img in os.listdir(image_folder) if img.endswith(".jpg") or img.endswith(".png")]
# images.sort()  # Sort the images if needed

# # Create a list of ImageClips
# clips = [ImageClip(os.path.join(image_folder, img)).set_duration(2) for img in images]

# # Concatenate the clips into a video
# video = concatenate_videoclips(clips, method="compose")

# # Write the slideshow video to a file
# video.write_videofile("slideshow.mp4", fps=24)

# print("Slideshow video created successfully!")
# import os
# from moviepy.editor import *
# from PIL import Image
# import numpy as np

# def custom_resize(clip, newsize):
#     """
#     Resizes a video or image clip to a new size, using the LANCZOS filter.
#     """
#     if clip.ismask:
#         return clip.resize(newsize)
#     else:
#         # Use LANCZOS for high-quality downscaling
#         resizer = lambda pic: np.array(Image.fromarray(pic).resize(newsize[::-1], Image.LANCZOS))
#         return clip.fl_image(resizer)

# def create_slideshow_with_custom_resize(image_folder, output_file="slideshow.mp4", duration_per_image=2, video_size=(366, 650), fps=24):
#     """
#     Creates a slideshow video with specified dimensions using images from a folder.
    
#     :param image_folder: Folder containing the images.
#     :param output_file: Name of the output video file.
#     :param duration_per_image: Duration each image is displayed in the video.
#     :param video_size: Tuple containing the width and height of the video.
#     :param fps: Frames per second for the video.
#     """
#     # List all image files in the folder
#     images = [img for img in os.listdir(image_folder) if img.endswith(".jpg") or img.endswith(".png")]
#     images.sort()  # Sort the images if needed

#     # Create a list of ImageClips and resize them to the specified video size
#     clips = [custom_resize(ImageClip(os.path.join(image_folder, img)).set_duration(duration_per_image), video_size) for img in images]

#     # Concatenate the clips into a video
#     video = concatenate_videoclips(clips, method="compose")

#     # Write the slideshow video to a file
#     video.write_videofile(output_file, fps=fps)

#     print(f"Slideshow video with dimensions {video_size[0]}px by {video_size[1]}px created successfully!")

# # Example usage
# create_slideshow_with_custom_resize(image_folder=os.path.join(os.getcwd(), 'images'))


import os
import requests
from moviepy.editor import *
from PIL import Image
import numpy as np
from io import BytesIO

def download_image(url):
    """
    Downloads an image from a URL and returns it as an Image object.
    """
    response = requests.get(url)
    img = Image.open(BytesIO(response.content))
    return img

def custom_resize(clip, newsize):
    """
    Resizes a video or image clip to a new size, using the LANCZOS filter.
    """
    if clip.ismask:
        return clip.resize(newsize)
    else:
        # Use LANCZOS for high-quality downscaling
        resizer = lambda pic: np.array(Image.fromarray(pic).resize(newsize[::-1], Image.LANCZOS))
        return clip.fl_image(resizer)

def create_slideshow_with_custom_resize_and_transition(image_urls, output_file="slideshow.mp4", duration_per_image=3, transition_duration=1, video_size=(650, 366), fps=24):
    """
    Creates a slideshow video with specified dimensions and transitions using images from URLs.
    
    :param image_urls: List of image URLs.
    :param output_file: Name of the output video file.
    :param duration_per_image: Duration each image is displayed in the video.
    :param transition_duration: Duration of the transition between images.
    :param video_size: Tuple containing the width and height of the video.
    :param fps: Frames per second for the video.
    """
    # Download the images from URLs and create ImageClips
    clips = []
    for url in image_urls:
        img = download_image(url)
        img_clip = ImageClip(np.array(img)).set_duration(duration_per_image)
        img_clip = custom_resize(img_clip, video_size)
        clips.append(img_clip)

    # Apply crossfade transitions
    for i in range(len(clips) - 1):
        clips[i] = clips[i].crossfadeout(transition_duration)  # Crossfade out
        clips[i+1] = clips[i+1].crossfadein(transition_duration)  # Crossfade in

    # Concatenate the clips into a video
    video = concatenate_videoclips(clips, method="compose")

    # Write the slideshow video to a file
    video.write_videofile(output_file, fps=fps)

    print(f"Slideshow video with dimensions {video_size[0]}px by {video_size[1]}px created successfully!")

# Example usage
image_urls = [
    "https://i5.walmartimages.com/seo/Keurig-K-Express-Essentials-Single-Serve-K-Cup-Pod-Coffee-Maker-Black_13ee2422-9a30-476a-949c-0a377e602202.6c6e58134805ac49070f6ec8cf75d30c.jpeg?odnHeight=80&odnWidth=80&odnBg=FFFFFF",
    "https://i5.walmartimages.com/asr/78a15c24-e7b8-4915-8904-de6ec2a5dded.76d613d3ded29d252e58fc0c4ecfbbdc.jpeg?odnHeight=80&odnWidth=80&odnBg=FFFFFF",
    "https://i5.walmartimages.com/asr/e421f9aa-11b6-47bb-812d-c8b3f40ee6c3.f4985d2542729941101394d378875454.jpeg?odnHeight=80&odnWidth=80&odnBg=FFFFFF",
    "https://i5.walmartimages.com/asr/d68593ad-b694-47ff-b2e7-e00932be720f.49e3141b80636dfa8578a17aad4d51d9.jpeg?odnHeight=80&odnWidth=80&odnBg=FFFFFF",
    "https://i5.walmartimages.com/asr/bf19f3dd-1c50-403f-806c-d76e4a05c5a2.5ce84f78384d51bb5501c363da088d0c.jpeg?odnHeight=80&odnWidth=80&odnBg=FFFFFF"
]

# create_slideshow_with_custom_resize_and_transition(image_urls=image_urls)
