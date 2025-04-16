import jwt from 'jsonwebtoken'

function authMiddleware(req, res, next) {
    const token = req.headers['Authorization'];

    if(!token) {return res.status(401).send({ message: "No token provided" })}

    jwt.verify(token, process.env.JWT_SECRET,(err, decoded) => {
        if (err) {return res.status(401).send({ message:"Invalid Token" })}
        req.userId = decoded.id;
        next();
    }
);
}

export default authMiddleware