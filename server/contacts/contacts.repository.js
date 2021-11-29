import { getConnection } from "../MongoDbConnection";
import { dbCollection } from "./constants";


export const add = async (contactInformation) => {

    const client = await getConnection();

    const db = client.db('Phonebook');

    return await db.collection(dbCollection).insertOne(contactInformation);
}
