const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const ejsMate = require("ejs-mate")
const ExpressError = require('./utils/ExpressError/expressError')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
require('dotenv').config()
const User = require('./models/user.js')
const mongoUrl = process.env.MONGODBATLAS

const listingRouter = require('./routes/listing.js')
const reviewRouter = require('./routes/review.js')
const userRouter = require('./routes/user.js')
const app = express()
const cookie = {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
}
const store = MongoStore.create({
    mongoUrl: mongoUrl,
    crypto: {
        secret:process.env.SECRET_CODE
    },
    touchAfter: 3600
})
store.on("error",()=>{
    console.log("error in mongo session")
})
const sessionOptions = {
    store,
    secret: process.env.SECRET_CODE,
    resave: false,
    saveUninitialized: true,
    cookie
}
app.use(session(sessionOptions))
app.use(flash()) 

app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser())
app.engine('ejs',ejsMate)
app.use(express.static(path.join(__dirname,'public')))
const methodOverride = require("method-override")
app.use(methodOverride('_method'))
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({extended: true}))

app.use((req,res,next)=>{
    res.locals.message = req.flash("success")
        res.locals.errMessage = req.flash("error") 
    res.locals.currentUser = req.user;
    next()
})

app.use('/listings',listingRouter)
app.use('/listings/:id/reviews',reviewRouter)
app.use('',userRouter)
app.use((req,res,next)=>{
    next(new ExpressError(404, "page not found"))
})
app.use((err,req,res,next)=>{
    const {statusCode=500, message="something went wrong"} = err;
    req.flash("error",message);
    res.redirect('/listings')
})

async function main() {
    await mongoose.connect(mongoUrl)
}
main()
.then(()=>{console.log("connected to db")})
.catch(()=>{console.log("some errro occured")})

const port = 8080;
app.listen(port,()=>{console.log(`server is listening to port ${port}`)})


