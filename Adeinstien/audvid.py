from moviepy.editor import *

def combine_files():
# Load the slideshow video
    video = VideoFileClip("slideshow.mp4")

# Load the generated audio
    audio = AudioFileClip("audio1.mp3")

# Set the audio to the video
    final_video = video.set_audio(audio)

# Write the final video with audio to a file
    final_video.write_videofile("final_video_with_final_audio.mp4", fps=24)

    

    print("Final video with audio created successfully!")
