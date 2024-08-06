const express = require('express')
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync')
const Listing = require('../models/listing');

const ExpressError = require('../utils/ExpressError/expressError')
const {isLoggedin,isOwner} = require('../middleware/middleware.js')
const listingControllers = require('../controllers/listingControllers.js')
router.route('/')
    .get(wrapAsync(listingControllers.index))
    .post(isLoggedin, wrapAsync(listingControllers.postListing))
router.get('/new',isLoggedin,listingControllers.newListingForm)
router.route('/:id')
    .get(wrapAsync(listingControllers.showInDetails))
    .put(isLoggedin,isOwner,wrapAsync(listingControllers.updateData))
    .delete(isLoggedin,isOwner, wrapAsync(listingControllers.deleteListing))
router.get('/:id/edit',isLoggedin,isOwner,wrapAsync(listingControllers.updateForm))


module.exports = router;