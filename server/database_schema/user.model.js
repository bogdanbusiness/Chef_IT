const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
  {
    uid: {
      type: Number,
      required: true
    },

    email: {
      type: String,
      required: [true, "Pune si tu un email la misto"],
      default: ""
    },

    password: {
      type: String,
      required: [true, "Pune si tu o parola la misto"],
      default: ""
    },

    full_name: {
      type: String,
      required: [true, "Pune numele tau"],
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