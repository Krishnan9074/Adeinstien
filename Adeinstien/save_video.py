from pymongo import MongoClient
import gridfs

# Connect to MongoDB
client = MongoClient('mongodb+srv://amancoder:coder@adification.k5qkq.mongodb.net/?retryWrites=true&w=majority&appName=Adification')
db = client['myVideoDatabase']
fs = gridfs.GridFS(db)

# Save video to MongoDB
with open('video.mp4', 'rb') as video_file:
    video_data = video_file.read()
fs.put(video_data, filename='video.mp4', content_type='video/mp4')

# Retrieve video from MongoDB
video_file = fs.find_one({'filename': 'video.mp4'})
if video_file:
    with open('save/video.mp4', 'wb') as output_file:
        output_file.write(video_file.read())
