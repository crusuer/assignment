//routes.js
//initialize express router
let router = require('express').Router();
//set default API response
router.post('/', function(req, res) {
    res.json({
        code: 0,
        msg: 'success',
        records: []
    });
});
//Export API routes
module.exports = router;