import "./styles/addRecipeCard.css";
import Paperclip from '../assets/paperclip.png';
import { useState } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';

document.documentElement.style.setProperty('--addRecipe-primaryColor', "#" + import.meta.env.VITE_primaryColor);
document.documentElement.style.setProperty('--addRecipe-secondaryColor', "#" + import.meta.env.VITE_secondaryColor);
document.documentElement.style.setProperty('--addRecipe-fontName', import.meta.env.VITE_fontName);
document.documentElement.style.setProperty('--addRecipe-fontSize', import.meta.env.VITE_fontSize);

function AddRecipeCard() {
  const navigate = useNavigate();

  // Get the cookie with the user information
  const user_cookie = Cookies.get("user");
  let creator_name = "";

  // Parse the cookie to optain the info, if it exists
  if (user_cookie) {
    const user_info = JSON.parse(user_cookie);
    creator_name = user_info.full_name;
  }

  const [recipe_name, setRecipeName] = useState('');
  const [description, setDescription] = useState('');

  const handleAddRecipe = async (e) => {
    // Prevent default form submission
    e.preventDefault();

    try {
      // Check if the fields are completed
      if (creator_name == '') {
        alert("You need to be logged in to add a recipe");
        navigate("/logIn");
        return;
      }

      if (recipe_name == '') {
        alert("Recipe name required");
        return;
      }

      if (description == '') {
        alert("Description number required");
        return;
      }

      const response = await fetch(import.meta.env.VITE_backendURL + "/addrecipe", {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ creator_name, recipe_name, description }),
      });

      const data = await response.json();

      if (response.status == 201) {
        alert(data.message);
      } else if (data.message) {
        alert(data.message);
      } else {
        alert("SERVER_ERROR");
      }
    } catch (error) {
      // Handle the error messages
      alert(error);
    }
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
