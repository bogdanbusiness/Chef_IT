import './styles/navBarContainer.css'
import {useState, useEffect} from 'react'
import MenuButton from './menuButton';

// CSS variable from .env
document.documentElement.style.setProperty('--nav-mobileWidth', import.meta.env.VITE_navBarWidth + "vw");

function NavBarContainer() {
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
      setClicked(false);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Moves the element to the right on click
  function moveRight () {
    return clicked == false ? - import.meta.env.VITE_navBarWidth - 10 : 0;
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
      <div className='navBarDesktop' />
    </div>
  );
}

export default NavBarContainer;
