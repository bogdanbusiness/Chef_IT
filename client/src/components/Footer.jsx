import './styles/footer.css';
import mobileFooter from '../assets/mobileFooter.png';
import igIcon from '../assets/ig_icon.png';
import fbIcon from '../assets/fb_icon.png';
import ytIcon from '../assets/yt_icon.png';
import twIcon from '../assets/tw_icon.png';

function Footer() {

  return (
    <div className='footerContainer'>
      <img className='mobile' src={mobileFooter} />

      <span className='iconsContainer'>
        <a href=''>
          <img className='appIcon' src={igIcon}/>
        </a>

        <a href=''>
          <img className='appIcon' src={fbIcon}/>
        </a>

        <a href=''>
          <img className='appIcon' src={ytIcon}/>
        </a>

        <a href=''>
          <img className='appIcon' src={twIcon}/>
        </a>
      </span>
    </div>
  );
};


export default Footer;
