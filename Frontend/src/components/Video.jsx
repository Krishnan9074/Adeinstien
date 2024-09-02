import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VideoPlayer = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3100/getvideotest'); // Replace with your API endpoint
        const data = response.data;

        setMessage(data.message);
        setVideoUrl(data.youtube_result.video_id);
        console.log(data.youtube_result);
        console.log(data);
      } catch (error) {
        console.error('Error fetching the video data:', error);
      }
    };

    fetchVideoData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">{message}</h1>
      {videoUrl && (
        <div className="w-full max-w-2xl">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src={`https://www.youtube.com/embed/${videoUrl.split('/').pop()}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
