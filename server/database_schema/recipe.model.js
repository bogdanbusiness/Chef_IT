const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema(
  {
    creator_name: {
      type: String,
      required: true,
      default: ""
    },

    recipe_name: {
      type: String,
      required: [true, "Pune un nume"],
      default: "Prenume Nume"
    },

    description: {
      type: String,
      required: [true, "Pune o descriere"],
      default: "Oferita cu dragoste"
    },

    // Use these 2 to calculate the rating
    total_stars: {
      type: Number,
      required: true,
      default: 0
    },

    people_rated: {
      type: Number,
      required: true,
      default: 0
    },

    // The starting rating is 5 because why not
    rating: { 
      type: mongoose.Schema.Types.Decimal128,
      required: true,
      min: 1.0, 
      max: 5.0,
      default: 5.0
    },

    image: {
      type: String,
      required: false,
      default: "../assets/defaultRecipeImg.png"
    }
  },
  {
    timestamps: true
  }
);

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
