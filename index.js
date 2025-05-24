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
const uri = `mongodb+srv://${process.env.DV_USER}:${process.env.DV_PASS}.s8czgyg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


// Mafikul_assigment-10
// QMZ2iQ6SnIx4hil2

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
run().catch(console.dir);
