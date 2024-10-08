const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = 8080;
const db = new sqlite3.Database("./db.sqlite");

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

db.run(
  `CREATE TABLE IF NOT EXISTS emails (id INTEGER PRIMARY KEY AUTOINCREMENT, address TEXT)`
);

app.get("/", (req: any, res: any) => {
  res.status(200).send({message: "Hello There!"});
});

app.post("/user/:id", (req: any, res: any) => {
  const {id} = req.params;
  const {name} = req.body;

  if (!name) {
    res.status(418).send({message: "No name provided"});
  }

  res.status(200).send({message: `${id} : ${name}`});
});

app.post("/email", (req: any, res: any) => {
  const {address} = req.body;

  if (!address) {
    res.status(400).send({error: "No email provided"});
  }

  db.run(`INSERT INTO emails (address) VALUES (?)`, address, (err: any) => {
    if (err) {
      res.status(500).send({error: "Error inserting email"});
    } else {
      res.status(200).send({message: "Email inserted successfully"});
    }
  });
});

app.get("/email", (req: any, res: any) => {
  db.all("SELECT * FROM emails", (err: any, rows: any) => {
    if (err) {
      res.status(500).send({error: "Error fetching emails"});
    } else {
      res.status(200).send(rows);
    }
  });
});

app.delete("/email/:id", (req: any, res: any) => {
  const {id} = req.params;

  db.run(`DELETE FROM emails WHERE id = ?`, id, (err: any) => {
    if (err) {
      res.status(500).send({error: "Error deleting email"});
    } else {
      res.status(200).send({message: "Email deleted successfully"});
    }
  });
});

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));

process.on("SIGINT", () => {
  console.log("Closing database connection...");
  db.close((err: any) => {
    if (err) {
      console.error("Error closing database connection:", err);
    } else {
      console.log("Database connection closed successfully");
    }
  });
});
