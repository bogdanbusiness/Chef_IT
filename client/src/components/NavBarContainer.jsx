import './styles/navBarContainer.css';
import BorderedLinkButton from './BorderedLinkButton.jsx';
import LinkButton from './LinkButton.jsx';
import { useState, useEffect } from 'react';
import MenuButton from './menuButton';
import logo from '../assets/small_logo_white.png';

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
  useEffect(() => {
    function handleResize() {
      setClicked(false);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Moves the element to the right on click
  function moveRight() {
    return clicked == false ? - import.meta.env.VITE_navBarWidth - 10 : 0;
  }

  // Blurs the entire page on click
  function blurBackground() {
    return clicked == false ? -100 : 0
  }

  return (
    <div className='navBarContainer'>
      {/* This button switches on the menu on mobile, invisible on desktop */}
      <MenuButton click={clicked} handleClick={handleOnClick} />

      {/* Turned on by the button, turns off the menu on mobile, invisible on desktop */}
      <span className='divBgBlur' onClick={handleOffClick} style={{ transform: `translateX(${blurBackground()}vw)` }} />

      {/* Menu bar for mobile */}
      <span className='navBar' style={{ transform: `translateX(${moveRight()}vw)` }}>
        <div className='buttonContainer'>
          <span className='navBarFiller' style={{
            height: "5vh"
          }} />
          <LinkButton message="Home" color="black" link={'index.html'}/>
          <LinkButton message="Recipes" color="black"/>
          <LinkButton message="Add Recipe" color="black"/>

          <span className='navBarFiller' style={{
            height: "10vh"
          }} />
          <BorderedLinkButton message="Login" color="black" borderColor={"#" + import.meta.env.VITE_primaryColor}/>
          <LinkButton message="Recipes" color="black"/>
        </div>
      </span>

      {/* Menu bar for desktop  */}
      <div className='navBarDesktop'>
        <div className='buttonContainer'>
          <a className='logoContainer' href='index.html'>
            <img className='logo' src={logo} />
          </a>

          <span className='recipeGroup'>
            <LinkButton message="Recipes" color="white" link=''/>
            <LinkButton message="Add Recipe" color="white" link=''/>
          </span>

          <span className='loginGroup'>
            <BorderedLinkButton message="Login" color="white" borderColor="white" link=''/>
            <LinkButton message="Register" color="white" link=''/>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavBarContainer;
