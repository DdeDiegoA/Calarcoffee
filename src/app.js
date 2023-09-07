import express from 'express';

//* settings
const app = express();

//* A middleware that allows us to parse the body of the request. */
app.use(express.json());

//* Importing the routes from the routes folder. */

export default app;
