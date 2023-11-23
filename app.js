const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

// DB Connection
const conn = require("./db/conn");

conn();

// Register User

const User = require("./models/User");

app.post("/auth/register", async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  //validações

  if (!name) {
    return res.status(422).json({ msg: "O nome é obrigatório!" });
  }

  if (!email) {
    return res.status(422).json({ msg: "O email é obrigatório!" });
  }

  if (!password) {
    return res.status(422).json({ msg: "A senha é obrigatória!" });
  }

  if (password !== confirmPassword) {
    return res.status(422).json({ msg: "As senhas não conferem!" });
  }

  //checa se o user existe

  const userExists = await User.findOne({ email: email });

  if (userExists) {
    return res.status(422).json({ msg: "Email já cadastrado!" });
  }

  //senha

  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  //cria usuário

  const user = new User({
    name,
    email,
    password,
  });

  try {
    await user.save();

    res.status(201).json({ msg: "Usuário criado com sucesso!" });
    console.log("Usuário criado com sucesso!");
  } catch (error) {
    res.status(500).json({ msg: "Não é possível cadastrar no momento" });
    console.log(error);
  }
});

// Routes
const routes = require("./routes/router");

app.use("/api", routes);

app.listen(3000, function () {
  console.log("### Servidor Online ###");
});
