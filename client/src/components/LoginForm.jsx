import './styles/loginForm.css';
import { useState } from 'react';

document.documentElement.style.setProperty('--loginForm-primaryColor', "#" + import.meta.env.VITE_primaryColor);

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
        throw new Error(response.message);
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
      <div className='loginForm'>
        <form onSubmit={handleSubmit}>
          <input type="text" 
            id="email" 
            name="email" 
            placeholder='Email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input type="text"
            id="password"
            name="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Submit" className='submitButton' />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
