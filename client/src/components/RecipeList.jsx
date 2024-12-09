import './styles/recipeList.css';
import RecipeContainerHorizontal from './RecipeContainerHorizontal.jsx';
import { useState, useEffect } from 'react';

// CSS variable from .env
document.documentElement.style.setProperty('--recipeList-backgroundColor', "#" + import.meta.env.VITE_primaryColor);
document.documentElement.style.setProperty('--recipeList-fontSize', import.meta.env.VITE_fontSize + "em");
document.documentElement.style.setProperty('--recipeList-arrowColor', "#" + import.meta.env.VITE_secondaryColor);

function RecipeList() {
  // Function that requests information from the backend
  const handleRequest = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_backendURL + "/toprecipe", {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      alert(error);
    }
  }  


  // Functionality for the carousel
  const slideNo = 3;
  const [slide, setSlide] = useState(1);
  const [isSingleSlide, setIsSingleSlide] = useState(window.innerWidth < 768);

  function plusSlide() {
    setSlide(slide + 1);

    if (slide >= slideNo)
      setSlide(1);
  }

  function minusSlide() {
    setSlide(slide - 1);

    if (slide <= 1)
      setSlide(slideNo);
  }

  // Shows all slides if the window is bigger then 768px or just the selected one if smaller
  function showSlide(n) {
    if (isSingleSlide)
      return slide == n ? true : false;
    
    return true;
  }

  // Change the carousel if the window is bigger then 768px
  function handleResize() {
    setIsSingleSlide(window.innerWidth < 768);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Data structure for recipes
  const RecipeInfo = {
    rid: 1,
    creator: "Nume Prenume",
    name: "Reteta",
    description: "Ceva",
    rating: 4.5,
    ratingNo: 2,
    image: "../assets/defaultRecipeImg.png",
    timestamp: 0
  }

  return (
    <div className='recipeList'>
      <div className='recipeListTitle'> Top rated recipes </div>
      <div className='recipeListCarousel'>

        <span className='recipeListCarouselButton' onClick={minusSlide}> &#10094; </span>
        
        <span className='recipeListCarouselContainer'> 
          <RecipeContainerHorizontal {...RecipeInfo} isDisplayed={showSlide(1)}/>
          <RecipeContainerHorizontal {...RecipeInfo} isDisplayed={showSlide(2)}/>
          <RecipeContainerHorizontal {...RecipeInfo} isDisplayed={showSlide(3)}/>
        </span>

        <span className='recipeListCarouselButton' onClick={plusSlide}> &#10095; </span>
      </div>
    </div>
  );
};

export default RecipeList;
