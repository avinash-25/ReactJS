import express from 'express';
import { task1, task2 } from './src/middleware/routeSpecific.middlware.js';
import { globalMiddleware } from './src/middleware/movie.middleware.js';
import { movieController } from './controllers/movies.controller.js';

const app = express();


//* global middleware
/*app.use((req, res, next) => {
    console.log("Authentication must required")
    next();
},
(req, res, next) => {
    console.log("Authentication must required")
    next();
})*/

//& route specific midleware

app.use(globalMiddleware)

app.get("/movies", [task1, task2], movieController);

app.get("/users", (req,res) => {
    res.send("USer : Avinash Ranjan")
})

app.listen(4000, (req, res) => {
    console.log("Server is running at 4000");
})


app.use((err, req, res, next) => {
    console.log(err);
    res.send(500).send("Something went wrong");
})
export default app;