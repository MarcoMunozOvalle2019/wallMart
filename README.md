# Introduction

This codebase is used to  wallMart company like challeng one

## Problem Statement
they ask me for some app to be able palindromo word give 50% discount in 

## Existing Business Rules
searh product by id brand and description. if ask for id this must show exactly that product
if consults are with palindromo'word then it obtain 50% discount

## Extension tasks
1. this stask was doing by nodeJS, ejs ( engine ), 
2. Implement did not need front-end engine like Angular or React-Redux intead of i could do it.
3. I used heroku site to deploy 
4. I used mlab to mongoDB
5. I used enviroment variables just to sho how to use it.
6. I use Jest to unitary test in 3 files.
7. thaks 

## Requirements
* [Node](https://nodejs.org/en/)

## Usage

Setup project ```npm install```

Run tests: `npm run test`

Run start: `npm run start`

### Start the application

That would launch an web application on port `8080` by default, if you're running into port conflict, just modify the port in `src/index.js` or stop the existing application one on `8080`.

After the launch, you could access the application via sending http requests to the following endpoint.
for local use:
http://localhost:8080/api/v1/productos/busqueda

for heroku just use any navigator like chrome:
https://desafio2020.herokuapp.com/api/v1/productos/busqueda

