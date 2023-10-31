const { Forum: ForumModel } = require("../models/Forum");

const forumController = {
  create: async (req, res) => {
    try {
      const forum = {
        user: req.body.user,
        profilePic: req.body.profilePic,
        date: req.body.date,
        postContent: req.body.postContent,
      };

      const response = await ForumModel.create(forum);

      res.status(201).json({ response, msg: "Post efetuado com sucesso!" });
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  },

  getAll: async (req, res) => {
    try {
      const forum = await ForumModel.find();

      res.json(forum);
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  },

  get: async (req, res) => {
    try {
      const id = req.params.id;
      const forum = await ForumModel.findById(id);

      if (!forum) {
        res.status(404).json({ msg: "Post não encontrado" });
      }

      res.json(forum);
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  },
};

module.exports = forumController;
