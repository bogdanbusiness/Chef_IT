import NavBarContainer from '../components/NavBarContainer.jsx';
import LoginForm from '../components/LogInForm.jsx';
import MobileFooter from '../components/MobileFooter.jsx';


// Enviroment variables
// const serverURL = import.meta.env.VITE_backendURL;

function LogIn() {
  return (
    <>
      <NavBarContainer />
      <LoginForm />

      <MobileFooter />
    </>
  );
}

export default LogIn;
