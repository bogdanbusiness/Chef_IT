import "./styles/addRecipeCard.css";
import Paperclip from '../assets/paperclip.png';
import { useState } from "react";


document.documentElement.style.setProperty('--addRecipe-primaryColor', "#" + import.meta.env.VITE_primaryColor);
document.documentElement.style.setProperty('--addRecipe-secondaryColor', "#" + import.meta.env.VITE_secondaryColor);
document.documentElement.style.setProperty('--addRecipe-fontName', import.meta.env.VITE_fontName);
document.documentElement.style.setProperty('--addRecipe-fontSize', import.meta.env.VITE_fontSize);

function AddRecipeCard() {
  const [recipe_name, setRecipeName] = useState('');
  const [description, setDescription] = useState('');

  function handleAddRecipe() {

  }

  return (
    <div className="addRecipeBody">
      <form className="addRecipeCard" onSubmit={handleAddRecipe}>
        <input type="text" className='addRecipeInput'
          id="recipe_name"
          name="recipe_name"
          placeholder='Recipe name: '
          value={recipe_name}
          onChange={(e) => setRecipeName(e.target.value)}
        />

        <input type="text" className='addRecipeInput'
          id="description"
          name="description"
          placeholder='Description: '
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <span className="addRecipePhoto">
          <img src={Paperclip} className="addRecipeImg"/>
          <span> Upload photo </span>
        </span>

        <input type="submit" value="Add Recipe" className='submitButton' />
      </form>
    </div>
  );
}

export default AddRecipeCard;
