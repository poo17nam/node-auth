# node-auth

A simple authentication system using jwt with functionalities such as register, login, get authenticated user data, logout.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node, NPM, MongoDB installed.

### Steps

Clone the repository
```
$  git clone git@github.com:poo17nam/node-auth.git
```

Navigate to the project, install necessary packages
```
$  cd node-auth/ & npm install
```

Run MongoDB on port 27017
```
$  service mongod start
```

Run node server :
```
$   npm start
```

Node server is now running on http://localhost:8000

Postman collection :

You can find the routes and sample requests **[here](https://github.com/poo17nam/node-auth/blob/main/node-auth.postman_collection.json)**
Download and import it in postman and explore the APIs
