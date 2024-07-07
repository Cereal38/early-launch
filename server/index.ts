const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

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

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
