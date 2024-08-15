

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
  try {
    const client = await connectToDatabase();
    const database = client.db('stock');
    const inventory = database.collection('inventory');

    const query = {};
    const Products = await inventory.find(query).toArray();

    return NextResponse.json({ success:true,Products });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: ' Server Error' }, { status: 500 });
  } finally {
    if (client) {
      await client.close();
       // Ensure client is set to null after closing
    }
  }
}

export async function POST(request) {
  let body= await request.json()
  console.log(body)
  console.log("me")
  const uri="mongodb+srv://anirbanghosh060:3CtBku79qz9pP2IK@cluster0.oi9cl.mongodb.net/";
  const client=new MongoClient(uri);
  try {
  
    const database = client.db('stock');
    const inventory = database.collection('inventory');
    const product = await inventory.insertOne(body);

    return NextResponse.json({ product, ok: true });
  
  } finally {
      await client.close();
  }
}
