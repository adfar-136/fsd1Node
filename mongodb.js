const {MongoClient} = require("mongodb");

const client = new MongoClient('mongodb://localhost:27017');

async function main(){
    await client.connect();
    console.log("connected")
    const db = client.db("students");

    const products = db.collection("products");
    // await products.insertMany([
    //     {name:"Laptop", price:3700 ,category:"Electronic",quantity:10},
    //     {name:"Phone", price:1000 ,category:"Electronic",quantity:9},
    //     {name:"Shirt", price:200 ,category:"Clothing",quantity:45},
    //     {name:"Pant", price:400 ,category:"Clothing",quantity:455}
    // ]);
    // console.log("Before")

    // // const all = await products.find({}).limit(3).toArray()
    // // // const all = await products.findOne({name:'Pant'});
    // // console.log(all)

    //   await products.updateOne({name:"PC"},{$set:{name:"Laptop"}})
    //    const all3 = await products.find({}).limit(3).toArray()
    // // const all = await products.findOne({name:'Pant'});
    // console.log(all3)
    // console.log("After")

    // await products.updateOne({name:"Laptop"},{$set:{name:"PC"}})

    //  const all2 = await products.find({}).limit(3).toArray()
    // // const all = await products.findOne({name:'Pant'});
    // console.log(all2)

     await products.deleteOne({name:"PC"})
     const all = await products.find({name:"PC"}).toArray();
    console.log(all)
}

main()