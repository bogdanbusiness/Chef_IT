const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
  {
    _id: {
      type: Number,
      required: false
    },

    email: {
      type: String,
      required: true,
      default: ""
    },

    password: {
      type: String,
      required: true,
      default: ""
    },

    full_name: {
      type: String,
      required: false,
      default: "Prenume Nume"
    },

    telephone: {
      type: String,
      required: false,
      default: ""
    },
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;