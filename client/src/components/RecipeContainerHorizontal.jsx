import './styles/recipeContainerHorizontal.css';
import defaultImg from '../assets/defaultRecipeImg.png'
import emptyStar from '../assets/emptyStar.png'
import fullStar from '../assets/fullStar.png'


document.documentElement.style.setProperty('--recipeHorizontal-borderColor', "#" + import.meta.env.VITE_secondaryColor);
document.documentElement.style.setProperty('--recipeHorizontal-fontName', import.meta.env.VITE_fontName);

function RecipeContainerHorizontal({creator, name, rating, ratingNo, image, isDisplayed}) {
  function showStar(index) {
    return (index + 1) <= rating ? fullStar : emptyStar;
  }

  if (isDisplayed) {
    return (
      <span className='recipeHorizontal'>
        <img src={ (image.localeCompare("../assets/defaultRecipeImg.png") == 0 ? defaultImg : null) } className='recipeHorizontalImg'/>

        <div className='recipeHorizontalData'>

          <div className='recipeHorizontalGroup1' >
            <span className='recipeHorizontalName'> {name} </span>
            <div className='recipeHorizontalStarContainer'>
            {/* Array with stars to allow for showing stars dependent on the given rating */}
            {
              [...Array(5)].map (
                (_, index) => (
                  <img key={index} src={showStar(index)} className='recipeHorizontalStar' />
                )
              )
            }
         
            </div>
            <span className='recipeHorizontalRatingNo'> {ratingNo} </span>
          </div>

          <div className='recipeHorizontalGroup2' >
            <span className='recipeHorizontalAuthor'> Author: </span>
            <span className='recipeHorizontalCreator'> {creator} </span>
          </div>
        </div>
      </span>
    );
  }

  return null;
};

export default RecipeContainerHorizontal;
