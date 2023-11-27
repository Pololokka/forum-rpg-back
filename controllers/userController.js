const User = require("./models/User");

const userController = {
  create: async (req, res) => {
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
      password: passwordHash,
    });

    try {
      await user.save();

      res.status(201).json({ msg: "Usuário criado com sucesso!" });
      console.log("Usuário criado com sucesso!");
    } catch (error) {
      res.status(500).json({ msg: "Não é possível cadastrar no momento" });
      console.log(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const users = await User.find();

      res.json(users);
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    // validação

    if (!email) {
      return res.status(422).json({ msg: "O email é obrigatório!" });
    }

    if (!password) {
      return res.status(422).json({ msg: "A senha é obrigatória!" });
    }

    //checa se o usuário existe

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ msg: "Usuário não encontrado!" });
    }

    //checa se a senha tá certa

    const checkPass = await bcrypt.compare(password, user.password);

    if (!checkPass) {
      return res.status(422).json({ msg: "Senha inválida" });
    }

    try {
      const secret = process.env.SECRET;

      const token = jwt.sign(
        {
          id: user._id,
        },
        secret
      );

      res
        .status(200)
        .json({ msg: "autenticação realizada com sucesso!", token });
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Houve um erro, tente novamente mais tarde" });
      console.log(error);
    }
  },
};

module.exports = userController;
