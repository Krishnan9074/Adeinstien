# from elevenlabs import  play, save
# from elevenlabs.client import ElevenLabs
# def create_audio(words)
#     eleven_labs_api_key = "sk_62f576a7df96c03e148c2bb81d349438d78744b710ba7136"
#     client = ElevenLabs(
#         api_key=eleven_labs_api_key, 
#     )

#     audio = client.generate(
#         text=f"{words}",
#         voice="Rachel",
#     )

# # # Play the generated audio
# # play(audio)

# # Save the audio to a file
#     save(audio, "audio1.mp3")

# words = "Stay cool and comfortable this summer with the DuraComfort 8,000 BTU portable air conditioner. Perfect for spaces up to 230 square feet, this all-in-one unit offers cooling, dehumidifying, and fan features to keep your environment just right. With easy installation, an eco-friendly R32 refrigerant, and Auto Evaporation Technology, DuraComfort is both efficient and environmentally friendly. Enjoy the convenience of a 24-hour timer and sleep mode for personalized comfort day and night. Ideal for bedrooms, offices, and small living spaces, the DuraComfort portable AC ensures year-round comfort and satisfaction. Visit our website to learn more and experience the cooling power of DuraComfort today!"
# create_audio(words)

from elevenlabs import play, save
from elevenlabs.client import ElevenLabs

def create_audio():
    # Read the text from the file
    with open("gemini_desc_script.txt", "r") as file:
        words = file.read()

    eleven_labs_api_key = "sk_62f576a7df96c03e148c2bb81d349438d78744b710ba7136"
    client = ElevenLabs(
        api_key=eleven_labs_api_key,
    )

    audio = client.generate(
        text=f"{words}",
        voice="Rachel",
    )

    # Save the audio to a file
    save(audio, "audio1.mp3")
    print("created audio file")

# Call the function to create the audio
# create_audio()
