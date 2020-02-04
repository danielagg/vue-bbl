const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const contracts = require("./contracts.json");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/login", (req, res) => {
  if (req.body.email.toUpperCase() === "DANIEL.AGG@XS.NESTLE.COM") {
    res.status(200).json({ userId: 1, firstName: "Daniel" });
  } else {
    res.sendStatus(401);
  }
});

app.get("/api/contracts", (req, res) => {
  // mimick slow performance with a 3s delay
  setTimeout(() => res.status(200).json(contracts), 3000);
});

app.post("/api/contract/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const contract = contracts.filter(c => c.id === id);

  if (!contract.length) res.sendStatus(404);

  res.status(200).json({
    ...contract[0],
    targetQty: req.body.targetQty,
    targetQtyUom: req.body.targetQtyUom
  });
});

app.listen(8888, () => console.log("Server running on port 8888"));
