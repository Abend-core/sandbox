const mariadb = require("./db");
const dataModule = require("./data/module");
const Module = require("../models/module");

const dataUser = require("./data/user");
const User = require("../models/user");

mariadb
  .sync({ force: true })
  .then(async (_) => {
    Module.bulkCreate(dataModule)
      .then(async () => {
        const modules = await Module.findAll();
        dataUser.forEach((user) => {
          User.create(user).then((user) => {
            for (i = 0; i < modules.length; i++) {
              user.addModule(modules[i].id);
            }
            console.log("Utilisateurs insérés avec succès.");
            console.log("Synchronisation effectué !");
          });
        });
      })
      .catch((err) => console.error("Erreur :", err));
  })
  .catch((err) => {
    console.log(err);
  });
