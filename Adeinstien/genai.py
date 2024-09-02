# import google.generativeai as genai
# import os

# # genai.configure(api_key="AIzaSyCMdBP76wyidbFx3SCNEQ5AGXVPTwvKpZI")

# # model = genai.GenerativeModel('gemini-1.5-flash')

# # response = model.generate_content("")
# # print(response.text)

# def gemini_ai_genrate(desc):
#     genai.configure(api_key="AIzaSyCMdBP76wyidbFx3SCNEQ5AGXVPTwvKpZI")

#     model = genai.GenerativeModel('gemini-1.5-flash')

#     response = model.generate_content("using this {desc} generate a script for a video ad that is of 3 mins duration")
#     print(response.text)

# desc = "Introducing the K-Express Essentials Single Serve Coffee Maker in Black: Keurig quality at our most welcoming price. This have-it-all brewer is a great way to experience genuine Keurig quality and rich, full-flavored coffee made with the push of a button convenience – at a truly attractive price. This streamlined, modern coffee maker gives you a range of Keurig features that can enhance your coffee routine. You can enjoy a delicious cup of hot, freshly brewed coffee in minutes - with no prep and no mess. The 36 oz reservoir means you can make cup after cup without refilling, and back-to-back brewing means you don’t have to wait for your brewer to reheat before brewing a second cup. Plus, you can choose your favorites from the hundreds of coffee brands and flavors available in K-Cup pods, including tea or hot cocoa. You can even use a My K-Cup Reusable Coffee Filter with your own favorite ground coffee (sold separately). And all of this comes at a price that helps you put America’s #1 single serve coffee maker brand on your counter. Now everybody can truly enjoy a rich cup of coffee at the push of a button, because Keurig is for all."
# gemini_ai_genrate(desc)

import vertexai
from vertexai.generative_models import GenerativeModel

def generate_gemini_desc(desc):

# TODO(developer): Update and un-comment below line
    project_id = "learnforge-408907"

    vertexai.init(project=project_id, location="us-central1")

    model = GenerativeModel("gemini-1.5-flash-001")

    response = model.generate_content(
        f"using this {desc} generate a script for a video ad that is of 15 seconds,just give me the plain basic text for its voice to be genrated not the narration script,the script should not have any formatting it should be a plain paragraph"
    )

    print(response.text)

    # Save the generated text to a file
    with open("gemini_desc_script.txt", "w") as file:
        file.write(response.text)

desc = "Introducing the K-Express Essentials Single Serve Coffee Maker in Black: Keurig quality at our most welcoming price. This have-it-all brewer is a great way to experience genuine Keurig quality and rich, full-flavored coffee made with the push of a button convenience – at a truly attractive price. This streamlined, modern coffee maker gives you a range of Keurig features that can enhance your coffee routine. You can enjoy a delicious cup of hot, freshly brewed coffee in minutes - with no prep and no mess. The 36 oz reservoir means you can make cup after cup without refilling, and back-to-back brewing means you don’t have to wait for your brewer to reheat before brewing a second cup. Plus, you can choose your favorites from the hundreds of coffee brands and flavors available in K-Cup pods, including tea or hot cocoa. You can even use a My K-Cup Reusable Coffee Filter with your own favorite ground coffee (sold separately). And all of this comes at a price that helps you put America’s #1 single serve coffee maker brand on your counter. Now everybody can truly enjoy a rich cup of coffee at the push of a button, because Keurig is for all."


def generate_gemini_recc(product_name):

    project_id = "learnforge-408907"

    vertexai.init(project=project_id, location="us-central1")

    model = GenerativeModel("gemini-1.5-flash-001")

    response = model.generate_content(
        f"""reccomend me some products from the walmart.com website that are related to this product {product_name}, give their product links from the internet as a list in json object called links, strictly only return json structure it should be like this: {{
  "links": [
    "https://www.walmart.com/search/?query=macbook+case",
    "https://www.walmart.com/search/?query=macbook+charger",
    "https://www.walmart.com/search/?query=macbook+usb+c+hub",
    "https://www.walmart.com/search/?query=external+hard+drive+for+macbook",
    "https://www.walmart.com/search/?query=microsoft+office+for+mac"
  ]
}}"""
    )

    print(response.text)


# generate_gemini_recc("shampoo")
# generate_gemini_desc(desc)