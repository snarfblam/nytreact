var express = require('express');

var router = express.Router();

router.get('/test', (req, res, next) => {
    res.send('all systems green');
});

module.exports = router;