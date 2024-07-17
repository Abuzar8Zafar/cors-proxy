const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/api/proxy", async (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.status(400).send("URL is required");
  }

  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    res.status(500).send("Error fetching the URL");
  }
});

app.listen(PORT, () => {
  console.log(`CORS Proxy running on http://localhost:${PORT}`);
});
