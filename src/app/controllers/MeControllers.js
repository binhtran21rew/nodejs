const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeControllers {
    // GET /me/stores/course
    storesCourse(req, res, next ) {
        Promise.all([ Course.find({}), Course.countDocumentsDeleted()])
            .then( ([courses, deletedCount]) => 
                res.render('me/store-courses', {
                    deletedCount: deletedCount,
                    courses: mutipleMongooseToObject(courses)
                })
            )
            .catch(next)
    }
    // GET /me/trash/course
    trashCourses(req, res, next){
        Course.findDeleted({})
        .then(courses => {
            res.render('me/trash-courses', {
                courses: mutipleMongooseToObject(courses)
            })
        })
        .catch(next)
    }  
}

module.exports = new MeControllers();
