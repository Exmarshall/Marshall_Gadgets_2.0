import express from "express";

const app = express();

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Success 100%" });
});

app.listen(3000, () => {
  console.log("Server is running Perfectly ");
});