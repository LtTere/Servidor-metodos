const express = require("express");
const app = express();
const bodyParser = require("body-parser");

let users = [
  { usuario: "Kath" },
  { usuario: "Tere" },
  { usuario: "Bea" },
  { usuario: "María" }
];

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Comienza el servidor a escuchar en el puerto 3000");
});

app.get("/personas", (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

app.get("/personas", (req, res) => {
  res.send(users);
});

app.post("/personas", (req, res) => {
  let name = req.body.name;
  users.push({ usuario: name });
  res.send(users);
});

app.get("/personas/addAge", (req, res) => {
  res.send(users);
});

// app.post("/personas/addAge:age/:name", (req, res) => {
//   let age = req.params.age;
//   let name = req.params.name;

//   users.map(function(usuario, index, users) {
//     if (users.usuario === name) {
//         users.age = age;
//       }
//
//   };

//   res.send(users);
// });

app.put("/personas:name", (req, res) => {
  const name = req.params.name;
  const age = req.body.age;

  users.forEach(user => {
    if (user.name == name) {
      user.age = age;
    }
  });
});

// app.post("/personas/addAge", (req, res) => {
//   let age = req.body.age;

//   users.push({ usuario: age });

//   res.send(users);
// });

// app.put("/personas", (req, res) => {
//   const name = req.body.name;
//   users.push({ usuario: name });
//   res.send(users);
// });

// app.patch("/personas", (req, res) => {
//   const name = req.body.name;
//   users.push({ usuario: name });
//   res.send(users);
// });

app.delete("/personas/:name", (req, res) => {
  let name = req.params.name;
  users = users.filter(user => user.usuario != name);
  res.send(users);
});
