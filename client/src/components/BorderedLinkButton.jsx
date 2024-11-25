import './styles/borderedLinkButton.css'

// CSS variable from .env
document.documentElement.style.setProperty('--linkBorderedButton-font-size', import.meta.env.VITE_fontSize + "em");

function BorderedLinkButton({ message, link, color, borderColor, border_radius }) {
  return (
    <span className='borderedLinkButtonContainer' style={{
      borderColor: `${borderColor}`  
    }}>
      <a href={`${link}`} className='borderedLinkButton' style={{
          color: `${color}`,
          borderRadius: `${border_radius}`
        }}>
        {message}
      </a>
    </span>
  );

}

export default BorderedLinkButton;