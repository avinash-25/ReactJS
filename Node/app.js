import express from 'express';
import { task1, task2 } from './src/middleware/routeSpecific.middlware.js';
import { globalMiddleware, globalErrorMiddleware } from './middleware/globalMiddleware.js';
import { movieController } from './controllers/movies.controller.js';
import session from 'express-session';
import userRoutes from "./routes/userRoutes.js"
import adminRoutes from "./routes/adminRoutes.js";


const app = express();

// Gloabal middleware 
/*app.use((req, res, next) => {
    console.log("Authentication must required")
    next();
},
(req, res, next) => {
    console.log("Authentication must required")
    next();
})*/

//& route specific midleware
app.use(globalMiddleware);

//& cookies and session
app.use(session({
    secret: "Avi123", //* Always pass secret key
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 60 * 1000,
        sameSite: 'strict'
    }
}))

app.use("/api/v1", userRoutes);

app.use("/api/v2",adminRoutes);

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
});

app.use(globalErrorMiddleware);

export default app;