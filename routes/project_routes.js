const mongoose = require('mongoose');

const Project = mongoose.model('projects');

module.exports = (app) => {
  console.log('app:', app);

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
    const newProject = new Project({
      name: req.body.name,
      // TODO use current user's ID
      userId: req.body.userId
     });
    newProject.save(function (err, project) {
      // TODO implement error handling
      if (err) return console.log(err);
    }).then(project => res.send(project));
  });


  // PATCH a project

  // DELETE a project
};
