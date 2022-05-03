import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// routes go here - defining what requests are allowed -

app.listen(3000, () => {
  console.log("listening on http://localhost:3000...");
});
