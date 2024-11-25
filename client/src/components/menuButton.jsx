import './styles/menuButton.css'
import button from '../assets/menuButton.png'

// // Set CSS variables dynamically
// document.documentElement.style.setProperty('--animation-time', import.meta.env.VITE_menuButtonAnimationLength);

function MenuButton({ click, handleClick }) {
  function deriveRotation() {
    // Rotate the image
    if (click == false) {
      return 0;
    } else {
      return 90;
    }
  }

  return (
    <span className='menuButton'>
      <img className="menuButton" onClick={handleClick} style={{ transform: `rotate(${deriveRotation()}deg)` }} src={button}>
      </img>
    </span>
  );
}

export default MenuButton;
