import { MongoClient } from "mongodb";

export class MongoDatabase {
  private client = new MongoClient(process.env.DATABASE_URI as string);

  async color() {
    try {
      this.client.connect();
      let database = this.client.db("WebSite");
      let  collection = await database.collection("WebSitePalette");
      let pallete = await collection.find().toArray();
      return pallete[0]
    } catch (error) {
      console.error(error);
    }finally{
      this.client.close();
    }
  }
}