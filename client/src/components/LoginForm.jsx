import './styles/loginForm.css';
import emailIcon from '../assets/email_icon.png';
import lockIcon from '../assets/lock_icon.png';
import { useState } from 'react';

document.documentElement.style.setProperty('--loginForm-primaryColor', "#" + import.meta.env.VITE_primaryColor);
document.documentElement.style.setProperty('--loginForm-fontName', import.meta.env.VITE_fontName);
document.documentElement.style.setProperty('--loginForm-fontSize', import.meta.env.VITE_fontSize);

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e) => {
    // Prevent default form submission
    e.preventDefault();

    try {
      const response = await fetch(import.meta.env.VITE_backendURL + "/login", {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        const data = await response.json();
        alert(data.message);
        return;
      }

      alert('Login successful!');

      // Reload the page after we have logged in
      window.location.reload(false);
    } catch (error) {
      // Handle the error messages
      alert(error);
    }
  };

  return (
    <div className='loginBody'>
      <form className='loginForm' onSubmit={handleSubmit}>
        <div className='loginTitle'> Loghează-te,<br/> chiorăie mațele! </div>
        <div className='loginInputsContainer'>
          <div className='loginInputContainer'>
            <img src={emailIcon} className='loginIcons' />
            <input type="text" className='loginInput'
              id="email" 
              name="email" 
              placeholder='Email' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='loginInputContainer'>
            <img src={lockIcon} className='loginIcons' />
            <input type="text" className='loginInput'
            id="password"
            name="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>

        </div>

        <div className='loginSubmitForgotContainer'>
          <input type="submit" value="Log In" className='submitButton' />
          <a className="loginForgotPasswordLink" href="/newpassword"> Forgot Password </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
