### Installation and Starting API
There are 2 ways to start the api server

First --
1. install node and pnpm and mongoDB on your machine
2. cd to the directory
3. run pnpm install
4. copy contents from example.env to .env file with your variables
5. in cli write pnpm run start:dev

Second --
1. have docker installed on your machine
2. cd into the project DIR
3. run commands docker compose up -d




### API Endpoints

GET /library  --> Gives the list of all the books in the library and if pages and count passed paginates the response

POST /library --> Creates book by taking necessarily 2 inputs title and author

PATCH /library/:bookID --> takes body and bookId and updates if a book exists with that ID

DELETE /library/:bookID --> takes body and bookId and deletes if a book exsists with that ID

GET /library/:bookID --> Gives the book with that ID if exists


### Decisions and assumptions
1. API for listing all the books and bottleneck hence provided a paginated API
2. Title in a library(single) can be same hence made it unique
3. Summaries can be optional hence not needed but set to default as NA
4. Author is a needed field
5. Dockerized the app to make it easy for setup


### Deployment
The deployment is done on render using the docker containers and it is using a mongoDB cluster from mongoDB atlas

**DEPLOYMENT IS CI/CD Based hence no extra steps needed just push commmit and it will automatically deploy on render**

As the github repository is connected with Render

