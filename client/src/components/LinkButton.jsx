import './styles/linkButton.css'

// CSS variable from .env
document.documentElement.style.setProperty('--linkButton-font-size', import.meta.env.VITE_fontSize + "rem");
document.documentElement.style.setProperty('--linkButton-fontName', import.meta.env.VITE_fontName);

function LinkButton({ message, link, color }) {
  return (
    <span className='linkButtonContainer'>
      <a href={`${link}`} className='linkButton' style={{ color: `${color}` }}>
        {message}
      </a>
    </span>
  );

}

export default LinkButton;
