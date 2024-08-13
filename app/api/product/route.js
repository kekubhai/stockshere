/* import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";


export async function GET(request){


    const database=client.db('stock');
    const inventory=database.collection('inventory');
const uri="mongodb+srv://anirbanghosh060:3CtBku79qz9pP2IK@cluster0.oi9cl.mongodb.net/";
  const client =new MongoClient(uri);
  try{
    const query={ };
    const allProducts = await inventory.find(query).toArray();
    return NextResponse.json({"a": 18,allProducts})
  }
  finally{
    await client.close();
  }
}

export async function  POST(request){
    let body=request.body
    const database=client.db('stock');
    const inventory=database.collection('inventory');
const uri="mongodb+srv://anirbanghosh060:3CtBku79qz9pP2IK@cluster0.oi9cl.mongodb.net/";
  const client =new MongoClient(uri);
  try{
    const query={ };
    const allProducts = await inventory.insertOne(body)
    return NextResponse.json({product,ok:true})
  }
  finally{
    await client.close();
  }
}
*/

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
    const allProducts = await inventory.find(query).toArray();

    return NextResponse.json({ a: 18, allProducts });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  } finally {
    if (client) {
      await client.close();
      client = null;  // Ensure client is set to null after closing
    }
  }
}

export async function POST(request) {
  let body= await request.body.json()
  console.log(body)
  try {
    const client = await connectToDatabase();
    const database = client.db('stock');
    const inventory = database.collection('inventory');

    const body = await request.json();  // Parse the request body
    const result = await inventory.insertOne(body);

    return NextResponse.json({ product: result.ops[0], ok: true });
  } catch (error) {
    console.error('Error adding product:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  } finally {
    if (client) {
      await client.close();
      client = null;  // Ensure client is set to null after closing
    }
  }
}
