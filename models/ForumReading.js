const mongoose = require("mongoose");

const { Schema } = mongoose;

const forumReadSchema = new Schema(
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

const ForumRead = mongoose.model("ForumRead", forumReadSchema);

module.exports = {
  ForumRead,
  forumReadSchema,
};
