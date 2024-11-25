const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const NewUUID = require("../tools/uuid.js");
const User = require("../models/user");

// Création d'un nouvel utilisateur
router.post("/", async (req, res) => {
  const data = req.body;
  data.id = NewUUID();
  bcrypt.hash(data.password, 10).then((hash) => {
    data.password = hash;
    User.create(data)
      .then((user) => {
        res
          .status(200)
          .json({ message: "Utilisateur créé avec succès.", user });
        user.addModule(1);
        user.addModule(2);
        user.addModule(3);
      })
      .catch((error) => {
        if (error.name === "SequelizeValidationError") {
          const errors = error.errors.map((err) => err.message);
          return res.status(400).json({ errors });
        }
        res.status(500).json({ message: "Erreur serveur.", erreur: error });
      });
  });
});

// Selection de tout les utilisateurs
router.get("/", (req, res) => {
  User.findAll()
    .then((user) => {
      res.status(200).json({ message: "Tout les utilisateurs.", user });
    })
    .catch((error) => {
      if (error.name === "SequelizeValidationError") {
        const errors = error.errors.map((err) => err.message);
        return res.status(400).json({ errors });
      }
      res.status(500).json({ message: "Erreur serveur.", erreur: error });
    });
});

// Selection d'un utilisateur
router.get("/:id", (req, res) => {
  const id = req.params.id;
  User.findByPk(id)
    .then((user) => {
      if (user) {
        res.status(200).json({ message: "Utilisateur trouvé.", user });
      } else {
        res.status(404).json({ message: "Utilisateur introuvable." });
      }
    })
    .catch((error) => {
      if (error.name === "SequelizeValidationError") {
        const errors = error.errors.map((err) => err.message);
        return res.status(400).json({ errors });
      }
      res.status(500).json({ message: "Erreur serveur.", erreur: error });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  User.update(req.body, {
    where: { id: id },
  })
    .then((_) => {
      return User.findByPk(id).then((user) => {
        if (user === null) {
          res.status(404).json({ message: "Utilisateur introuvable." });
        }
        res.status(200).json({ message: "Utilisateur modifié.", user });
      });
    })
    .catch((error) => {
      if (error.name === "SequelizeValidationError") {
        const errors = error.errors.map((err) => err.message);
        return res.status(400).json({ errors });
      }
      res.status(500).json({ message: "Erreur serveur.", erreur: error });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params;

  User.destroy({
    where: { id: id },
  })
    .then((_) => {
      return User.findByPk(id).then((user) => {
        if (user === null) {
          res.status(404).json({ message: "Utilisateur introuvable." });
        }
        res.status(200).json({ message: "Utilisateur supprimé.", user });
      });
    })
    .catch((error) => {
      if (error.name === "SequelizeValidationError") {
        const errors = error.errors.map((err) => err.message);
        return res.status(400).json({ errors });
      }
      res.status(500).json({ message: "Erreur serveur.", erreur: error });
    });
});

//Renvoie de toute les routes
module.exports = router;