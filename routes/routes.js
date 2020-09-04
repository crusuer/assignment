//routes.js
//initialize express router
let router = require('express').Router();
//set default API response
router.post('/fetch', function(req, res) {
    res.json({
        code: 0,
        msg: 'Success',
        records: []
    });
});
//Export API routes
module.exports = router;