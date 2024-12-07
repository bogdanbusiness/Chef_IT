import './styles/loginForm.css';

document.documentElement.style.setProperty('--loginForm-primaryColor', "#" + import.meta.env.VITE_primaryColor);

function LoginForm() {
  return (
    <div className='loginBody'>
      <div className='loginForm'>
        <form>
          <input type="text" id="email" name="email" placeholder='Email'/>
          <input type="text" id="password" name="password" placeholder='Password'/>
          <input type="submit" value="Submit" className='submitButton' />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
