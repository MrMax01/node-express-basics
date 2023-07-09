const express = require("express");
const app = express();
// app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.sendFile("homepage.html", { root: __dirname + "/public" });
// });

// app.get("/about", (req, res) => {
//   res.sendFile("about.html", { root: __dirname + "/public" });
// });
// app.get("/contact", (req, res) => {
//   res.sendFile("contact.html", { root: __dirname + "/public" });
// });
// app.all("*", (req, res) => {
//   res.send("<h1>Risorsa non trovata</h1>");
// });
const { persone } = require("./persone");

app.get("/", (req, res) => {
  res.sendFile("homepage.html", { root: __dirname + "/public" });
});
app.get("/persone", (req, res) => {
  const nuovePersone = persone.map((persona) => {
    const { nome, cognome, eta } = persona;
    return { nome, cognome, eta };
  });
  res.json(nuovePersone);
});

app.get("/persone/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  //   const id = req.params.id;
  const persona = persone.find((persona) => persona.id === id);
  res.json(persona);
});
app.listen(3000);
