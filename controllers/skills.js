// this is the model
const Skill = require('../models/skill');

module.exports = {
  index,
  new: addSkill,
  create
}

function index(req, res) {
  const skillsInModel = Skill.listAllSkills()
  res.render('skills/index', { skillz: skillsInModel });
}

function addSkill(req, res) {
  res.render('skills/new', { title: "Add a new skill for Brad" } );
}

function create(req, res) {
  console.log(req.body);
  // send to the model
  Skill.create(req.body);

  res.redirect('/skills');
}