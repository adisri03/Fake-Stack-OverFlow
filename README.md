[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/9NDadFFr)
Add design docs in *images/*

## Instructions to setup and run project

- Pre-requisites: Node.js, npm, MongoDB installed

- This program also assumes that MongoDB is running on the default port 27017 and localhost

- Make sure port 3000 and 8000 is not in use

Clone the repository

```bash
$ git clone git@github.com:CSE-316-Software-Development/final-project-adam-jason.git
$ cd final-project-adam-jason
```

Install dependencies in Client and Server

```bash
$ cd client
$ npm install
$ cd ../server
$ npm install
```

Initialize the database

```bash
# Make sure you are in the server directory
$ node init.js <email_of_admin> <password_of_admin>

# Example: node init.js admin@example.com admin
```

Run the server

```bash
# Make sure you are in the server directory
$ npm start <secret_key>

# Example: npm start secret
```

On a separate terminal, run the client

```bash
# Make sure you are in the client directory
$ npm start
```

## Other Information

Login Credentials

```
Email: user1@gmail.com
Password: abc123
Rep: 0

Email: user2@gmail.com
Password: abc123
Rep: 40

Email: user3@gmail.com
Password: abc123
Rep: 70
```

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

