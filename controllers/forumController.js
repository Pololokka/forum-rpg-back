const { Forum: ForumModel } = require("../models/Forum");

const forumController = {
  create: async (req, res) => {
    try {
      const forum = {
        user: req.body.user,
        profilePic: req.body.profilePic,
        group: req.body.group,
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

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const forum = await ForumModel.findById(id);

      if (!forum) {
        res.status(404).json({ msg: "Post não encontrado" });
      }

      const deleteForum = await ForumModel.findByIdAndDelete(id);

      res.status(200).json({ deleteForum, msg: "Post excluído com sucesso" });
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  },

  update: async (req, res) => {
    const id = req.params.id;

    const forum = {
      user: req.body.user,
      profilePic: req.body.profilePic,
      group: req.body.group,
      postContent: req.body.postContent,
    };

    const updateForum = await ForumModel.findByIdAndUpdate(id, forum);

    if (!updateForum) {
      res.status(404).json({ msg: "Post não encontrado" });
    }

    res.status(200).json({ forum, msg: "Post editado com sucesso" });
  },

  getGroupPosts: async (req, res) => {
    try {
      const id = req.params.id;

      const posts = await ForumModel.find({ group: id });
      res.json(posts);
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  },
};

module.exports = forumController;
