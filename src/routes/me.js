const express = require('express');
const router = express.Router();
const meControllers = require('../app/controllers/MeControllers.js');

router.get('/stores/course', meControllers.storesCourse)
router.get('/trash/courses', meControllers.trashCourses)


module.exports = router;
