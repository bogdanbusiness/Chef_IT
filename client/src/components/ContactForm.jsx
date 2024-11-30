import './styles/contactForm.css';

// CSS variable from .env
document.documentElement.style.setProperty('--contactForm-secondaryColor', "#"  + import.meta.env.VITE_secondaryColor);
document.documentElement.style.setProperty('--contactForm-fontSize', import.meta.env.VITE_fontSize + "em");
document.documentElement.style.setProperty('--contactForm-fontName', import.meta.env.VITE_fontName);

function contactForm() {

  return (
    <div className='contactFormDiv'>
      <form className='contactForm'>
        <div className='contactFormTitle'>Contact us</div>

        <div className='contactFormFields'>
          <div className='contactFormInputContainer'>
            <input type="text" id="firstname" name="firstname" placeholder='First Name' className='contactFormInput'/>
            <input type="text" id="lasetname" name="lastname" placeholder='Last Name' className='contactFormInput'/>
            <input type="text" id="email" name="email" placeholder='Email' className='contactFormInput'/>
          </div>

          <div className='contactFormTextareaContainer'>
            <textarea name="message" className='contactFormTextarea' placeholder='Message'></textarea> 
          </div>
        </div>
        <div className='contactFormSubmitContainer'>
          <input type="submit" value="Submit" className='submitButton' />
        </div>
      </form>
    </div>
  );
};

export default contactForm;
