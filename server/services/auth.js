const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const namespace = 'http://localhost:8080';

// Middleware
exports.checkJWT = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 15,
        jwksUri: 'https://rafay-portfolio.auth0.com/.well-known/jwks.json',
    }),

    audience: '97yI85YOb686sbnd_Rh0VJB0dbyhIuV_',
    issuer: 'https://rafay-portfolio.auth0.com/',
    algorithms: ['RS256']
});

exports.checkRole = function(role) {
    return function(req, res, next) {
        const user = req.user;

        if(user && (user[namespace + '/role'] === role)) {
            next();
        } else {
            return res.status(401).send({title: 'Not Authorized', description: 'You are not authorized to access this data.'})
        }
    }
};