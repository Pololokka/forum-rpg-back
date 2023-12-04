const { Group: GroupModel } = require("../models/Group");

const groupController = {
  create: async (req, res) => {
    try {
      const group = {
        groupName: req.body.name,
        users: req.body.users,
        owner: req.body.owner,
      };

      const response = await GroupModel.create(group);

      res.status(201).json({ response, msg: "Mesa criada com sucesso!" });
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  },

  getAll: async (req, res) => {
    try {
      const group = await GroupModel.find();

      res.json(group);
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  },

  get: async (req, res) => {
    try {
      const id = req.params.id;
      const group = await GroupModel.findById(id);

      if (!group) {
        res.status(404).json({ msg: "Mesa não encontrada" });
      }

      res.json(group);
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const group = await GroupModel.findById(id);

      if (!group) {
        res.status(404).json({ msg: "Mesa não encontrada" });
      }

      const deleteGroup = await GroupModel.findByIdAndDelete(id);

      res.status(200).json({ deleteGroup, msg: "Mesa excluída com sucesso" });
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  },

  update: async (req, res) => {
    const id = req.params.id;

    const group = {
      groupName: req.body.name,
      users: req.body.users,
      owner: req.body.owner,
    };

    const updateGroup = await GroupModel.findByIdAndUpdate(id, group);

    if (!updateGroup) {
      res.status(404).json({ msg: "Mesa não encontrada" });
    }

    res.status(200).json({ group, msg: "Mesa editada com sucesso" });
  },

  getUserGroups: async (req, res) => {
    try {
      const groupArray = req.body.groups;

      if (!groupArray) {
        res.status(404).json({ msg: "Mesa não encontrada" });
      }

      const group = await GroupModel.find({ _id: { $in: groupArray } });

      res.json(group);
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  },
};

module.exports = groupController;
