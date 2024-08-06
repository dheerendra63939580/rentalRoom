const User = require('../models/user')
module.exports.signUpForm = (req,res)=>{
    res.render('users/signup.ejs')
}

module.exports.postSignUpData = async(req,res)=>{
    try {
        const {username, email, password} = req.body;
        const newUser = new User({username, email});
        const registeredUser = await User.register(newUser,password)
        req.login(registeredUser,(err)=>{
            if(err)
                return next(err)
            req.flash("success","you logged in");
           return res.redirect('/listings')
        })
       
    }
    catch(err) {
        req.flash("error",err.message)
        res.redirect("/signup");
    }
}
module.exports.loginForm = (req,res)=>{
    res.render('users/login.ejs')
}
module.exports.postLogInData = async(req,res)=>{
    req.flash("success","welcome back")
    const url = res.locals.redirectUrl || "/listings";
    res.redirect(url)
}
module.exports.logout = (req,res)=>{
    req.logout((err)=>{
        if(err)
            return next(err)
        req.flash("success","you have logged out");
        res.redirect('/listings')
    })
}