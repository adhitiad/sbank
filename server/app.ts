import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";

const app = express();
const port = 5000 || process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: any, res: any) => {
  res.json({ message: "Hello World!" });
});

app.get("/api", (req: any, res: any) => {
  res.json({ message: "Hello World from api!" });
});

app.listen(port, () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${port}` +
      " at " +
      new Date() +
      " - " +
      new Date().toLocaleTimeString()
  );
});
