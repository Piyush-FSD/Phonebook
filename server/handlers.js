"use strict";

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const { v4: uuidv4 } = require("uuid");

const options = { useNewUrlParser: true, useUnifiedTopology: true };

const addNewContact = async (req, res) => {
    try {
        const client = new MongoClient(MONGO_URI, options);
        await client.connect();
        const db = client.db('Phonebook');

        const { firstName, lastName, phoneNum } = req.body;

        // // data to send to mongoDb
        const contactInfo = { _id: uuidv4(), firstName, lastName, phoneNum };

        const contactForm = await db.collection("contacts").insertOne(contactInfo);
        console.log(contactForm, ' contact form')

        if (
            !req.body ||
            !firstName ||
            !lastName ||
            !phoneNum
        ) {
            res.status(400).json({ status: 400, message: "Error. Missing Data" })
            return
        }

        if (contactInfo) {
            res.status(200).json({ status: 200, data: contactForm, message: "Successfully added new contact" })
        } else {
            res.status(400).json({ status: 400, data: contactForm, message: "Error adding new contact" })
        }

    } catch (e) {
        console.log(e.stack)
    }
};

module.exports = {
    addNewContact
};