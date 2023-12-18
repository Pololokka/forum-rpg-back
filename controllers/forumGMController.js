const { ForumGm: ForumGmModel, ForumGm } = require("../models/ForumGm");

const forumGmController = {
  create: async (req, res) => {
    try {
      const forumGm = {
        user: req.body.user,
        profilePic: req.body.profilePic,
        group: req.body.group,
        postContent: req.body.postContent,
      };

      const response = await ForumGmModel.create(forumGm);

      res.status(201).json({ response, msg: "Post efetuado com sucesso!" });
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  },

  getAll: async (req, res) => {
    try {
      const forumGm = await ForumGmModel.find();

      res.json(forumGm);
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  },

  get: async (req, res) => {
    try {
      const id = req.params.id;
      const forumGm = await ForumGmModel.findById(id);

      if (!forumGm) {
        res.status(404).json({ msg: "Post não encontrado" });
      }

      res.json(forumGm);
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const forumGm = await ForumGmModel.findById(id);

      if (!forumGm) {
        res.status(404).json({ msg: "Post não encontrado" });
      }

      const deleteForumGm = await ForumGmModel.findByIdAndDelete(id);

      res.status(200).json({ deleteForumGm, msg: "Post excluído com sucesso" });
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  },

  update: async (req, res) => {
    const id = req.params.id;

    const forumGm = {
      user: req.body.user,
      profilePic: req.body.profilePic,
      group: req.body.group,
      postContent: req.body.postContent,
    };

    const updateForumGm = await ForumGmModel.findByIdAndUpdate(id, forumGm);

    if (!updateForumGm) {
      res.status(404).json({ msg: "Post não encontrado" });
    }

    res.status(200).json({ forumGm, msg: "Post editado com sucesso" });
  },

  getGroupPosts: async (req, res) => {
    try {
      const id = req.params.id;
      const offset = req.query.offset || 0;
      const limit = req.query.limit || 10;

      const posts = await ForumGmModel.find({ group: id });

      const totalPages = Math.ceil(posts.length / limit);

      if (offset < totalPages * 10) {
        const payload = await ForumGmModel.find({ group: id })
          .skip(offset)
          .limit(limit);

        res.json({ payload, totalPages });
      } else {
        res.status(404).json({ msg: "A página não pode ser carregada" });
      }
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  },
};

module.exports = forumGmController;
