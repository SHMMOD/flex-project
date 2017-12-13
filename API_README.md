## User
**GET: /api/users/:userId**

## Project
**GET: /api/projects/:projectId**

**GET: /api/users/:userId/projects**

**POST: /api/projects**
```
{
  name: 'project name',
  userId: 'user ID'
}
```

**PUT /api/projects/:projectId**
```
{
  name: 'new project name'
}
```

**DELETE /api/projects/:projectId**
