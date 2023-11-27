const mongoose = require("mongoose");

const { Schema } = mongoose;

const forumGmSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      required: true,
    },
    group: {
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

const ForumGm = mongoose.model("ForumGm", forumGmSchema);

module.exports = {
  ForumGm,
  forumGmSchema,
};
