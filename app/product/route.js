import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";


export async function GET(request){













    co
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

export async function   POST(request){
    let body=request.body
    const database=client.db('stock');
    const inventory=database.collection('inventory');
const uri="mongodb+srv://anirbanghosh060:3CtBku79qz9pP2IK@cluster0.oi9cl.mongodb.net/";
  const client =new MongoClient(uri);
  try{
    const query={ };
    const allProducts = await inventory.insertOne(body)
    return NextResponse.json({product})
  }
  finally{
    await client.close();
  }
}
