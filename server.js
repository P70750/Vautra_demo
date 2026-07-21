const express = require("express");

const app = express();

const PORT = process.env.PORT || 8090;

app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 Welcome to Vautra Application</h1>
    <h2>Deployment Successful</h2>
    <p>GitHub Actions + Docker + GHCR + Self Hosted Runner</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
