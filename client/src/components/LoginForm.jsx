import './styles/loginForm.css';

document.documentElement.style.setProperty('--loginForm-primaryColor', "#" + import.meta.env.VITE_primaryColor);

function LoginForm() {
  return (
    <div className='loginBody'>
      <div className='loginForm'>

      </div>
    </div>
  );
};

export default LoginForm;
