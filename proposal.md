# Flex Project

## Background

Musicians often have thoughts and inspirations that come and go unpredictably, sometimes resulting in a disorganized songwriting process.  We want to create an app that streamlines and organizes notes and audio recordings used to create songs.  Our mobile app will allow registered users to organize a song into "projects", each being able to store notes that are specific to lyrics, chords, song structure, etc., as well as audio ideas.


## Functionality and MVP

* Create an account using username/password combination or OAuth
* Users can create projects that have the ability to store notes that can be autosaved
* Users can access a rhyming dictionary to help write lyrics
* Users can record audio snippets

## Wireframes

()

## Technologies & Technical Challenges

This app will utilize a node.js/express/PostgreSQL back-end. In place of an ORM, we will query the database directly using SQL.  The front-end will utilize React Native with Redux.  

### Things we accomplished this weekend
* Matt H., Matt S., and Omar each completed the official [React Native](https://facebook.github.io/react-native/) walkthrough and documentation.
* We completed the backend of basic user authentication utilizing Node.js/express
* We styled the authentication page of the app using React Native

# Implementation Timeline
**Day 1:** Connect the backend and front-end authentication, allowing users to sign in, sign up, and sign out.

**Day 2:** Complete the notes page, complete with auto-saving, custom styling,
* Quill
* Backend projects structure

**Day 3:** Create the 'projects' index page, allowing users to save notes under named projects. Also allows for navigation via swiping.
* Connecting back-end and front-end

**Day 4:** Integrate the ability to record and save audio snippets
* AWS

**Day 5:** Integrate audio playback

**Day 6:** Integrate and style rhyming dictionary implementation

**Day 7:** Create product splash page and README
