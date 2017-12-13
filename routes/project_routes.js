const mongoose = require('mongoose');

const Project = mongoose.model('projects');

module.exports = (app) => {

  // GET singly project by ID
  // app.get('/api/project/:id', (req, res) => {
  //   console.log(req);
  //   Project.findOne({ id: req.body.id})
  //     .populate('User')
  //     .then(userResp => res.send(userResp));
  // });


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

  // GET all of a user's projects


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
