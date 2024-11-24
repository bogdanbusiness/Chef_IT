import './styles/navBar.css'
import {useState, useEffect} from 'react'
import MenuButton from './menuButton';

// CSS variable from .env
document.documentElement.style.setProperty('--nav-mobileWidth', import.meta.env.VITE_navBarWidth + "vw");

function NavBar() {
  // Use state to know when the menu image has been clicked
  const [clicked, setClicked] = useState(false);

  function handleOnClick() {
    if (clicked == false)
       setClicked(true);
  }
  
  function handleOffClick() {
    if (clicked == true)
      setClicked(false);
  }

  // Changes the state of the site to true on resize
  useEffect (() => {
    function handleResize() {
      setClicked(true);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Moves the element to the right on click
  function moveRight () {
    // Change the state to true when on desktop
    if (window.innerWidth > import.meta.env.VITE_mobileTreshold) {
      return 0;
    }

    // Return by how much the element needs to be moved
    return clicked == false ? - import.meta.env.VITE_navBarWidth - 10 : 0; // -10 for the box shadow
  }

  // Blurs the entire page on click
  function blurBackground () {
    return clicked == false ? -100 : 0
  }

  return (
    <div className='navBarContainer'>
      <MenuButton click={clicked} handleClick={handleOnClick}/>
      <span className='divBgBlur' onClick={handleOffClick} style={{ transform: `translateX(${blurBackground()}vw)` }} />
      <span className='navBar' style={{ transform: `translateX(${moveRight()}vw)` }} /> 
    </div>
  );
}

export default NavBar;
