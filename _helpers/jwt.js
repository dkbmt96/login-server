const expressJwt = require('express-jwt');
const config = require('config.json');
const userService = require('../users/users.services');

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, isRevoked}).unless({
        path: [
            // public routes that don't require authentication
            '/users/authenticate',
            '/users/register'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(paylod.sub);

    if (!user) {
        return done(null, true);
    }

    done();
}