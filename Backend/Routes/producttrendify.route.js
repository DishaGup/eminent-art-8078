const express = require("express")
const productTrendifyRouter = express.Router();
const {ProductTrendifyModel} = require("../Model/product.trendify.model");
const {auth} =require("../MiddleWare/logintrendify.middleware")


//adding the product by admin
productTrendifyRouter.post("/add",auth ,async (req, res) => {
  try {
    const medi =new ProductTrendifyModel(req.body);
    await medi.save();
    res.status(200).send("Successfully added Data");
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});



//get all products-

productTrendifyRouter.get("/all/:category?/:subcategory?/:subcat2?", async (req, res) => {
  const { category, subcategory, subcat2 } = req.params;

  let filters = {};

let uniques={}
if(category){
uniques.category=category
}

if (subcategory!=undefined) {
  uniques.subcategory = subcategory;
}

if (subcat2!=undefined) {
  uniques.subcat2 = subcat2;
}

  if (category!=undefined) {
    filters.category = category;
  }
  
  
  if (subcategory!=undefined) {
    filters.subcategory = subcategory;
  }
  
  if (subcat2!=undefined) {
    filters.subcat2 = subcat2;
  }

  
  let {sort,page}=req.query
  let pageSize=10
  page = parseInt(page) || 1;
  let value = 0;
  


if (req.query.brand) {
  filters.brand = { $in: req.query.brand };
}
  if (req.query.subcat2) {
    filters.subcat2 = req.query.subcat2;
  }
  if (req.query.name) {
    filters.name = { $regex: req.query.name, $options: "i" };
  }
  if (req.query.priceMinn) {
    filters.price = { ...filters.price, $gte: parseFloat(req.query.priceMinn) };
  }
  if (req.query.tag) {
    filters.tag = req.query.tag;
}
  if (req.query.priceMaxx) {
    filters.price = { ...filters.price, $lte: parseFloat(req.query.priceMaxx) };
  }
  
  if (req.query.rating) {
     filters.rating = { $gte: req.query.rating};
  }

  if (req.query.order == "asc") {
    value = 1
  } else if (req.query.order == "desc") {
    value = -1
  } else {
    value = 0;
  }
  
  try {

    const total = await ProductTrendifyModel.countDocuments(filters)
    const maxPage = Math.ceil(total / pageSize);
page = Math.min(maxPage, Math.max(1, page)); 
let skip = (page - 1) * pageSize;
skip<1?skip=0:skip=skip
    const products = await ProductTrendifyModel.find(filters).sort({[sort]: value}).skip(skip).limit(pageSize);
    let brands = await ProductTrendifyModel.distinct("brand",uniques);
    let tag = await ProductTrendifyModel.distinct("tag",uniques);
    res.status(200).send({ products, currentPage: page, totalPages: maxPage, totalResults: total,brands,tag });
   
  
   
   
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});


//get particular Products for logged-in user
productTrendifyRouter.get("/get/admin",auth ,async (req, res) => {
  try {
    const medi = await ProductTrendifyModel.find({ userId: req.body.userId });
    res.status(200).send({ products: medi });
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

productTrendifyRouter.patch("/update/:id",async (req, res) => {
  const { id } = req.params;
  const medi = await ProductTrendifyModel.find({ _id: id });
  try {
    if (req.body.medID !== medi.medID) {
      res.status("u are not that person");
    } else {
      const data = await ProductTrendifyModel.findByIdAndUpdate({ _id: id }, req.body);
      res.send("data has been updated");
    }
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});


productTrendifyRouter.delete("/delete/:id", auth,async (req, res) => {
  const { id } = req.params;
  try {
    const data = await ProductTrendifyModel.findByIdAndDelete({ _id: id });
    res.send("data has been Deleted");
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});


productTrendifyRouter.get("/single/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const medi = await ProductTrendifyModel.findById({ _id: id });
    res.status(200).send({ product: medi });
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});





productTrendifyRouter.get("/search", async (req, res) => {
  

let filters={}
  if (req.query.title) {
    filters.title = { $regex: req.query.title, $options: "i" };
  }

  try {
    
    const products = await ProductTrendifyModel.find(filters).skip(0)
   
    res.status(200).send({ products});
   
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});




module.exports = { productTrendifyRouter };