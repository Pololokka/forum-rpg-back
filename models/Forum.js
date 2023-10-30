const mongoose = require("mongoose");

const { Schema } = mongoose;

const forumSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    postContent: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Forum = mongoose.model("Forum", forumSchema);

module.exports = {
  Forum,
  forumSchema,
};
