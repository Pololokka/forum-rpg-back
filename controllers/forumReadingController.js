const { ForumRead: ForumReadModel } = require("../models/ForumReading");

const forumReadController = {
  create: async (req, res) => {
    try {
      const forumRead = {
        user: req.body.user,
        profilePic: req.body.profilePic,
        group: req.body.group,
        postContent: req.body.postContent,
      };

      const response = await ForumReadModel.create(forumRead);

      res.status(201).json({ response, msg: "Post efetuado com sucesso!" });
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  },

  getAll: async (req, res) => {
    try {
      const forumRead = await ForumReadModel.find();

      res.json(forumRead);
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  },

  get: async (req, res) => {
    try {
      const id = req.params.id;
      const forumRead = await ForumReadModel.findById(id);

      if (!forumRead) {
        res.status(404).json({ msg: "Post não encontrado" });
      }

      res.json(forumRead);
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const forumRead = await ForumReadModel.findById(id);

      if (!forumRead) {
        res.status(404).json({ msg: "Post não encontrado" });
      }

      const deleteForumRead = await ForumReadModel.findByIdAndDelete(id);

      res
        .status(200)
        .json({ deleteForumRead, msg: "Post excluído com sucesso" });
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  },

  update: async (req, res) => {
    const id = req.params.id;

    const forumRead = {
      user: req.body.user,
      profilePic: req.body.profilePic,
      group: req.body.group,
      postContent: req.body.postContent,
    };

    const updateForumRead = await ForumReadModel.findByIdAndUpdate(
      id,
      forumRead
    );

    if (!updateForumRead) {
      res.status(404).json({ msg: "Post não encontrado" });
    }

    res.status(200).json({ forumRead, msg: "Post editado com sucesso" });
  },

  getGroupPosts: async (req, res) => {
    try {
      const id = req.params.id;
      const page = req.params.page;

      const posts = await ForumReadModel.find({ group: id });

      const totalPages = Math.ceil(posts.length / 10);
      console.log(totalPages);

      if (page <= totalPages) {
        const minPost = (page - 1) * 10 + 1;
        const maxPost = minPost + 10;

        console.log("post mínimo: ", minPost);
        console.log("post máximo: ", maxPost - 1);

        const slicedArr = posts.slice(minPost, maxPost);

        res.json({ slicedArr, totalPages });
      } else {
        res.status(404).json({ msg: "Posts não encontrados" });
      }
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  },
};

module.exports = forumReadController;
