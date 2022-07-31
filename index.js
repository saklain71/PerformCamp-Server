const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// performcamp
// password -  7LDJdbsGEc8JChAz


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://performcamp:7LDJdbsGEc8JChAzS@cluster0.h1do2.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("performcamp").collection("data");
  console.log("Db Connected");
  // perform actions on the collection object
  client.close();
});


app.get('/', (req, res) => {
  res.send('Hello World!!')
})
app.get('/new',(req, res)=>{
  res.send('Another page ...')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})