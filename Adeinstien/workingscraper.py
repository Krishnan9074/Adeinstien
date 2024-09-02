# from selenium import webdriver
# from selenium.webdriver.common.by import By
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
# from selenium.webdriver.chrome.options import Options
# from bs4 import BeautifulSoup
# import time
# import random

# def human_behavior(driver):
#     time.sleep(random.uniform(3, 7))
#     scroll_height = random.randint(300, 700)
#     driver.execute_script(f"window.scrollBy(0, {scroll_height});")
#     action = webdriver.ActionChains(driver)
#     action.move_by_offset(random.randint(0, 100), random.randint(0, 100)).perform()
#     time.sleep(random.uniform(1, 3))

# def get_product_details(product_url):
#     options = Options()
#     options.headless = True
#     options.add_argument("--disable-gpu")
#     options.add_argument("--window-size=1920x1080")
#     options.add_argument("--no-sandbox")
#     options.add_argument("--disable-dev-shm-usage")
#     driver = webdriver.Chrome(options=options)
    
#     driver.get(product_url)
    
#     human_behavior(driver)

#     # Wait for any overlay to disappear
#     try:
#         WebDriverWait(driver, 10).until(
#             EC.invisibility_of_element_located((By.CSS_SELECTOR, 'div.w__0u_'))
#         )
#     except Exception as e:
#         print("Error waiting for overlay to disappear:", e)
#         driver.quit()
#         return

#     # Scroll to ensure the page is fully loaded and elements are visible
#     human_behavior(driver)

#     # Get the page source after the gallery and page fully load
#     html = driver.page_source

#     # Parse the HTML content with BeautifulSoup
#     soup = BeautifulSoup(html, 'html.parser')

#     # Find all img tags within the gallery
#     image_tags = soup.select('div[data-testid="media-thumbnail"] img')

#     cdn_links = []

#     for img_tag in image_tags:
#         img_url = img_tag.get('src') or img_tag.get('data-src')
#         if img_url and "walmartimages" in img_url:
#             cdn_links.append(img_url)
#             if len(cdn_links) == 5:
#                 break

#     # Extract the product description (update this part with correct class or section)
#     product_section = soup.find('section', class_='expand-collapse-section')
#     if product_section:
#         product_description = product_section.get_text(strip=True)
#     else:
#         product_description = "Product description not found."

#     driver.quit()

#     return {
#         "description": product_description,
#         "images": cdn_links
#     }

# # Example usage:
# product_url = "https://www.walmart.com/ip/Keurig-K-Express-Essentials-Single-Serve-K-Cup-Pod-Coffee-Maker-Black/111488395?athbdg=L1102"
# details = get_product_details(product_url)

# if details:
#     print("Product Description:")
#     print(details["description"])
#     print("\nTop 5 CDN Image URLs:")
#     for cdn_link in details["images"]:
#         print(cdn_link)


from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup
import time
import random
from genai import generate_gemini_desc
from ttsai2 import create_audio
from slideshow import create_slideshow_with_custom_resize_and_transition
from audvid import combine_files
from upload_to_youtube import upload_video


def human_behavior(driver):
    time.sleep(random.uniform(3, 7))
    scroll_height = random.randint(300, 700)
    driver.execute_script(f"window.scrollBy(0, {scroll_height});")
    action = webdriver.ActionChains(driver)
    action.move_by_offset(random.randint(0, 100), random.randint(0, 100)).perform()
    time.sleep(random.uniform(1, 3))

def get_product_details(product_url):
    options = Options()
    options.headless = True
    options.add_argument("--disable-gpu")
    options.add_argument("--window-size=1920x1080")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")

    while True:  # Keep running until successful
        driver = webdriver.Chrome(options=options)
        
        try:
            driver.get(product_url)
            human_behavior(driver)

            # Wait for any overlay to disappear
            WebDriverWait(driver, 10).until(
                EC.invisibility_of_element_located((By.CSS_SELECTOR, 'div.w__0u_'))
            )

            # Scroll to ensure the page is fully loaded and elements are visible
            human_behavior(driver)

            # Get the page source after the gallery and page fully load
            html = driver.page_source

            # Parse the HTML content with BeautifulSoup
            soup = BeautifulSoup(html, 'html.parser')

            # Find all img tags within the gallery
            image_tags = soup.select('div[data-testid="media-thumbnail"] img')

            cdn_links = []
            for img_tag in image_tags:
                img_url = img_tag.get('src') or img_tag.get('data-src')
                if img_url and "walmartimages" in img_url:
                    cdn_links.append(img_url)
                    if len(cdn_links) == 5:
                        break

            # Extract the product description
            product_section = soup.find('section', class_='expand-collapse-section')
            if product_section:
                product_description = product_section.get_text(strip=True)
            else:
                product_description = None

            # Check if both description and images are found
            if product_description and len(cdn_links) == 5:
                driver.quit()  # Close the browser if successful
                return {
                    "description": product_description,
                    "images": cdn_links
                }
            else:
                raise Exception("Required data not found, retrying...")

        except Exception as e:
            print(f"Error encountered: {e}. Retrying...")
            driver.quit()  # Ensure the browser is closed before retrying
            time.sleep(5)  # Wait before retrying

# Example usage:
# product_url = "https://www.walmart.com/ip/Keurig-K-Express-Essentials-Single-Serve-K-Cup-Pod-Coffee-Maker-Black/111488395?athbdg=L1102"
# details = get_product_details(product_url)

# if details:
#     print("Product Description:")
#     print(details["description"])

#     generate_gemini_desc(details["description"])

#     print("\nTop 5 CDN Image URLs:")
    
#     create_audio()

#     create_slideshow_with_custom_resize_and_transition(details["images"])

#     combine_files()
#     #final_video_with_final_audio.mp4
#     print("\nSlideshow and audio files created successfully!")

#     #upload on youtube
#     #upload_video(file_path, title="Test Title", description="Test Description", keywords="", category="22", privacy_status="private"):
#     result = upload_video("final_video_with_final_audio.mp4", "Test Video5", "Testing functionality", "walmart,product,people", "22", "public")
#     print(result)

#     for cdn_link in details["images"]:
#         print(cdn_link)
