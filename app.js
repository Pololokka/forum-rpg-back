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

// const User = require("./models/User");

// app.post("/auth/register", async (req, res) => {
//   const { name, email, password, confirmPassword } = req.body;

//   //validações

//   if (!name) {
//     return res.status(422).json({ msg: "O nome é obrigatório!" });
//   }

//   if (!email) {
//     return res.status(422).json({ msg: "O email é obrigatório!" });
//   }

//   if (!password) {
//     return res.status(422).json({ msg: "A senha é obrigatória!" });
//   }

//   if (password !== confirmPassword) {
//     return res.status(422).json({ msg: "As senhas não conferem!" });
//   }

//   //checa se o user existe

//   const userExists = await User.findOne({ email: email });

//   if (userExists) {
//     return res.status(422).json({ msg: "Email já cadastrado!" });
//   }

//   //senha

//   const salt = await bcrypt.genSalt(12);
//   const passwordHash = await bcrypt.hash(password, salt);

//   //cria usuário

//   const user = new User({
//     name,
//     email,
//     password: passwordHash,
//   });

//   try {
//     await user.save();

//     res.status(201).json({ msg: "Usuário criado com sucesso!" });
//     console.log("Usuário criado com sucesso!");
//   } catch (error) {
//     res.status(500).json({ msg: "Não é possível cadastrar no momento" });
//     console.log(error);
//   }
// });

// pega todos os users

// app.get("/auth/register", async (req, res) => {
//   try {
//     const users = await User.find();

//     res.json(users);
//   } catch (error) {
//     console.log(`Erro: ${error}`);
//   }
// });

// login user

// app.post("/auth/login", async (req, res) => {
//   const { email, password } = req.body;

//   // validação

//   if (!email) {
//     return res.status(422).json({ msg: "O email é obrigatório!" });
//   }

//   if (!password) {
//     return res.status(422).json({ msg: "A senha é obrigatória!" });
//   }

//   //checa se o usuário existe

//   const user = await User.findOne({ email: email });

//   if (!user) {
//     return res.status(404).json({ msg: "Usuário não encontrado!" });
//   }

//   //checa se a senha tá certa

//   const checkPass = await bcrypt.compare(password, user.password);

//   if (!checkPass) {
//     return res.status(422).json({ msg: "Senha inválida" });
//   }

//   try {
//     const secret = process.env.SECRET;

//     const token = jwt.sign(
//       {
//         id: user._id,
//       },
//       secret
//     );

//     res.status(200).json({ msg: "autenticação realizada com sucesso!", token });
//   } catch (error) {
//     res.status(500).json({ msg: "Houve um erro, tente novamente mais tarde" });
//     console.log(error);
//   }
// });

//// ROUTES ////

// public route

const routes = require("./routes/router");

app.use("/api", routes);

// private route

app.get("/api/user/:id", checkToken, async (req, res) => {
  const id = req.params.id;

  const user = await User.findById(id, "-password");

  if (!user) {
    return res.status(404).json({ msg: "Usuário não encontrado" });
  }

  res.status(200).json(user);
});

function checkToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Acesso negado" });
  }

  try {
    const secret = process.env.SECRET;

    jwt.verify(token, secret);

    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Token inválido" });
  }
}

//// INICIALIZAÇÃO ////

app.listen(3000, function () {
  console.log("### Servidor Online ###");
});
