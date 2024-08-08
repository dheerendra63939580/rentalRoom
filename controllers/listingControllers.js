const Listing = require('../models/listing.js')

module.exports.newListingForm = (req,res)=>{
    res.render('listings/new.ejs')
}

module.exports.index = async (req,res)=>{  
    const data= await Listing.find()
   return  res.render('listings/index.ejs',{data})
 }
 module.exports.showInDetails = async (req,res,next)=>{
    const {id} = req.params;
    const data = await Listing.findById(id).populate({path: "reviews",populate:{path:"author"}}).populate('owner')
    if(!data) throw new ExpressError(404,"id is incorrect")
    res.render('listings/show.ejs',{data})
 }
 module.exports.postListing = async (req,res,next)=> {
    await Listing.create({...req.body,owner: req.user._id})
    req.flash("success","new listing created")
    res.redirect("/listings")
}

module.exports.updateForm = async (req,res)=> {
    const {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing) throw new ExpressError(404,"id is incorrect")
    res.render('listings/edit.ejs',{listing})
}

module.exports.updateData = async (req,res)=> {
    const {id} = req.params;
    const listing = await Listing.findByIdAndUpdate(id, {...req.body},{new: true,runValidators:true})
    if(!listing) throw new ExpressError(404,"id is incorrect")
       req.flash('success','listing updated successfully')
    res.redirect(`/listings/${id}`)
}

module.exports.deleteListing = async (req,res)=> {
    const {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success",'listing deleted successfully')
    res.redirect("/listings")
}