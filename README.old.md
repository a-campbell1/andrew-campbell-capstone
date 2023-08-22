andrew-campbell-capstone
Project Title
Photography comparison tip tool Snappy Happy

Overview
What is your app? Brief description in a couple of sentences.

A app for begginer photographers to get ideas of pictures to take and what style of shots they would like to create and to copy the picture taken from the profesional then people can comment or give tips of what to try next time ie lower the iso change the shutter speed try using a tri-pod.

Problem
Why is your app needed? Background information around any pain points or other reasons.

To help now comers to photography with a idea of what to take pictures of and practice the skills and the settings of the camera.

User Profile
Who will use your app? How will they use it? Any special considerations that your app must take into account.

biginner photographers creating the idea of what you have in mind to the digital world of photography.

Features
List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe how these features are implemented, only what needs to be implemented.

beginner photographer will have a picture in 1 box on the screen as a idea for a perticular shot (landscape, wildlife, night-shot, panning shot) and the user will upload there attempt of the re-created shot. people can view the attempt like it and comment on it with tips and advice.

Tech Stack
List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

react hook form, color hunt, express file upload, react comparison slider

APIs
List any external sources of data that will be used in your app.

My api key = FQWZQpOm0Zc1jPQo0VVM5j7xn1pDJr08cDgZ7XfXzAn4HJIgEwS20akG api ive been looking into is https://www.pexels.com/api/documentation/

Implementation
Sitemap
List the pages of your app with brief descriptions. You can show this visually, or write it out.

main page - displaying the pro image to re-create with a header and a footer comments section like button in the shape of a camera refresh button to get a new pro image log in page location ides and things you may need on the shoot.

Mockups
Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

Endpoints
List endpoints that your server will implement, including HTTP methods, parameters, and example responses. GET, POST

GET /todos

Lists all todo items.
GET one picture
GET random picture
POST one picture

[
    {
        id: "photo1"
        name: "landscape",
        edited: true/false
        location: "Galapagos"
        make/model: "Sony"
    },
]
Database
Describe your data and the relationships between them. You can show this visually using diagrams, or write it out. get a random picture from a api and display the picture in a box

uplod pictures and data to a Json file for the begginers photos to be stored

Auth
Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented. Login page with email and password

No

Roadmap
Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

create folder structure set up api end points create basic header and footer 2 cards styled nicely for pics to display responsive design mob ,tab, desktop be able to upload pics to back end create form login create comment form section create like button

Nice-to-haves
Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.

light mode and dark mode, genre drop down box to select what type of picture to re-create landscape, motorsport, portrait Fav pic gallery to store your favourite pro pics to try and re-create
a log in page will require an email and password entered to proceed to upload a picture
