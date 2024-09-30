import createApp from "./app";
import express from "express";

const port = process.env.PORT
const app = createApp();


app.listen(port, () => {
  console.log(`🔥 Server running at port: http://localhost:${port}`);
});
