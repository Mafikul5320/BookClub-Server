const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 3000;
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
const uri = "mongodb+srv://Mafikul_assigment-10:QMZ2iQ6SnIx4hil2@cluster0.s8czgyg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {
        const userCollection = client.db("DBusers").collection("user")
        const InfoDataCollection = client.db("DBusers").collection("Info")
        app.post("/users", async (req, res) => {
            const newUser = req.body;
            const result = await userCollection.insertOne(newUser)
            res.send(result)
        })
        app.post("/create-group", async (req, res) => {
            const newData = req.body;
            const result = await InfoDataCollection.insertOne(newData)
            res.send(result)
        })
        app.get("/create-group/data", async (req, res) => {
            const result = await InfoDataCollection.find().toArray();
            res.send(result)
        })
        app.get("/create-group/data/:id", async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await InfoDataCollection.findOne(query)
            res.send(result)
        })
        app.put("/create-group/data/:id", async (req, res) => {
            const id = req.params.id;
            const data = req.body
            const options = { upsert: true };
            const query = { _id: new ObjectId(id) }
            const updateData = {
                $set: data
            }
            const result = await InfoDataCollection.updateOne(query, updateData, options)
            res.send(result)

        })
        app.delete("/create-group/data/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await InfoDataCollection.deleteOne(query);
            res.send(result)
        })
        app.get("/create-group/:myProfile", async (req, res) => {
            const email = req.params.myProfile;
            const query = { email }
            const result = await InfoDataCollection.find(query).toArray();
            res.send(result)
        })

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {

    }
}

// Mafikul_assigment-10
// QMZ2iQ6SnIx4hil2

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
run().catch(console.dir);
