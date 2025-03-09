const express = require('express');
const app = express();
const port = 4000;

const morgan=require("morgan")
app.use(morgan("combined"))

const bodyParser=require("body-parser")
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb' }));
app.use(express.json());

const cors=require("cors");
app.use(cors())

app.listen(port,()=>{
console.log(`My Server listening on port ${port}`)
})
app.get("/",(req,res)=>{
res.send("This Web server is processed for MongoDB")
})

const { MongoClient, ObjectId } = require('mongodb');
client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect();
database = client.db("FashionStore"); 
fashionCollection = database.collection("Fashion");
// Entire Fashion
app.get("/fashions", cors(), async (req, res) => { 
    try {
        const result = await fashionCollection
            .find({})
            .sort({ createdAt: -1 }) // Sort by createdAt descending
            .toArray();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Error fetching fashions", error });
    }
});

// Filter Fashions by Style
app.get("/fashions/style/:style", cors(), async (req, res) => {
    try {
        const result = await fashionCollection.find({ style: req.params.style }).toArray();
        res.send(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// Return a Fashion
app.get("/fashions/:id",cors(),async (req,res)=>{
    var o_id = new ObjectId(req.params["id"]);
    const result = await fashionCollection.find({_id:o_id}).toArray(); 
    res.send(result[0])
    }
    )

// Add a Fashion
app.post("/fashions", cors(), async (req, res) => {
    try {
        // Lấy thời gian hiện tại theo GMT+7
        const createdAt = new Date().toISOString(); // Lưu theo UTC
        
        // Chuẩn bị dữ liệu để lưu vào MongoDB
        const newFashion = {
            ...req.body,
            created_at: createdAt, // Thêm timestamp vào object
        };

        // Thêm dữ liệu vào database
        await fashionCollection.insertOne(newFashion);

        // Gửi phản hồi về client
        res.status(201).send(newFashion);
    } catch (error) {
        res.status(500).send({ error: "Internal Server Error", details: error });
    }
});


// Edit a Fashion
app.put("/fashions",cors(),async(req,res)=>{ 
    //update json Fashion into database
await fashionCollection.updateOne(
    {_id:new ObjectId(req.body._id)},//condition for update
    { $set: { //Field for updating
    style: req.body.style,
    fashion_subject:req.body.fashion_subject,
    fashion_detail:req.body.fashion_detail,
    fashion_image:req.body.fashion_image
    } 
    }
    )
    //send Fahsion after updating
    var o_id = new ObjectId(req.body._id);
    const result = await fashionCollection.find({_id:o_id}).toArray(); 
    res.send(result[0])
    })
// Remove a Fashion
app.delete("/fashions/:id",cors(),async(req,res)=>{ 
    //find detail Fashion with id
    var o_id = new ObjectId(req.params["id"]);
    const result = await fashionCollection.find({_id:o_id}).toArray(); 
    //update json Fashion into database
    await fashionCollection.deleteOne(
    {_id:o_id}
    )
    //send Fahsion after remove
    res.send(result[0])
    })
        