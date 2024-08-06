const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require('./review')

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1620254317747-06c748c22e3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNtYWxsJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D",
        set: (value)=>value === ""? "https://images.unsplash.com/photo-1620254317747-06c748c22e3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNtYWxsJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D": value
    },
    price: {
        type: Number,
        required: true,
        min: 10
    },
    location: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})
// trying to delete reviews from Review when particular listing is deleted using mongoose middleware
listingSchema.post("findOneAndDelete", async(listing)=>{
    if(listing) {
        await Review.deleteMany({_id:{$in:listing.reviews}})
    }
})
const Listing = mongoose.model('Listing',listingSchema);
module.exports = Listing;



