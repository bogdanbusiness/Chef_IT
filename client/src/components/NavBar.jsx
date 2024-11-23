import './styles/navBar.css'
import {useState} from 'react'
import MenuButton from './menuButton';

document.documentElement.style.setProperty('--nav-mobileWidth', import.meta.env.VITE_navBarWidth + "vw");

function NavBar() {
  const [clicked, setClicked] = useState(false);

  function handleOnClick() {
    if (clicked == false)
      setClicked(true);
  }

  function handleOffClick() {
    if (clicked == true)
      setClicked(false);
  }

  function moveRight () {
    return clicked == false ? - import.meta.env.VITE_navBarWidth : 0;
  }

  function blurBackground () {
    return clicked == false ? `blur(0)` : `blur(${import.meta.env.VITE_navBarBackgroundBlur}px)`
  }

  return (
    <>
      <MenuButton click={clicked} handleClick={handleOnClick}/>
      <span className='divBgBlur' onClick={handleOffClick} style={{ backdropFilter: `blur(${blurBackground}px)` }} />
      <span className='navBar' style={{ transform: `translateX(${moveRight()}vw)` }} /> 
    </>
  );
}

export default NavBar;
