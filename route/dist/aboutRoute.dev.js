"use strict";

var _require = require('express'),
    Router = _require.Router;

var router = Router();

var path = require('path');

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'client', 'en', 'about.html'));
});
module.exports = router;