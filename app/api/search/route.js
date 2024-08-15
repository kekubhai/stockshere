
import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

// Connection URI
const uri = "mongodb+srv://anirbanghosh060:3CtBku79qz9pP2IK@cluster0.oi9cl.mongodb.net/";

// Initialize MongoDB Client
let client;
async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }
  return client;
}

export async function GET(request) {
    const query=request.nextUrl.searchParams.get("query")
  try {
    const client = await connectToDatabase();
    const database = client.db('stock');
    const inventory = database.collection('inventory');

    const query={}
    const products = await inventory.aggregate([   
       { $match: {
        $or: [
          { slug: { $regex: query, $options: "i" } },  // Case-insensitive search in 'slug'
         
        ]
      }
    },]).toArray()

    return NextResponse.json({ success:true,products });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: ' Server Error' }, { status: 50 });
  } finally {
    if (client) {
      await client.close();

    }
  }
}

