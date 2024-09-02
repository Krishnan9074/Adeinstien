from flask import Flask, request, jsonify
import pickle

import content_based_recommendation

import warnings

from workingscraper import get_product_details
from genai import generate_gemini_desc
from ttsai2 import create_audio
from slideshow import create_slideshow_with_custom_resize_and_transition
from audvid import combine_files
from upload_to_youtube import upload_video
from flask_cors import CORS

app = Flask(__name__)

CORS(app)
CORS(app, origins='http://127.0.0.1:5173', methods=['POST','GET'], headers=['Content-Type'])

# Suppress all warnings
warnings.filterwarnings('ignore')

# Load the model and vectorizer
with open('model/reinforcement_model/kmeans_model.pkl', 'rb') as f:
    model = pickle.load(f)

with open('model/reinforcement_model/tfidf_vectorizer.pkl', 'rb') as f:
    vectorizer = pickle.load(f)

app = Flask(__name__)

@app.route('/',methods=['GET'])
def home():
    return 'Success', 200


@app.route('/recommend/reinforcement_model', methods=['POST'])
def reinforcement_model():
    data = request.get_json()
    product_description = data['product_description']
    recommendations = reinforcement_based_recommeddation.recommend_products(product_description)
    recommendations=recommendations.to_json()
    print(recommendations)
    return recommendations


product_url = None

@app.route('/recommend/content_based_model', methods=['POST'])
def content_based_model():
    global product_url
    desc = request.get_json()
    description = desc['description']
    recommendations = content_based_recommendation.recommend_products(description)

    # Assuming the recommendations contain a list of products with URLs, pick the first one for this example
    product_url = recommendations.get('product_url')

    return jsonify(recommendations)

@app.route('/getvideo', methods=['GET'])
def get_video():
    global product_url
    if product_url is None:
        return jsonify({"error": "No product URL found. Please run the recommendation first."}), 400

    # Fetch the product details using the product URL from the POST request
    details = get_product_details(product_url)

    if details:
        print("Product Description:")
        print(details["description"])

        generate_gemini_desc(details["description"])

        print("\nTop 5 CDN Image URLs:")

        create_audio()

        create_slideshow_with_custom_resize_and_transition(details["images"])

        combine_files()
        # final_video_with_final_audio.mp4
        print("\nSlideshow and audio files created successfully!")

        # Upload to YouTube
        result = upload_video("final_video_with_final_audio.mp4", "Test Video5", "Testing functionality", "walmart,product,people", "22", "public")
        print(result)

        for cdn_link in details["images"]:
            print(cdn_link)

        # Return the result as a JSON response
        return jsonify({
            "message": "Video created and uploaded successfully!",
            "youtube_result": {'video_id': 'youtu.be/jAMV74Q5jsM', 'file': 'final_video_with_audioo1.mp4', 'title': 'Test Video5', 'description': 'https://www.walmart.com/ip/onn-Wireless-Bluetooth-on-Ear-Headphones-Black-New/368708375?classType=VARIANT', 'keywords': 'surfing,Santa Cruz', 'category': '22', 'privacy_status': 'private'}
            #sample result : Video id 'jAMV74Q5jsM' was successfully uploaded.
#{'video_id': 'youtu.be/jAMV74Q5jsM', 'file': 'final_video_with_audioo1.mp4', 'title': 'Test Video5', 'description': 'https://www.walmart.com/ip/onn-Wireless-Bluetooth-on-Ear-Headphones-Black-New/368708375?classType=VARIANT', 'keywords': 'surfing,Santa Cruz', 'category': '22', 'privacy_status': 'private'}
        })
    else:
        return jsonify({"error": "Product details not found."}), 404
@app.route('/getvideotest', methods=['GET'])
def get_videotest():
    return jsonify({
            "message": "Video created and uploaded successfully!",
            "youtube_result": {'video_id': 'youtu.be/jAMV74Q5jsM', 'file': 'final_video_with_audioo1.mp4', 'title': 'Test Video5', 'description': 'https://www.walmart.com/ip/onn-Wireless-Bluetooth-on-Ear-Headphones-Black-New/368708375?classType=VARIANT', 'keywords': 'surfing,Santa Cruz', 'category': '22', 'privacy_status': 'private'}
            #sample result : Video id 'jAMV74Q5jsM' was successfully uploaded.
#{'video_id': 'youtu.be/jAMV74Q5jsM', 'file': 'final_video_with_audioo1.mp4', 'title': 'Test Video5', 'description': 'https://www.walmart.com/ip/onn-Wireless-Bluetooth-on-Ear-Headphones-Black-New/368708375?classType=VARIANT', 'keywords': 'surfing,Santa Cruz', 'category': '22', 'privacy_status': 'private'}
        })

if __name__ == "__main__":
    import os
    port = int(os.environ.get("PORT", 3100))
    app.run(host='0.0.0.0', port=port)
