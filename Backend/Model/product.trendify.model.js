const mongoose = require("mongoose");

const ProductTrendifySchema = mongoose.Schema(
  {
    image: { type: String,require:true },
    discount: { type: Number },
    image2:{ type: String },
    title: { type: String ,require:true},
    subcategory: { type: String,require:true },
    brand: { type: String,require:true },
    price: { type: Number,require:true },
    category: { type: String,require:true }, 
    reviews :{type:Number},
    tag:{type:String,require:true},
    rating:{type:Number,require:true},
    userId: { type: String, required: true },
  userName: { type: String, required: true },
  images:Array,
  subcat2:{type:String}
  },
  {
    versionKey: false,
  }
);
const ProductTrendifyModel = mongoose.model("trendify_products", ProductTrendifySchema);

module.exports = {ProductTrendifyModel };

/**
 * 
 {
  "title": "Adrika Cotton Sarees",
  "image": "https://images.meesho.com/images/products/32768758/y5lju_400.webp",
  "image2": "https://images.meesho.com/images/products/32768758/y5lju_400.webp",
  "price": 223,
  "rating": "5",
  "category": "women",
  "brand": "levis",
  "tag": "saree",
  "discount": 26,
  "subcategory": "Tops",
  "reviews": 45
}
  
[
  {
    "title": "Polo T-shirt with Cutaway Collar",
    "image": "https://assets.ajio.com/medias/sys_master/root/h02/h2e/16088102830110/-473Wx593H-410142262-navy-MODEL.jpg",
    "image2": "https://assets.ajio.com/medias/sys_master/root/h75/h9f/16088105844766/-473Wx593H-410142262-navy-MODEL4.jpg",
    "price": 223,
    "rating": "5",
    "category": "men",
    "brand": "hollister",
    "tag": "shirt",
    "discount": 57,
    "subcategory": "clothing",
    "subcat2": "t-shirts",
    "reviews": 47
  },
  {
    "title": "Polo T-shirt Collar",
    "image": "https://assets.ajio.com/medias/sys_master/root/20221109/u2JJ/636b8eddaeb269659c7f91b5/-473Wx593H-462323964-white-MODEL.jpg",
    "image2": "https://assets.ajio.com/medias/sys_master/root/20221109/BeoJ/636b8eddaeb269659c7f913f/-473Wx593H-462323964-white-MODEL4.jpg",
    "price": 1223,
    "rating": "5",
    "category": "men",
    "brand": "zara",
    "tag": "shirt",
    "discount": 57,
    "subcategory": "clothing",
    "subcat2": "shirts",
    "reviews": 47
  },
  {
    "title": "Checked Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220324/hmQq/623c6fdef997dd03e22cd5a7/-473Wx593H-463775643-blue-MODEL.jpg",
    "image2": "https://assets.ajio.com/medias/sys_master/root/20220324/W4nG/623c6fdef997dd03e22cd524/-473Wx593H-463775643-blue-MODEL6.jpg",
    "price": 2234,
    "rating": "4.1",
    "category": "men",
    "brand": "fitch",
    "tag": "t-shirt",
    "discount": 57,
    "subcategory": "big & tall clothing",
    "subcat2": "shirts",
    "reviews": 27,
    "image3": "https://assets.ajio.com/medias/sys_master/root/20220324/xmlu/623c6fdef997dd03e22cd529/-473Wx593H-463775643-blue-MODEL5.jpg"
  },
  {
    "title": "Checked Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230228/K2fd/63fd0e1eaeb26924e395a620/-473Wx593H-465836305-blue-MODEL.jpg",
    "image2": "https://assets.ajio.com/medias/sys_master/root/20230228/5zcG/63fd0e1eaeb26924e395a5ad/-473Wx593H-465836305-blue-MODEL4.jpg",
    "price": 3934,
    "rating": "3.8",
    "category": "men",
    "brand": "fitch",
    "tag": "shirt",
    "discount": 57,
    "subcategory": "big & tall clothing",
    "subcat2": "shirts",
    "reviews": 414,
    "image3": "https://assets.ajio.com/medias/sys_master/root/20230228/5zcG/63fd0e1eaeb26924e395a5ad/-473Wx593H-465836305-blue-MODEL4.jpg"
  },
  {
    "title": "Floral Flared Kurta",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220705/eLhp/62c358e6aeb26921af606f2d/-473Wx593H-464586933-wine-MODEL.jpg",
    "image2": "https://assets.ajio.com/medias/sys_master/root/20220705/G9JS/62c358e6aeb26921af606ebf/-473Wx593H-464586933-wine-MODEL4.jpg",
    "price": 834,
    "rating": "3.8",
    "category": "women",
    "brand": "fitch",
    "tag": "kurtis",
    "discount": 54,
    "subcategory": "plus size clothing",
    "subcat2": "dresses",
    "reviews": 44,
    "image3": "https://assets.ajio.com/medias/sys_master/root/20220705/Y80x/62c358e6aeb26921af606ec5/-473Wx593H-464586933-wine-MODEL6.jpg",
    "images": [
      "https://assets.ajio.com/medias/sys_master/root/20220705/Y80x/62c358e6aeb26921af606ec5/-473Wx593H-464586933-wine-MODEL6.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20220705/Y80x/62c358e6aeb26921af606ec5/-473Wx593H-464586933-wine-MODEL6.jpg"
    ]
  },
  {
    "title": "Embellished Flared Kurta",
    "image": "https://assets.ajio.com/medias/sys_master/root/20221126/rBNz/63813544aeb269659cb82821/-473Wx593H-465346304-maroon-MODEL2.jpg",
    "image2": "https://assets.ajio.com/medias/sys_master/root/20221126/YcQ3/63813544aeb269659cb82822/-473Wx593H-465346304-maroon-MODEL5.jpg",
    "price": 937,
    "rating": "4.8",
    "category": "women",
    "brand": "zara",
    "tag": "kurtis",
    "discount": 54,
    "subcategory": "clothing",
    "subcat2": "dresses",
    "reviews": 44,
    "image3": "https://assets.ajio.com/medias/sys_master/root/20221126/YcQ3/63813544aeb269659cb82822/-473Wx593H-465346304-maroon-MODEL5.jpg",
    "images": [
      "https://assets.ajio.com/medias/sys_master/root/20221126/YcQ3/63813544aeb269659cb82822/-473Wx593H-465346304-maroon-MODEL5.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20221126/YcQ3/63813544aeb269659cb82822/-473Wx593H-465346304-maroon-MODEL5.jpg"
    ]
  }
]



  "image": "https://assets.ajio.com/medias/sys_master/root/20221109/u2JJ/636b8eddaeb269659c7f91b5/-473Wx593H-462323964-white-MODEL.jpg",
      "discount": 57,
      "image2": "https://assets.ajio.com/medias/sys_master/root/20221109/BeoJ/636b8eddaeb269659c7f913f/-473Wx593H-462323964-white-MODEL4.jpg",
      "title": "Polo T-shirt Collar",
      "subcategory": "clothing",
      "brand": "zara",
      "price": 1223,
      "category": "men",
      "reviews": 47,
      "tag": "shirt",
      "rating": 5,
      "userId": "645dc775f7bcb4466655fa78",
      "userName": "admin",
      "images": [
        "https://assets.ajio.com/medias/sys_master/root/20221109/BeoJ/636b8eddaeb269659c7f913f/-473Wx593H-462323964-white-MODEL4.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20221109/u2JJ/636b8eddaeb269659c7f91b5/-473Wx593H-462323964-white-MODEL.jpg"
      ]
    }
 * 
 */