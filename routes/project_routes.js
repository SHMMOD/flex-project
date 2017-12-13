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
  app.get('/api/projects/:projectId', (req, res) => {
    Project.findOne({ _id: req.params.projectId })
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

  // POST new project
  app.post('/api/projects', (req, res) => {
    const newProject = new Project({
      name: req.body.name,
      //TODO: ensure that userId === currentUser's id
      userId: req.body.userId
    });
    newProject.save(function(err, newProjectResp) {
      if (err) return res.send(err);
      return res.send(newProjectResp);
    });
  });

  // PUT a project
  app.put('/api/projects/:projectId', (req, res) => {
    Project.findById(req.params.projectId, function(err, queryProjectResp) {
      // TODO: handle error
      if (err) return res.send(err);

      // allowable fields to update
      queryProjectResp.name = req.body.name || queryProjectResp.name;

      queryProjectResp.save(function(saveErr, savedProjectResp) {
        if (saveErr) return res.send(saveErr);
        return res.send(savedProjectResp);
      });
    });
  });

  // DELETE a project
  app.delete('/api/projects/:projectId', (req, res) => {
    Project.findByIdAndRemove(req.params.projectId,
      function(err, projectsResp) {
        // TODO handle errors
        if (err) return res.send(err);
        // TODO: determine what to send down after a delete
        return res.send(projectsResp);
      });
  });
};
