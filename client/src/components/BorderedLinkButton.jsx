import './styles/borderedLinkButton.css'

// CSS variable from .env
document.documentElement.style.setProperty('--linkBorderedButton-font-size', import.meta.env.VITE_fontSize + "rem");
document.documentElement.style.setProperty('--borderedLinkButton-fontName', import.meta.env.VITE_fontName);

function BorderedLinkButton({ message, link, color, borderColor, border_radius, onClickFn }) {
  return (
    <span className='borderedLinkButtonContainer' style={{
      borderColor: `${borderColor}`  
    }}>
      <a href={`${link}`} className='borderedLinkButton' onClick={onClickFn} style={{
          color: `${color}`,
          borderRadius: `${border_radius}`
        }}>
        {message}
      </a>
    </span>
  );

}

export default BorderedLinkButton;