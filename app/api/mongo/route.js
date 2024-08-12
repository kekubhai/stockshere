import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";


export async function GET(request){













    const uri="mongodb+srv://anirbanghosh060:3CtBku79qz9pP2IK@cluster0.oi9cl.mongodb.net/";
  const client =new MongoClient(uri);
  try{
    const database=client.db('Anirban');
    const movies=database.collection('inventory');

    const query={ };
    const movie = await movies.find(query).toArray();
    console.log(movie);
    return NextResponse.json({"a": 18,movie})
  }
  finally{
    await client.close();
  }
}