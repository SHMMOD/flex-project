const mongoose = require('mongoose');

const Project = mongoose.model('projects');

module.exports = (app) => {
  // GET all projects
  // app.get('/api/projects', (req, res) => {
  //   // from: https://stackoverflow.com/questions/14103615/mongoose-get-full-list-of-users
  //   Project.find({}, function(err, projects) {
  //     var projectMap = {};
  //
  //     projects.forEach(function(project) {
  //       projectMap[project._id] = project;
  //     });
  //
  //     res.send(projectMap);
  //   });
  // });

  // GET single project by ID
  app.get('/api/projects/:id', (req, res) => {
    Project.findOne({ _id: req.params.id })
      .exec(function (err, projectResp) {
        // TODO handle errors
        if (err) return console.log(err);
        // TODO handle no project found
        res.send(projectResp);
      });
  });

  // GET all of a user's projects
  app.get('/api/users/:userId/projects', function(req, res) {
    Project.find({ userId: req.params.userId },
      function(err, projectsResp) {
        // TODO handle errors
        if (err) return res.send(err);
        return res.send(projectsResp);
      }
    );
  });

  // POST new project directory
  // app.post('/api/projects', (req, res) => {
  //   console.log(req.body);
  //   const newProject = new Project({
  //     name: req.body.name,
  //     // TODO use current user's ID
  //     user: req.body.user
  //    });
  //   newProject.save(function (err, project) {
  //     // TODO implement error handling
  //     if (err) return console.log(err);
  //   }).then(projectResp => res.send(projectResp));
  // });


  // PATCH a project

  // DELETE a project
  // app.delete('/api/projects/', (req, res) => {
  //   const project = Project.findById(req.body.projectId);
  //   Project.remove({ project }, function(err) {
  //     if (err) return console.log(err);
  //   });
  // });
};
