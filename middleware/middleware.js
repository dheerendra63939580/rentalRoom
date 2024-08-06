const Listing = require('../models/listing')
const Review = require('../models/review')
function isLoggedin(req,res,next) {
    
    if(!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","please login to add listings")
        return res.redirect('/login')
    }
    next()
}
function saveRedirectUrl(req,res,next){
    if(req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next()
}


const isOwner = async (req,res,next) => {
    const {id} = req.params;
    const checkUser = await Listing.findById(id);
    if(res.locals.currentUser && !checkUser.owner.equals(res.locals.currentUser._id)) {
        req.flash("error","you are not authorized")
        return res.redirect(`/listings/${id}`)
    }
    next()
}
const isReviewAuthor = async (req,res,next) => {
    const {id,reviewId} = req.params;
    const checkUser = await Review.findById(reviewId);
    if(res.locals.currentUser && !checkUser.author.equals(res.locals.currentUser._id)) {
        req.flash("error","you are not authorized")
        return res.redirect(`/listings/${id}`)
    }
    next()
}
module.exports = {isLoggedin, saveRedirectUrl,isOwner,isReviewAuthor}