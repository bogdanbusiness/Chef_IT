import './styles/menuButton.css'
import button from '../assets/menuButton.png'
import {useState, useRef} from 'react'

function MenuButton() {
  const imgRef = useRef();
  const [rotation, setRotation] = useState(0);

  function openMenu() {
    // Rotate the image
    if (rotation == 0) {
      setRotation(90);
    } else {
      setRotation(0);
    }
  }

  return (
    <div className='menuButton' onClick={openMenu}>
      <img ref={imgRef} className="menuButton" style={{ transform: `rotate(${rotation}deg)` }} src={button}>
      </img>
    </div>
  );
}

export default MenuButton;
