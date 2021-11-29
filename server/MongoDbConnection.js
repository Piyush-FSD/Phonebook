//Try to think of a way to re-use your connection
//very similar to what you did in index.js file
//except.... instead of assigning it to req.app....

import { MongoClient } from "mongodb";

//we can return it here, and then simply call this function which will return the DB connection.

//1 create a function

//research on google to 
import dotenv from 'dotenv'
dotenv.config();

const { MONGO_URI } = process.env;

let mongodbConnection;

export const connect = async () => {
    try {
        const client = new MongoClient(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        mongodbConnection = await client.connect();
        return mongodbConnection;

    } catch (error) {
        throw new Error("Issue connecting to db")
    }
}

export const getConnection = () => {

    //only return the connection, if it exists
    if (mongodbConnection) {
        return mongodbConnection;
    }
    throw new Error('No connection for mongoDbConnection')
}

export const close = async () => {
    await mongodbConnection.close();
}


