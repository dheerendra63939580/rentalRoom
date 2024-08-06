const mongoose = require('mongoose');
const Listing = require('../models/listing.js')
const {initialInfo} = require('./data.js')
require('dotenv').config()
const mongoUrl = process.env.MONGOATLAS;

async function main() {
    await mongoose.connect(mongoUrl)   
}
main()
.then(()=>{console.log("connected to db")})
.catch(()=>{console.log("some errro occured")})
const initDb = async ()=>{
    await Listing.deleteMany({});
    let initialData = initialInfo.map(obj=>{ return {...obj,owner: process.env.OWNER}})
    await Listing.insertMany(initialData)
    console.log('data initialized')
    
}
initDb()