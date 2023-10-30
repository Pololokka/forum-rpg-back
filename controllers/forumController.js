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
};

module.exports = forumController;
