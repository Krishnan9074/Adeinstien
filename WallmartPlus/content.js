// // console.clear();

// let contentTitle;

// console.log(document.cookie);
// function dynamicClothingSection(ob) {
//   let boxDiv = document.createElement("div");
//   boxDiv.id = "box";

//   let boxLink = document.createElement("a");
//   // boxLink.href = '#'
//   boxLink.href = "/contentDetails.html?" + ob.id;
//   // console.log('link=>' + boxLink);

//   let imgTag = document.createElement("img");
//   // imgTag.id = 'image1'
//   // imgTag.id = ob.photos
//   imgTag.src = ob.preview;

//   let detailsDiv = document.createElement("div");
//   detailsDiv.id = "details";

//   let h3 = document.createElement("h3");
//   let h3Text = document.createTextNode(ob.name);
//   h3.appendChild(h3Text);

//   let h4 = document.createElement("h4");
//   let h4Text = document.createTextNode(ob.brand);
//   h4.appendChild(h4Text);

//   let h2 = document.createElement("h2");
//   let h2Text = document.createTextNode("rs  " + ob.price);
//   h2.appendChild(h2Text);

//   boxDiv.appendChild(boxLink);
//   boxLink.appendChild(imgTag);
//   boxLink.appendChild(detailsDiv);
//   detailsDiv.appendChild(h3);
//   detailsDiv.appendChild(h4);
//   detailsDiv.appendChild(h2);

//   return boxDiv;
// }

// //  TO SHOW THE RENDERED CODE IN CONSOLE
// // console.log(dynamicClothingSection());

// // console.log(boxDiv)

// let mainContainer = document.getElementById("mainContainer");
// let containerClothing = document.getElementById("containerClothing");
// let containerAccessories = document.getElementById("containerAccessories");
// // mainContainer.appendChild(dynamicClothingSection('hello world!!'))

// // BACKEND CALLING

// let httpRequest = new XMLHttpRequest();

// httpRequest.onreadystatechange = function() {
//   if (this.readyState === 4) {
//     if (this.status == 200) {
//       // console.log('call successful');
//       contentTitle = JSON.parse(this.responseText);
//       if (document.cookie.indexOf(",counter=") >= 0) {
//         var counter = document.cookie.split(",")[1].split("=")[1];
//         document.getElementById("badge").innerHTML = counter;
//       }
//       for (let i = 0; i < contentTitle.length; i++) {
//         if (contentTitle[i].isAccessory) {
//           console.log(contentTitle[i]);
//           containerAccessories.appendChild(
//             dynamicClothingSection(contentTitle[i])
//           );
//         } else {
//           console.log(contentTitle[i]);
//           containerClothing.appendChild(
//             dynamicClothingSection(contentTitle[i])
//           );
//         }
//       }
//     } else {
//       console.log("call failed!");
//     }
//   }
// };
// httpRequest.open(
//   "GET",
//   "https://5d76bf96515d1a0014085cf9.mockapi.io/product",
//   true
// );
// httpRequest.send();


// console.clear();

let contentTitle;

console.log(document.cookie);
function dynamicClothingSection(ob) {
  let boxDiv = document.createElement("div");
  boxDiv.id = "box";

  let boxLink = document.createElement("a");
  // boxLink.href = '#'
  boxLink.href = "/contentDetails.html?" + ob.id;
  // console.log('link=>' + boxLink);

  let imgTag = document.createElement("img");
  // imgTag.id = 'image1'
  // imgTag.id = ob.photos
  imgTag.src = ob.preview;

  let detailsDiv = document.createElement("div");
  detailsDiv.id = "details";

  let h3 = document.createElement("h3");
  let h3Text = document.createTextNode(ob.name);
  h3.appendChild(h3Text);

  let h4 = document.createElement("h4");
  let h4Text = document.createTextNode(ob.brand);
  h4.appendChild(h4Text);

  let h2 = document.createElement("h2");
  let h2Text = document.createTextNode("rs  " + ob.price);
  h2.appendChild(h2Text);

  boxDiv.appendChild(boxLink);
  boxLink.appendChild(imgTag);
  boxLink.appendChild(detailsDiv);
  detailsDiv.appendChild(h3);
  detailsDiv.appendChild(h4);
  detailsDiv.appendChild(h2);

  return boxDiv;
}

let mainContainer = document.getElementById("mainContainer");
let containerClothing = document.getElementById("containerClothing");
let containerAccessories = document.getElementById("containerAccessories");

contentTitle = [
  {
    "id": "1",
    "name": "Pantene Pro-V Daily Moisture Renewal Shampoo, 27.7 oz",
    "preview": "https://i5.walmartimages.com/seo/Pantene-Pro-V-Daily-Moisture-Renewal-Shampoo-27-7-oz_cf81ebfb-9d81-48f2-9297-eebcdeb5bdf0.bf7b0bfa8122a90c5b35bcb98688b57b.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
    "photos": [
      "https://i5.walmartimages.com/seo/Pantene-Pro-V-Daily-Moisture-Renewal-Shampoo-27-7-oz_cf81ebfb-9d81-48f2-9297-eebcdeb5bdf0.bf7b0bfa8122a90c5b35bcb98688b57b.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      "https://i5.walmartimages.com/asr/01bf5bbc-1c88-4eae-bdb8-2b6585f6e50f.1fbb012315c3e205514469a18b67c7c8.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      "https://i5.walmartimages.com/asr/0a9d3867-50b0-473c-9ff8-6f0a95362243.416cae68c203902f6c75f6a76e36a745.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      "https://i5.walmartimages.com/asr/32476850-010b-42ff-a98b-e5aa9246fb45.0c3f2c0d0b7985510918d46d391f63cc.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
      "https://i5.walmartimages.com/asr/e22c1e20-9243-4cac-809c-655ba4714343.231f3d2c552db0b9db7ca5b290f0e56c.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
    ],
    "description": "HARD WORKING, LONG LASTING Your haircare should work as hard as you do. Pantene Pro-V Daily Moisture Renewal Shampoo cleanses parched hair with a potent blend of nutrients to remove buildup and prime your strands for optimal hydration. This formula contains 2x more nutrients with softness that lasts for 72+ hours so you can wash less and keep the soft and hydrated feel. Best when used with Daily Moisture Renewal Conditioner. This moisturizing shampoo is color-safe and cleanses without harsh stripping for hydration in every wash, leaving you with strong and healthy hair. With Pantene Pro-V Daily Moisture Renewal Shampoo, say goodbye to dry locks and unleash soft, hydrated hair that looks and feels beautiful for longer. Pantene Pro-V Daily Moisture Renewal Shampoo, 27.7 oz",
    "size": [1, 1, 0, 1, 0],
    "isAccessory": false,
    "brand": "Pantene",
    "price": 702
  },
  {
    "id": "2",
    "name": "Dove Ultra Care Intensive Repair Deep Conditioner with Keratin, 12 fl oz",
    "preview": "https://i5.walmartimages.com/seo/Dove-Nourishing-Intensive-Repair-Deep-Conditioner-for-Damaged-Hair-with-Bio-Protein-Care-12-oz_63b38738-f4fe-487d-a006-270c8521a469.1032402cf1e0b816dec193f236782ee0.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
    "photos": [
      "https://i5.walmartimages.com/asr/ded89753-dcfd-442c-a961-489ead2e8487.95979fd74cac79e26c0e2f11951b6383.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
      "https://i5.walmartimages.com/asr/d96932eb-1900-42c6-80c6-bbddd59e26bb.bc85c5bfe6cd1da592f8db8162e80bcc.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      "https://i5.walmartimages.com/asr/829ae7ae-4676-47e2-97a7-30c9974d623f.f5efcda59eee01ac39875579ea590ac0.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
    ],
    "description": "Dove Ultra Care Intensive Repair Deep Conditioner with Keratin, Looking for a deep hair conditioner for damaged hair? From styling to changes in the weather, our hair goes through a lot every day, but with the right products you can have nourished hair, inside and out. We've created Dove Nutritive Solutions Intensive Repair Hair Conditioner to help smooth, visibly repair damage, strength against breakage and progressively nourish with continued use to help give you hair that feels as good as it looks. Even the most heat damaged hair can look healthy day after day. We know that damaged hair care should go beyond removing the outward signs of damage, which is why this Dove deep conditioner is formulated to nourish and help restore the hair inside and formulated with Keratin Repair Actives.",
    "size": [0, 0, 0, 1, 0],
    "isAccessory": false,
    "brand": "Dove",
    "price": 399
  },
  {
    "id": "3",
    "name": "Eco Styler Olive Oil Styling Hair Gel, 16oz",
    "preview": "https://i5.walmartimages.com/seo/Eco-Style-Olive-Oil-Hair-Styling-Gel-16-oz-Moisturizing-Unisex_d492a35a-706f-4778-a0e2-4f8c7064949b_1.7c8a1d62a95ab65f90ded65639272d0c.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
    "photos": [
      "https://i5.walmartimages.com/asr/cf82ba7b-e686-41c6-ab70-f29c1d515241.5fb05c3e66e1b6031fa0e5290d995437.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      "https://i5.walmartimages.com/asr/13a70820-2858-4864-ba81-c6849bc8b9d9.331cefa57d19e7e3eedeed9e96df9db3.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
      "https://i5.walmartimages.com/asr/ce02ff41-33e7-475e-9b74-ca1ea889c637.fe5d17ac9ffc81bc2bd59e08370e700f.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
    ],
    "description": "Style and protect in one easy step with Eco Style Olive Oil Styling Gel. Most hair gels keep styles in place, but contain alcohol which can dry out hair. When applied to hair that's already dry or damaged due to chemical processing, hair gels can inadvertently make hair even unhealthier. Eco Styler hair gel is alcohol-free, with a Level 10 hold to secure any style without compromising hair health. The nourishing formula is rich in deeply emollient olive oil to help nurture dry hair as it locks looks in place, adding a brilliant shine. Olive oil also helps your scalp regulate its moisture level, safeguarding against dryness with ever use. The lightweight gel has a lightweight feel that's never stiff or tacky and doesn't flake. Each tub of Eco Style olive gel contains 16 oz.",
    "size": [1, 1, 1, 1, 1],
    "isAccessory": false,
    "brand": "Ecoco",
    "price": 359
  },
  {
    "id": "4",
    "name": "Garnier Nutrisse Nourishing Hair Color Creme, 030 Darkest Brown Sweet Cola",
    "preview": "https://i5.walmartimages.com/seo/Garnier-Nutrisse-Nourishing-Hair-Color-Creme-030-Darkest-Brown-Sweet-Cola_56a122af-0b2f-4019-a72d-323032907245.0c3c1f34f34c51faeda101c117c29bbd.png?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
    "photos": [
      "https://i5.walmartimages.com/asr/e05e4211-7c80-48d1-8317-282eb9d82e68.19071333032f719c6493c0ef32dac480.png?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
      "https://i5.walmartimages.com/asr/9e2cde8c-6360-4b70-ad61-bb19d7c41d8e.f16e7a914f466bb5601521f9c560c20f.png?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
      "https://i5.walmartimages.com/asr/2f6761f5-548d-4e19-b198-f3500aed9264.9758411bb2a57ba45b360308061037e3.png?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
    ],
    "description": "Garnier Nutrisse Nourishing Hair Color Creme, 030 Darkest Brown Sweet Cola, Experience the nourishing color treatment that gives you healthy-looking color that really lasts. The exclusive color treatment, enriched with conditioners and fruit-oil concentrate, penetrates into the hair fibers to nourish deep down while delivering rich, long lasting color. Unique avocado enriched conditioner that harnesses the restorative properties of avocado oil and vitamin E. It nourishes hair and protects against dryness, locking in color and moisture to keep your color rich and healthy-looking and your hair silky soft. Love coloring your hair with the rich creme formula enhanced with the fragrant grape seed oil you only get from Garnier Nutrisse.",
    "size": [1, 1, 1, 1, 1],
    "isAccessory": false,
    "brand": "Garnier",
    "price": 569
  },
  {
    "id": "5",
    "name": "Maybelline The Blushed Nudes Eyeshadow Palette",
    "preview": "https://i5.walmartimages.com/asr/a9319914-9372-43bf-9941-f26704a7728c.ea55b49b690ec2c377c99d8417461fdd.png?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
    "photos": [
      "https://i5.walmartimages.com/asr/a9319914-9372-43bf-9941-f26704a7728c.ea55b49b690ec2c377c99d8417461fdd.png?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      "https://i5.walmartimages.com/asr/627ed40d-db7d-4644-a8db-d1080c0895ff.c85aa274a90c54190c572931cd9a2e96.png?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
      "https://i5.walmartimages.com/asr/7c0e8682-ecdd-4669-9d80-e6f5219609db.c3431804d7c2c184faa66b0e47256ab5.png?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
      ],
    "description": "Maybelline The Blushed Nudes Eyeshadow Palette, Maybelline The Blushed Nudes Eyeshadow Palette consists of 13 eye looks with duo, trip, and quad color combinations. All shades are highly pigmented and infused with rose gold pigments making it a Blushed Nude palette. This palette is the ultimate companion to create versatile eye makeup looks. Eyeshadow palette 12 shades of rose-infused nudes From bold beiges to tempting taupes Eyeshadow palette comes with brush applicator Limited edition",
    "size": [1, 1, 1, 1, 1],
    "isAccessory": false,
    "brand": "Maybelline",
    "price": 346
  },
  {
    "id": "6",
    "name": "Unisex Silver-Toned Series 3 Smart Watch",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/624dac60-4c42-4902-bba1-30a51cc7f43c1558948536543-Apple-Unisex-Smart-Watches-1441558948536225-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/624dac60-4c42-4902-bba1-30a51cc7f43c1558948536543-Apple-Unisex-Smart-Watches-1441558948536225-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/dd1e37da-0de2-417f-abd2-6df8996040eb1558948536526-Apple-Unisex-Smart-Watches-1441558948536225-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/9dfea59a-4d94-43bd-a140-77b58e42e8971558948536512-Apple-Unisex-Smart-Watches-1441558948536225-3.jpg"
    ],
    "description": "Low and high heart rate notifications. Emergency SOS. New Breathe watch faces. Automatic workout detection. New yoga and hiking workouts. Advanced features for runners like cadence and pace alerts. New head-to-head competitions. Activity sharing with friends. Personalized coaching. Monthly challenges and achievement awards. Walkie-Talkie, make phone calls, and send messages. Listen to Apple Music and Apple Podcasts. Use Siri in all-new ways. Silver aluminum case. Built-in GPS, GLONASS, Galileo, and QZSS. S3 with dual-core processor. W2 Apple wireless chip. Barometric altimeter Capacity 8GB. Optical heart sensor. 1 Year Manufacture Warranty",
    "size": [1, 1, 1, 1, 1, 1],
    "isAccessory": true,
    "brand": "Apple",
    "price": 31999
  },
  {
    "id": "7",
    "name": "Unisex Black & Green Reflex 2.0 Smart Band",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/dc05b5e5-aa82-493e-bf0b-0c309baf21021550920383101-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/dc05b5e5-aa82-493e-bf0b-0c309baf21021550920383101-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/1d9bda95-b63e-4312-bbfa-c25b377c96c21550920383126-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/2261262d-8f2f-4451-9584-9d0cb90e48cf1550920383155-3.jpg"
    ],
    "description": "The new Fastrack Reflex 2.0 Activity Tracker comes with all the features one could ask for! It comes in three colours that you can use to accentuate your athleisure, casual or party attire. Not only does it look uber cool in this cool grey & electric blue accent, further the TPU (Thermoplastic Polyurethane) strap ensures it gives you a snugfit while staying light on your wrist! It is a fitness band with smartwatch features. The band has Steps, Distance and Calorie Tracker, Sleep Tracker, Call & SMS Alerts, OLED Display, 10 Days Power Reserve, Vibration Alarm, Sedentary Reminder and is IPX6 Water Resistant. This band is compatible with both IOS and Android OS. It has a secure 'Pin' based pairing with your phone, for better protection. And, all of this at a price that is hard match anywhere else with quality and promise of the brand Fastrack. Move on and get one for yourself!",
    "size": [1, 1, 1, 1, 1],
    "isAccessory": true,
    "brand": "Fastrack",
    "price": 1999
  },
  {
    "id": "8",
    "name": "Unisex Black Galaxy Fit Fitness Band",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/e533a691-3908-41b0-8307-1928a37d4ec41561362162650-Samsung-Galaxy-Fit-4801561362161527-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/e533a691-3908-41b0-8307-1928a37d4ec41561362162650-Samsung-Galaxy-Fit-4801561362161527-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/74a60845-202d-4cea-9531-e16931bd994a1561362162628-Samsung-Galaxy-Fit-4801561362161527-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/eb5f1aca-1b71-49fa-9c41-aba51f6b01941561362162569-Samsung-Galaxy-Fit-4801561362161527-4.jpg"
    ],
    "description": "Keep up your routine for even longer. With plenty of power to last throughout your daily workouts, you can pack in those longer hours to reach your fitness goals. What's more, you won't have to worry about disruptive battery discharge when tracking your activity.",
    "size": [1, 1, 1, 1, 1],
    "isAccessory": true,
    "brand": "Samsung",
    "price": 9990
  },
  {
    "id": "9",
    "name": "Gear IconX Black Cord-free Fitness Earbuds",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8593217/2019/4/9/de2c21f3-6731-4c29-9369-692a486a1b8c1554802772926-Samsung-Gear-IconX-Black-Cord-free-Fitness-Earbuds-256155480-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8593217/2019/4/9/de2c21f3-6731-4c29-9369-692a486a1b8c1554802772926-Samsung-Gear-IconX-Black-Cord-free-Fitness-Earbuds-256155480-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8593217/2019/4/9/0423d170-fb49-450f-aef9-bbeb7003554d1554802772913-Samsung-Gear-IconX-Black-Cord-free-Fitness-Earbuds-256155480-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8593217/2019/4/9/94813947-e557-4755-9d3d-22529436a1681554802772853-Samsung-Gear-IconX-Black-Cord-free-Fitness-Earbuds-256155480-5.jpg"
    ],
    "description": "Speak commands via Bixby or Google Voice and control your music with just a tap or swipe. Meet your fitness goals with speed, distance, calorie tracking and real-time voice guidance. Find the perfect fit with multiple sizes of ear-tips and wing-tips right in the box. iOS/Mac users: Samsung Gear IconX can be used to stream music or take calls from your iOS handset or tablet. Fitness Functions that require the use of Samsung S-Health app are not available for iOS. 5 hours of Bluetooth streaming, 7 hours of MP3 listening, 4 hours talk time. Warranty: 6 months. Warranty provided by the brand owner / manufacturer",
    "size": [1, 1, 1, 1, 1],
    "isAccessory": true,
    "brand": "Samsung",
    "price": 13990
  },
  {
    "id": "10",
    "name": "White 2nd Gen AirPods with Charging Case",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803279/2019/5/27/6661d579-12ae-456b-b8f2-e78e5256a99c1558948436173-Apple-AirPods-with-Charging-Case-2nd-Gen-White-3831558948435-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803279/2019/5/27/6661d579-12ae-456b-b8f2-e78e5256a99c1558948436173-Apple-AirPods-with-Charging-Case-2nd-Gen-White-3831558948435-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803279/2019/5/27/9b14396e-0ee1-46b4-833c-4a2c35b5ce661558948436160-Apple-AirPods-with-Charging-Case-2nd-Gen-White-3831558948435-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803279/2019/5/27/27569983-fada-4874-9306-14c945c234781558948436148-Apple-AirPods-with-Charging-Case-2nd-Gen-White-3831558948435-3.jpg"
    ],
    "description": "AirPods with Charging Case: More than 24 hours listening time,3 up to 18 hours talk time8. AirPods (single charge): Up to 5 hours listening time,1 up to 3 hours talk time2. 15 minutes in the case equals up to 3 hours listening time4 or up to 2 hours talk time. Warranty: 1 year. Warranty provided by Brand/Manufacturer",
    "size": [1, 1, 1, 1, 1],
    "isAccessory": true,
    "brand": "Apple",
    "price": 14999
  }
];

if (document.cookie.indexOf(",counter=") >= 0) {
  var counter = document.cookie.split(",")[1].split("=")[1];
  document.getElementById("badge").innerHTML = counter;
}
for (let i = 0; i < contentTitle.length; i++) {
  if (contentTitle[i].isAccessory) {
    console.log(contentTitle[i]);
    containerAccessories.appendChild(
      dynamicClothingSection(contentTitle[i])
    );
  } else {
    console.log(contentTitle[i]);
    containerClothing.appendChild(
      dynamicClothingSection(contentTitle[i])
    );
  }
}
