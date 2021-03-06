"use strict";

import express from 'express';
import morgan from 'morgan'
import { addNewContact } from './addContacts/addContacts.controller'
import { getContact } from './getContacts/getContacts.controller';
import { HttpException } from './Errors/customErrors.js';
import { connect } from './MongoDbConnection.js';
// import { getContacts } from './handlers.js'

const app = express()


app.use(morgan("tiny"))
app.use(express.json())

app.post("/contact/add", addNewContact)
app.get("/contact", getContact)

app.get("*", (req, res) => {
    res.status(404).json({
        status: 404,
        message: "This is obviously not what you are looking for.",
    });
});

app.use(function (err, req, res, next) {

    if (err instanceof HttpException) {
        return res.status(err.code).json({
            message: err.message,
            name: err.name,
            stack: err.stack
        })
    }

    return res.status(500).json({
        message: err.message,
    })
});

const startServer = async () => {
    try {
        const mongoDbConnection = await connect();

        if (mongoDbConnection) {
            app.listen(8000, () => console.log(`Listening on port 8000`));
            return;
        }

        throw new Error('Something went wrong in starting server')

    } catch (error) {
        console.error(error + 'startServer function')
    }
};


startServer();

