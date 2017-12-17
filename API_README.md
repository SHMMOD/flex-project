## User
**GET: /api/users/:userId**
```
{
    "user": {
        "_id": "5a347a71217e1d4e1c0f17a6",
        "createdAt": "2017-12-16T01:44:17.838Z",
        "updatedAt": "2017-12-16T01:44:17.838Z",
        "name": "Omar",
        "__v": 0
    },
    "projects": [
        {
            "_id": "5a347bc80351924e4188b1bf",
            "createdAt": "2017-12-16T01:50:00.746Z",
            "updatedAt": "2017-12-16T01:50:00.746Z",
            "userId": "5a347a71217e1d4e1c0f17a6",
            "__v": 0,
            "name": "WILL NOTE DELETE 1"
        },
        {
            "_id": "5a347bc80351924e4188b1c0",
            "createdAt": "2017-12-16T01:50:00.751Z",
            "updatedAt": "2017-12-16T01:50:00.751Z",
            "userId": "5a347a71217e1d4e1c0f17a6",
            "__v": 0,
            "name": "WILL NOTE DELETE 2"
        },
        {
            "_id": "5a347bc80351924e4188b1c1",
            "createdAt": "2017-12-16T01:50:00.752Z",
            "updatedAt": "2017-12-16T01:50:00.752Z",
            "userId": "5a347a71217e1d4e1c0f17a6",
            "__v": 0,
            "name": "WILL NOTE DELETE 3"
        },
        {
            "_id": "5a347bc80351924e4188b1c2",
            "createdAt": "2017-12-16T01:50:00.752Z",
            "updatedAt": "2017-12-16T17:47:32.913Z",
            "userId": "5a347a71217e1d4e1c0f17a6",
            "__v": 0,
            "name": "Edited via PUT"
        },
        {
            "_id": "5a34957d223c475103b2f39e",
            "createdAt": "2017-12-16T03:39:41.442Z",
            "updatedAt": "2017-12-16T03:39:41.442Z",
            "userId": "5a347a71217e1d4e1c0f17a6",
            "__v": 0,
            "name": "Project created via POST"
        }
    ],
    "ideas": [
        {
            "_id": "5a34aeb0c313fc529ad24513",
            "createdAt": "2017-12-16T05:27:12.290Z",
            "updatedAt": "2017-12-16T05:27:12.290Z",
            "fileType": "note",
            "name": "Seeded Note 1",
            "projectId": "5a347bc80351924e4188b1bf",
            "userId": "5a347a71217e1d4e1c0f17a6",
            "__v": 0,
            "favorited": false,
            "url": " ",
            "body": " "
        },
        {
            "_id": "5a34aeb0c313fc529ad24515",
            "createdAt": "2017-12-16T05:27:12.293Z",
            "updatedAt": "2017-12-16T05:27:12.293Z",
            "fileType": "recording",
            "name": "Seeded Idea 1",
            "projectId": "5a347bc80351924e4188b1c0",
            "userId": "5a347a71217e1d4e1c0f17a6",
            "__v": 0,
            "favorited": false,
            "url": "bing.com",
            "body": " "
        },
        {
            "_id": "5a34aeb0c313fc529ad24516",
            "createdAt": "2017-12-16T05:27:12.293Z",
            "updatedAt": "2017-12-16T05:27:12.293Z",
            "fileType": "recording",
            "name": "Seeded Recording 2",
            "projectId": "5a347bc80351924e4188b1c0",
            "userId": "5a347a71217e1d4e1c0f17a6",
            "__v": 0,
            "favorited": false,
            "url": "google.com",
            "body": " "
        },
        {
            "_id": "5a34aeb0c313fc529ad24514",
            "createdAt": "2017-12-16T05:27:12.292Z",
            "updatedAt": "2017-12-16T05:27:12.292Z",
            "fileType": "note",
            "name": "Seeded Note 2",
            "projectId": "5a347bc80351924e4188b1c0",
            "userId": "5a347a71217e1d4e1c0f17a6",
            "__v": 0,
            "favorited": false,
            "url": " ",
            "body": "content goes here"
        }
    ]
}
```

## Project
**GET: /api/projects/:projectId**

**GET: /api/users/:userId/projects**

**POST: /api/projects**

**PUT /api/projects/:projectId**

**DELETE /api/projects/:projectId**
**Works, but does not delete children**

## Idea
**GET: /api/idea/:ideaId**

**POST: /api/ideas**

**PUT /api/:ideaId**

**DELETE /api/:ideaId**
