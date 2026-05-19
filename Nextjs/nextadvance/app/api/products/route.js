import { connectDB } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
      try {
         const db = await connectDB();
       const products = await db.collection("products").find({}).toArray()
       return NextResponse.json({success:true,data : products})
      } catch (error) {
       return NextResponse.json({success:false,error : "Failed to fetch"})
        
      }
   //. get => /api/products
}
   //. post => /api/products
export async function POST(request= NextRequest){
    try {
        const body = await request.json();
        const {name,price,quantity} = body;
        if(!name || !price){
            return NextResponse.json({success:false,error : "name and price is mandatory"},{status:400})
        }
         const db = await connectDB();
        const result =await db.collection("products").insertOne({name,price : Number(price), quantity})
       const products = await db.collection("products").find({}).toArray()
       
        return NextResponse.json({success:true,data : products})

    } catch (error) {
       return NextResponse.json({success:false,error : "Failed to insert"})
        
    }
}