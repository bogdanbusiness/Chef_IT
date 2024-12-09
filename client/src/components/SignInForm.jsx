import './styles/signinForm.css';
import telehponeIcon from '../assets/telephone_icon.png';
import personIcon from '../assets/person_icon.png';
import emailIcon from '../assets/email_icon.png';
import lockIcon from '../assets/lock_icon.png';
import { useState } from 'react';
import { useNavigate } from 'react-router';

document.documentElement.style.setProperty('--signinForm-primaryColor', "#" + import.meta.env.VITE_primaryColor);
document.documentElement.style.setProperty('--signinForm-fontName', import.meta.env.VITE_fontName);
document.documentElement.style.setProperty('--signinForm-fontSize', import.meta.env.VITE_fontSize);

function SigninForm() {
  const [full_name, setFullName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    // Prevent default form submission
    e.preventDefault();

    try {
      // Check if the fields are completed
      if (full_name == '') {
        alert("Full name required");
        return;
      }

      if (telephone == '') {
        alert("Telephone number required");
        return;
      }

      if (email == '') {
        alert("Email required");
        return;
      }

      if (password == '' || confirm_password == '') {
        alert("Password required");
        return;
      }

      // Check if the password equals confirm password
      if (password.localeCompare(confirm_password) != 0) {
        alert("Password doesnt equal confirm password");
        return;
      }

      const response = await fetch(import.meta.env.VITE_backendURL + "/signin", {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ full_name, telephone, email, password }),
      });

      if (response.status == 201) {
        const data = await response.json();
        alert(data.message);
        // navigate('/profile');
      } else {
        alert("SERVER_ERROR");
      }
    } catch (error) {
      // Handle the error messages
      alert(error);
    }
  };

  return (
    <div className='signinBody'>
      <form className='signinForm' onSubmit={handleSubmit}>
        <div className='signinTitle'> Hai, fă foamea cu noi! </div>
        <div className='signinInputsContainer'>

        <div className='signinInputContainer'>
            <img src={personIcon} className='signinIcons' />
            <input type="text" className='signinInput'
              id="full_name"
              name="full_name"
              placeholder='Full name'
              value={full_name}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className='signinInputContainer'>
            <img src={telehponeIcon} className='signinIcons' />
            <input type="text" className='signinInput'
              id="telephone"
              name="telephone"
              placeholder='Telephone'
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
          </div>

          <div className='signinInputContainer'>
            <img src={emailIcon} className='signinIcons' />
            <input type="text" className='signinInput'
              id="email"
              name="email"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='signinInputContainer'>
            <img src={lockIcon} className='signinIcons' />
            <input type="text" className='signinInput'
              id="password"
              name="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='signinInputContainer'>
            <img src={lockIcon} className='signinIcons' />
            <input type="text" className='signinInput'
              id="confirm_password"
              name="confirm_password"
              placeholder='Confirm Password'
              value={confirm_password}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

        </div>

        <input type="submit" value="Sign In" className='submitButton' />
      </form>
    </div>
  );
};

export default SigninForm;
