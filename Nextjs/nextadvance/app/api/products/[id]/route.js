// /api/products/id=>dynamic

import { connectDB } from "@/app/lib/db";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
export async function PUT(request,{params}){
   try {
    const param = await params;
     const body = await request.json()
    const db = await connectDB();
    await db.collection("products").updateOne(
        {_id : new ObjectId(param.id)},
        {$set:{...body, updatedAt: new Date()}}
    )
    return NextResponse.json({success:true,Message : "Document Updated"})
   } catch (error) {
    return NextResponse.json({success:false,Message : error.Message}) 
   } 
}
export async function DELETE(request,{params}){
   try {
    const param = await params;
    const db = await connectDB();
    await db.collection("products").deleteOne(
        {_id : new ObjectId(param.id)}
    )
    return NextResponse.json({success:true,Message : "Document Deleted"})
   } catch (error) {
    return NextResponse.json({success:false,Message : error.Message}) 
   } 
}