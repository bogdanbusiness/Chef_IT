import './styles/mobileFooter.css';
import mobileFooter from '../assets/mobileFooter.png';

function MobileFooter() {

  return (
    <div className='mobileFooterContainer'>
      <img className='mobileOnly' src={mobileFooter} />
    </div>
  );
};


export default MobileFooter;
