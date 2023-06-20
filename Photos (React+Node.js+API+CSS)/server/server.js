const express = require("express");
const axios = require("axios");

const app = express();

app.get("/api", (req, res) => {
  const apiUrl = "https://pixabay.com/api/";
  const apiKey = "25540812-faf2b76d586c1787d2dd02736";

  const query = req.query.q || "flowers";
  const pageNumber = req.query.pageNumber || 1;
  const idSort = req.query.idSort || "ascending";
  axios
    .get(apiUrl, {
      params: {
        key: apiKey,
        q: query,
      },
    })
    .then((response) => {
      let sortedData = response.data.hits.sort((a, b) => a.id - b.id);
      // Sorting function on the images by id:
      if (idSort === "ascending") {
        
        sortedData.sort((a, b) => a.id - b.id);
      }

      if (idSort === "descending") {
        
        sortedData.sort((a, b) => b.id - a.id);
      }
      // Pagination:
      const sets = [];
      const itemsPerPage = 9;
      for (let i = 0; i < sortedData.length; i += itemsPerPage) {
        sets.push(sortedData.slice(i, i + itemsPerPage));
      }
      res.json(sets[pageNumber - 1]);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to fetch data from Pixabay API" });
    });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
