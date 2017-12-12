const mongoose = require('mongoose');

const Project = mongoose.model('projects');

module.exports = (app) => {

  // GET all projects
  app.get('/api/projects', (req, res) => {
    // from: https://stackoverflow.com/questions/14103615/mongoose-get-full-list-of-users
    Project.find({}, function(err, projects) {
      var projectMap = {};

      projects.forEach(function(project) {
        projectMap[project._id] = project;
      });

      res.send(projectMap);
    });
  });

  // GET all of a user's projects


  // POST new project directory
  app.post('/api/projects', (req, res) => {
    // TODO: check to ensure that project does not already exist
    // TODO: user current user's ID
    new Project ({name: req.name}).save().then(resp => console.log(resp));
  });


  // PATCH a project 

  // DELETE a project
};
