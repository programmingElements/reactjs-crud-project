===============================
Dockerizing the React JS Application
===============================

1. Two way we can deploy reactjs application
   
     a. By directly running the react js app in docker container

     b. By using third party server like nginx, apache , httpd 

By Directly running the react js app in docker container
------------------------------------------------------------------------

1. Clone the Repository
   
    $ git clone https://github.com/programmingElements/reactjs-crud-project.git

    $ cd reactjs-crud-project

2. Create a Dockerfile

     $ vi Dockerfile
       
         FROM node:20.18.0
         
         COPY package*.json /app/

         WORKDIR /app/

         RUN npm install

         COPY . .

         ENTRYPOINT ["npm", "run", "dev"]

    press "wq" to save and quit

3. Create docker image

    $ docker build -t reactjs-crud-app .
    
    $ docker images

4. Create docker container

    $ docker run -d --network=host reactjs-crud-app

    $ docker ps 

    $ docker ps -a

5. Access the reactjs application

    http://localhost:5173/
    
    http://public-url:5173/


By using third party server like nginx, apache , httpd 
---------------------------------------------------------------------

1. Clone git repository

   $ https://github.com/programmingElements/reactjs-crud-project.git
   
   $ cd reactjs-crud-project

2. Install Node in Host Machine

    Reference Link :  https://nodejs.org/en/download/package-manager


   # installs nvm (Node Version Manager)
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

  # download and install Node.js (you may need to restart the terminal)
  nvm install 20

  # verifies the right Node.js version is in the environment
  node -v # should print `v20.18.0`

  # verifies the right npm version is in the environment
  npm -v # should print `10.8.2`

3. Build the React JS Project
    
    $ cd reactjs-crud-project

    $ npm install

    $ npm run build

4. Create a Dockerfile
   
    Reference Link for nginx docker image : https://hub.docker.com/_/nginx
    
    $ vi Dockerfile

     FROM nginx
    
     EXPOSE 3000

     COPY dist /usr/share/nginx/html

5. Create a docker image
    
    $ docker build -t reactjs-crud-app-02 .
  
    $ docker images


6. Create a docker container

   $ docker run -d -p 3000:80 reactjs-crud-app-02

   $ docker ps 

   $ docker ps -a

7. Access the Application

    http://localhost:3000

     










































