"use strict";

const express = require("express");
const morgan = require("morgan");

const { addNewContact } = require("./handlers");

express()
    .use(morgan("tiny"))
    .use(express.json())

    .post("/contact/add", addNewContact)

    .get("*", (req, res) => {
        res.status(404).json({
            status: 404,
            message: "This is obviously not what you are looking for.",
        });
    })

    .listen(8000, () => console.log(`Listening on port 8000`));
