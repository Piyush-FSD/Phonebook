import { getConnection } from "../MongoDbConnection";
import { mongoDb, dbCollection } from "../constants";

export const add = async (contactInformation) => {

    const client = await getConnection();

    const db = client.db(mongoDb);

    return await db.collection(dbCollection).insertOne(contactInformation);
};
