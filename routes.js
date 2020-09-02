//routes.js
//initialize express router
let router = require('express').Router();
//set default API response
router.post('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API'
    });
});
//Export API routes
module.exports = router;