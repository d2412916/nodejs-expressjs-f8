const Course = require('../models/Course')
class SiteController {


    //GET /
    index(req, res, next) {
        Course.find({})
            .then(courses => res.json(courses))
            .catch(error => next.error);
    }

    //GET /search
    search(req, res) {
        res.render('search');
    }
} 

module.exports = new SiteController;