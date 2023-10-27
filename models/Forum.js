const mongoose = require("mongoose");

const { Schema } = mongoose;

const serviceSchema = new Schema(
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

const Service = mongoose.model("Service", serviceSchema);

module.exports = {
  Service,
  serviceSchema,
};
