const express = require('express')
const router = express.Router({mergeParams:true});
const wrapAsync = require('../utils/wrapAsync')
const Listing = require('../models/listing');
const Review = require('../models/review.js')
const ExpressError = require('../utils/ExpressError/expressError')
const {isLoggedin, isReviewAuthor} = require('../middleware/middleware.js')
const reviewController = require('../controllers/reviewController.js')


router.post('/',isLoggedin,wrapAsync(reviewController.postReviewData))
router.delete('/:reviewId',isLoggedin,isReviewAuthor,wrapAsync(reviewController.destroyReview))
module.exports = router;