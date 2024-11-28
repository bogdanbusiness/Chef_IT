import './styles/recipeList.css';

// CSS variable from .env
document.documentElement.style.setProperty('--recipeList-backgroundColor', "#" + import.meta.env.VITE_primaryColor);
document.documentElement.style.setProperty('--recipeList-fontSize', import.meta.env.VITE_fontSize + "em");

function RecipeList(/*{child}*/) {
  return (
    <div className='recipeList'>
      <div className='recipeListTitle'>  Top rated recipes </div>
      {/*{child}*/}
    </div>
  );
};

export default RecipeList;