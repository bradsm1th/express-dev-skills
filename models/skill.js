const skills = [
  {skillName: 'Enjoying TF Out of <em>Calvin and Hobbes</em>', yearAcquired: 1995, value: 2 },
  {skillName: 'Getting married', yearAcquired: 2013, value: 1 },
  {skillName: 'Enrolling in General Assembly', yearAcquired: 2023, value: 3 },
]

// what do I want other modules to have access to from this one?
module.exports = {
  listAllSkills,
  listOneSkill
}

function listAllSkills() {
  return skills;
}

function listOneSkill(idx) {
  return "Not done yet"
}