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

**Ability to write notes with styling**
* [Quill](https://quilljs.com) is a cross-platform text-editor that, when integrated, will allow users to customize their notes with styling.

**Integration of rhyming dictionary:**
* datamuse.com offers a free, simple API for finding rhymes. As a user types, they will be presented with an option to rhyme a word. The last word typed or the word currently being typed can be stored in the state. When the user clicks on the option to see rhymes, a GET request will be dispatched to datamuse. The top results can then be displayed to the user.

 **Users can record and play back audio snippets:**
* We will use [React Native Audio](https://github.com/jsierles/react-native-audio) to record audio snippets.
* We will user [React Native Sound](https://github.com/zmxv/react-native-sound) to play back audio snippets.
* Audio snippets will be saved to AWS

## Things we accomplished this weekend
* Matt H., Matt S., and Omar each completed the official [React Native](https://facebook.github.io/react-native/) walkthrough and documentation. We were each able to produce mobile apps with basic logic, and those apps bundled and refreshed instantly after saving.
* Matt S. and Omar completed the OAuth portion of a [Node with React Fullstack Web Development udemy course](https://www.udemy.com/node-with-react-fullstack-web-development/learn/v4/content). At the end of the tutorial, we were able to sign up, log in, and log out of a basic app.


# Implementation Timeline
**Day 1:** Connect the backend and front-end authentication, allowing users to sign in, sign up, and sign out.
* Implement back-end authentication and user-creation using OAuth (Matt H. and Omar)
* Style frontend authentication page

**Day 2:** Complete the notes page, complete with auto-saving, custom styling,
* Construct 'projects' model (Omar)
* Create 'projects' route handlers
* Integrate note-taking with styling using Quill

**Day 3:** Create the 'projects' index page, allowing users to save notes under named projects. Also allows for navigation via swiping.
* Connecting back-end and front-end

**Day 4:** Integrate the ability to record and save audio snippets
* Integrate AWS A3 storage (Omar)
* Integrate React Native Audio

**Day 5:** Integrate audio playback
* Integrate React Native Sound (Omar)
* Style playback features

**Day 6:** Integrate and style rhyming dictionary implementation

**Day 7:** Create product splash page and README
* Create README (Omar)
* Write splash page
* Style splash page

## Plan for getting users and reviews
Among the three of us, we have a large number of friends who happen to be musicians. We will be in communication throughout the week to ask them what sort of features/styling they would like to see in a song-writing app. Once the app is approved by Apple, we will react out to those individuals to have them beta test our app.
