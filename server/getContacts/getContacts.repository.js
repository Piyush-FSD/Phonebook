import { getConnection } from "../MongoDbConnection";
import { mongoDb, dbCollection } from "../constants";

export const get = async () => {

    const client = await getConnection();

    const db = client.db(mongoDb)

    return await db.collection(dbCollection).find().toArray();
};