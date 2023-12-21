[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/9NDadFFr)
Add design docs in *images/*

## Instructions to setup and run project
1) in a new terminal, enter "mongod --bind_ip 127.0.0.1", assuming you have mongoDB setup
2) in another terminal, cd into the repository directory, and again into server. Then enter "node init.js <admin email> <admin password>"
   we suggest using admin@example.com and password, but whatever works for you.
3) in that same terminal (or a new one, you just have to be in the server directory) enter the command "npm start secret"
4) in a new terminal, cd into the repo directory and again into client, then enter "npm run start" to run the react app
5) IMPORTANT: I (max) couldn't get voting to work with questions. It definitely works with answers, not sure about comments. You will get an error in
   the console when trying to upvote a question. By default when you register you start with 50 reputation. If you wish to change that, just change it
   in the user schema in server/model/user from 50 to your desired number.

## Team Member 1 Contribution
- Login Page
- Welcome Page
- Register Page
- Comments
- User Page/Admin Page
- Upvoting and Downvoting Answers

## Team Member 2 Contribution
- Schemas
- Routes
- Creating new Users
- Sending data to database
- Cookies/Sessions
- User Page/Admin Page
- Password Hashing

