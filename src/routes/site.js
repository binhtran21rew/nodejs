const express = require('express');
const router = express.Router();
const SiteControllers = require('../app/controllers/SiteControllers.js');

router.get('/search', SiteControllers.search);
router.get('/', SiteControllers.home);

module.exports = router;
