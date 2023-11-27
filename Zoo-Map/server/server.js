const { MongoClient } = require("mongodb");

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;
const mongoDBConnectionString =
  "mongodb+srv://david:pass@cluster0.yshjcqa.mongodb.net/zoo?retryWrites=true&w=majority";



//get animal by id
app.get("/api/:id", async (req, res) => {
  const meetupId = req.params.id;

  try {
    const client = await MongoClient.connect(mongoDBConnectionString);
    const db = client.db();

    const animals = db.collection("animals");
    console.log(animals);

    const query = { ["id"]: meetupId };
    const result = await animals.findOne(query);
    console.log(result);
    client.close();

    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Animal not found" });
    }
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

//update animal by id
app.put("/api/:id", async (req, res) => {
  const meetupId = req.params.id;

  try {
    const client = await MongoClient.connect(mongoDBConnectionString);
    const db = client.db();

    const animals = db.collection("animals");
    const query = { ["id"]: meetupId };
    const updateDoc = {
      $set: req.body, // Assuming the request body contains the updated data
    };

    const result = await animals.updateOne(query, updateDoc);
    client.close();

    if (result.matchedCount > 0) {
      res.json({ message: "Animal updated successfully" });
    } else {
      res.status(404).json({ message: "Animal not found" });
    }
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

//delete animal by id
app.delete("/api/:id", async (req, res) => {
  const meetupId = req.params.id;

  try {
    const client = await MongoClient.connect(mongoDBConnectionString);
    const db = client.db();

    const animals = db.collection("animals");
    const query = { ["id"]: meetupId };

    const result = await animals.deleteOne(query);
    client.close();

    if (result.deletedCount > 0) {
      res.json({ message: "Animal deleted successfully" });
    } else {
      res.status(404).json({ message: "Animal not found" });
    }
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

//get all animals
app.get("/api", async (res) => {
  try {
    const client = await MongoClient.connect(mongoDBConnectionString);
    const db = client.db();

    const animals = db.collection("animals");
    const result = await animals.find().toArray();
    client.close();

    res.json(result);
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
