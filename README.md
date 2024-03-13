

## Instructions to setup and run project

- Pre-requisites: Node.js, npm, MongoDB installed

- This program also assumes that MongoDB is running on the default port 27017 and localhost

- Make sure port 3000 and 8000 is not in use

Clone the repository

```bash
$ git clone https://github.com/adisri03/Fake-Stack-OverFlow.git
$ cd final-project-fake-so
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


