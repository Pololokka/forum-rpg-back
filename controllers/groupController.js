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
};

module.exports = groupController;
