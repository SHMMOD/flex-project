const mongoose = require('mongoose');

const Project = mongoose.model('projects');

module.exports = (app) => {


  app.get('/api/projects', (req, res) => {
    Project.find({}, function(err, projects) {
      var projectMap = {};

      projects.forEach(function(project) {
        projectMap[project._id] = project;
      });

      res.send(projectMap);
    });
  });


};
