import './styles/mobileFooter.css';
import mobileFooter from '../assets/mobileFooter.png';

function MobileFooter() {

  return (
    <div className='footerContainer'>
      <img className='mobile' src={mobileFooter} />
    </div>
  );
};


export default MobileFooter;
