var express = require('express');
var router = express.Router();
// I need access to my controller(s)
const skillsController = require('../controllers/skills');

module.exports = router;

// oh duh, i haven't called a controller function yet
// GET /skills
router.get('/', skillsController.index );
// GET /skills/new
router.get('/new', skillsController.new);
// POST /skills
router.post('/', skillsController.create);