const express = require('express');
const router = express.Router();
const SiteControllers = require('../app/controllers/SiteControllers.js');

router.use('/search', SiteControllers.search);
router.use('/', SiteControllers.home);

module.exports = router;
