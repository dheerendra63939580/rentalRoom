const initialInfo = [
  {
      "title": "Vintage Wooden Table",
      "description": "A beautifully crafted vintage wooden table with intricate carvings.",
      "price": 15000,
      "location": "Connaught Place, Delhi",
      "country": "India",
      image: "https://plus.unsplash.com/premium_photo-1675537843200-78c1a0ea1736?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
      "title": "Handmade Clay Vase",
      "description": "A traditional handmade clay vase, ideal for decor.",
      "price": 18000,
      "location": "Johari Bazaar, Jaipur",
      "country": "India",
      image: "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
      "title": "Silk Saree",
      "description": "Elegant silk saree with traditional embroidery.",
      "price": 25000,
      "location": "Colaba, Mumbai",
      "country": "India",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
      "title": "Brass Candle Holder",
      "description": "Antique brass candle holder with intricate design.",
      "price": 16000,
      "location": "New Market, Kolkata",
      "country": "India",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
      "title": "Leather Journal",
      "description": "Handcrafted leather journal with refillable pages.",
      "price": 20000,
      "location": "MG Road, Bangalore",
      "country": "India",
      image: "https://images.unsplash.com/photo-1531835551805-16d864c8d311?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
      "title": "Traditional Rajasthani Quilt",
      "description": "Hand-stitched quilt from Rajasthan, vibrant and warm.",
      "price": 17000,
      "location": "Lake Palace Road, Udaipur",
      "country": "India",
      image: "https://images.unsplash.com/photo-1519710889408-a67e1c7e0452?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
      "title": "Metal Wall Art",
      "description": "Modern metal wall art with a contemporary design.",
      "price": 22000,
      "location": "Nungambakkam, Chennai",
      "country": "India",
      image: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
      "title": "Wooden Jewelry Box",
      "description": "Elegant wooden jewelry box with velvet lining.",
      "price": 21000,
      "location": "Banjara Hills, Hyderabad",
      "country": "India",
      image: "https://images.unsplash.com/photo-1505692795793-20f543407193?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlZHJvb218ZW58MHx8MHx8fDA%3D"
  },
  {
      "title": "Marble Coasters",
      "description": "Set of marble coasters with a polished finish.",
      "price": 20000,
      "location": "Tajganj, Agra",
      "country": "India",
      image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlZHJvb218ZW58MHx8MHx8fDA%3D"
  },
  {
      "title": "Handwoven Rug",
      "description": "Beautiful handwoven rug with traditional patterns.",
      "price": 23000,
      "location": "Navrangpura, Ahmedabad",
      "country": "India",
      image: "https://images.unsplash.com/photo-1505773278895-5efa7b11679a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlZHJvb218ZW58MHx8MHx8fDA%3D"
  },
  {
      "title": "Ceramic Tea Set",
      "description": "Delicate ceramic tea set with floral patterns.",
      "price": 19000,
      "location": "Kothrud, Pune",
      "country": "India",
      image: "https://images.unsplash.com/photo-1512918580421-b2feee3b85a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlZHJvb218ZW58MHx8MHx8fDA%3D"
  },
  {
      "title": "Vintage Gramophone",
      "description": "Classic vintage gramophone with original parts.",
      "price": 26000,
      "location": "Chandni Chowk, Delhi",
      "country": "India",
      image: "https://plus.unsplash.com/premium_photo-1675615949743-6ec930d87410?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJlZHJvb218ZW58MHx8MHx8fDA%3D"
  },
  {
      "title": "Handcrafted Wooden Clock",
      "description": "Unique handcrafted wooden wall clock with Roman numerals.",
      "price": 21000,
      "location": "Koramangala, Bangalore",
      "country": "India",
      image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGJlZHJvb218ZW58MHx8MHx8fDA%3D"
  },
  {
      "title": "Decorative Throw Pillows",
      "description": "Set of decorative throw pillows with intricate designs.",
      "price": 18000,
      "location": "Andheri, Mumbai",
      "country": "India",
      image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlZHJvb218ZW58MHx8MHx8fDA%3D"
  },
  {
      "title": "Antique Mirror Frame",
      "description": "Vintage mirror frame with ornate carvings.",
      "price": 20000,
      "location": "Salt Lake, Kolkata",
      "country": "India",
      image: "https://images.unsplash.com/photo-1508253578933-20b529302151?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJlZHJvb218ZW58MHx8MHx8fDA%3D"
  },
  {
      "title": "Handcrafted Leather Bag",
      "description": "Stylish handcrafted leather bag with multiple compartments.",
      "price": 23000,
      "location": "T Nagar, Chennai",
      "country": "India",
      image: "https://images.unsplash.com/photo-1463620910506-d0458143143e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJlZHJvb218ZW58MHx8MHx8fDA%3D"
  },
  {
      "title": "Traditional Wooden Carvings",
      "description": "Hand-carved wooden sculptures with traditional motifs.",
      "price": 21000,
      "location": "Bapu Bazaar, Jaipur",
      "country": "India",
      image: "https://images.unsplash.com/photo-1612152605347-f93296cb657d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJlZHJvb218ZW58MHx8MHx8fDA%3D"
  },
  {
      "title": "Ethnic Jewelry Set",
      "description": "Complete ethnic jewelry set with earrings and necklace.",
      "price": 24000,
      "location": "Lajpat Nagar, Delhi",
      "country": "India",
      image: "https://plus.unsplash.com/premium_photo-1670076505419-99468d952c61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGJlZHJvb218ZW58MHx8MHx8fDA%3D"
  },
  {
      "title": "Handmade Embroidered Cushion",
      "description": "Luxurious handmade cushion with elaborate embroidery.",
      "price": 19000,
      "location": "Jubilee Hills, Hyderabad",
      "country": "India",
      image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJlZHJvb218ZW58MHx8MHx8fDA%3D"
  },
  {
      "title": "Vintage Leather Suitcase",
      "description": "Classic vintage leather suitcase with brass locks.",
      "price": 20000,
      "location": "Fountain, Mumbai",
      "country": "India",
      image: "https://images.unsplash.com/photo-1505692433770-36f19f51681d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJlZHJvb218ZW58MHx8MHx8fDA%3D"
  },
  {
      "title": "Copper Utensils Set",
      "description": "Set of traditional copper utensils for cooking.",
      "price": 22000,
      "location": "Bapu Bazaar, Udaipur",
      "country": "India",
      image: "https://images.unsplash.com/photo-1541004995602-b3e898709909?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGJlZHJvb218ZW58MHx8MHx8fDA%3D"
  },
  {
      "title": "Wooden Carved Mirror",
      "description": "Beautiful wooden mirror with hand-carved designs.",
      "price": 24000,
      "location": "Fort, Mumbai",
      "country": "India",
      image: "https://plus.unsplash.com/premium_photo-1674676471081-0236e34485fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGJlZHJvb218ZW58MHx8MHx8fDA%3D"
  },
  {
      "title": "Rajasthani Hand-painted Pot",
      "description": "Colorful hand-painted pot with traditional Rajasthani art.",
      "price": 18000,
      "location": "Mirza Ismail Road, Jaipur",
      "country": "India",
      image: "https://images.unsplash.com/photo-1567899482751-c8647fda8155?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGJlZHJvb218ZW58MHx8MHx8fDA%3D"
  },
  {
      "title": "Decorative Wall Clock",
      "description": "Elegant wall clock with decorative elements.",
      "price": 21000,
      "location": "Cunningham Road, Bangalore",
      "country": "India",
      image: "https://plus.unsplash.com/premium_photo-1670869816898-7a4149b3de0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGJlZHJvb218ZW58MHx8MHx8fDA%3D"
  },
  {
      "title": "Handmade Pottery Vase",
      "description": "Unique pottery vase with handmade patterns.",
      "price": 19000,
      "location": "Raja Park, Jaipur",
      "country": "India",
      image: "https://images.unsplash.com/photo-1556597258-dca9fea9489d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGJlZHJvb218ZW58MHx8MHx8fDA%3D"
  },
  {
      "title": "Vintage Indian Posters",
      "description": "Collection of vintage Indian movie posters.",
      "price": 16000,
      "location": "Colaba, Mumbai",
      "country": "India",
      image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGJlZHJvb218ZW58MHx8MHx8fDA%3D"
  },
  {
      "title": "Handwoven Woolen Blanket",
      "description": "Warm handwoven woolen blanket with intricate patterns.",
      "price": 21000,
      "location": "Connaught Place, Delhi",
      "country": "India",
      image: "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGJlZHJvb218ZW58MHx8MHx8fDA%3D"
  },
  {
      "title": "Traditional Indian Lamp",
      "description": "Brass lamp with traditional Indian design and engravings.",
      "price": 20000,
      "location": "Mylapore, Chennai",
      "country": "India",
      image: "https://images.unsplash.com/photo-1595268396332-9af381e5935e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGJlZHJvb218ZW58MHx8MHx8fDA%3D"
  },
  {
      "title": "Artisanal Soap Set",
      "description": "Set of artisanal soaps with natural ingredients.",
      "price": 17000,
      "location": "Navi Mumbai, Mumbai",
      "country": "India",
      image: "https://plus.unsplash.com/premium_photo-1675745329401-ed4b9b73be6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGJlZHJvb218ZW58MHx8MHx8fDA%3D"
  },
  {
      "title": "Handcrafted Wooden Trunk",
      "description": "Large wooden trunk with hand-carved designs.",
      "price": 25000,
      "location": "South Extension, Delhi",
      "country": "India",
      image: "https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGJlZHJvb218ZW58MHx8MHx8fDA%3D"
  },
  {
      "title": "Vintage Indian Tapestry",
      "description": "Beautiful vintage tapestry with intricate patterns.",
      "price": 23000,
      "location": "Khar, Mumbai",
      "country": "India",
      image: "https://plus.unsplash.com/premium_photo-1676319481328-21e11d1048a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGJlZHJvb218ZW58MHx8MHx8fDA%3D"
  },
  {
      "title": "Handmade Pottery Vase",
      "description": "Unique pottery vase with handmade patterns.",
      "price": 20000,
      "location": "Chandni Chowk, Delhi",
      "country": "India",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJlZHJvb218ZW58MHx8MHx8fDA%3D"
  },
  {
      "title": "Ethnic Wooden Dresser",
      "description": "Handcrafted wooden dresser with ethnic carvings.",
      "price": 24000,
      "location": "Gachibowli, Hyderabad",
      "country": "India",
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGJlZHJvb218ZW58MHx8MHx8fDA%3D"
  },
  {
      "title": "Traditional Brass Bell",
      "description": "Decorative brass bell with traditional engravings.",
      "price": 17000,
      "location": "Malad, Mumbai",
      "country": "India",
      image: "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGJlZHJvb218ZW58MHx8MHx8fDA%3D"
  }
]
module.exports = {initialInfo}


