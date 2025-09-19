function isAuth(req, res, next) {
    if (req.session.user) { //simply checking the req.session.user exist here 
        //it will only exist if there has been a successfull login
        next();
    }
    else {
        return res.status(401).json({ message: "Unauthorized" });
    }
}

module.exports = isAuth;