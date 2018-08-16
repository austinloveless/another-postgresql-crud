const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const queries = require("./queries");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/school");
});

app.get("/school", (req, res) => {
  queries.list().then(students => {
    res.json({ students });
  });
});
app.get("/school/:id", (req, res) => {
  queries.read(req.params.id).then(student => {
    res.json({ student });
  });
});

app.post("/school", (req, res) => {
  queries.create(req.body).then(student => {
    res.status(201).json({ student: student });
  });
});

app.put("/school/:id", (req, res) => {
  queries.update(req.params.id, req.body).then(student => {
    res.json({ student: student[0] });
  });
});

app.delete("/school/:id", (req, res) => {
  queries.delete(req.params.id).then(() => {
    res.status(204).json({ deleted: true });
  });
});

app.listen(port, () => {
  console.log("listening on port", port);
});
