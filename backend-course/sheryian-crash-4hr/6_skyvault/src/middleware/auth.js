import jwt from 'jsonwebtoken';

function auth(req,res,next) {
    const token = req.cookies.token;

    if(!token) {
        res.status(401);
        return res.redirect("/unauthorised");
    }

    try {
        const decoded =jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        return next();
    } catch(err) {
        res.status(401);
        return res.redirect("/unauthorised");

    }
}

export default auth;