// "use strict";

// const { MongoClient } = require("mongodb");
// require("dotenv").config();
// const { MONGO_URI } = process.env;
// const { v4: uuidv4 } = require("uuid");
// const { BadRequestError } = require("./Errors/customErrors");
// const { MongoDbConnection, getConnection } = require("./MongoDbConnection");

// const getContacts = async () => {
//     try {
//         const client = new MongoClient(MONGO_URI, options);
//         await client.connect();
//         const db = client.db("Phonebook");

//         const contacts = await db.collection("contacts").find().toArray();
//         client.close();

//         if (contacts.length > 0) {
//             return res.status(200).json({ status: 200, data: contacts, message: "Successfully retreived contacts!" });
//         }
//         return res.status(404).json({ status: 404, data: contacts, message: "Error retreiving contacts" });

//     } catch (error) {
//         console.log(error.stack);
//     }
// }

// module.exports = {
//     getContacts
// };