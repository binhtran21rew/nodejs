const express = require('express');
const router = express.Router();
const CoursesControllers = require('../app/controllers/CoursesControllers.js');

router.get('/create', CoursesControllers.create)
router.post('/store', CoursesControllers.store)
router.get('/:id/edit', CoursesControllers.edit);
router.put('/:id', CoursesControllers.update);
router.delete('/:id', CoursesControllers.delete);
router.delete('/:id/force', CoursesControllers.deleteForce);
router.patch('/:id/restore', CoursesControllers.restore);
router.get('/:slug', CoursesControllers.show);

module.exports = router;
