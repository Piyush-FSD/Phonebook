const { MongoClient } = require("mongodb");




class MongoDbConnection {

    connectionString;
    options;
    connection;

    constructor(connectionString) {

        //Guard clause.
        if (!connectionString) {
            throw new Error('Connection string cannot be null.')
        }

        this.connectionString = connectionString;
        this.options = { useNewUrlParser: true, useUnifiedTopology: true };

    }


    //get connection

    async connect() {


        try {

            const client = new MongoClient(this.connectionString, this.options);

            this.connection = await client.connect();

            return this.connection;
        } catch (error) {

            throw new Error(`Error connecting to mongoDB: ${error}`)
        }
    }

    static async getConnection() {

        console.log(this.connection, 'this is connection')

        if (!this.connection) {
            throw new Error('No connection yet.')
        }

        return this.connection;
    }

};

module.exports = { MongoDbConnection };