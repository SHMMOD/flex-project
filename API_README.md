## User
**GET: /api/users/:userId**

## Project
**GET: /api/projects/:projectId**

**GET: /api/users/:userId/projects**

**POST: /api/projects**
```
{
  "name": "project name",
  "userId": "user ID"
}
```

**PUT /api/projects/:projectId**
```
{
  "name": "new project name"
}
```

**DELETE /api/projects/:projectId**

## Note
**GET: /api/notes/:noteId**

**GET: /api/projects/:projectId/notes**

**POST: /api/notes**
```
{
  "name": "default name is - New Note"
  "projectId": "project ID goes here"
}
```

**PUT /api/notes/:noteId**
```
{
  "name": "new note name",
  "favorited": "false" 
}
```

**DELETE /api/notes/:noteId**
