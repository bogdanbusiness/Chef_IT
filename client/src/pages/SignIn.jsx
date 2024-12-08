import NavBarContainer from '../components/NavBarContainer.jsx';
import SignInForm from '../components/SignInForm.jsx';
import MobileFooter from '../components/MobileFooter.jsx';


// Enviroment variables
// const serverURL = import.meta.env.VITE_backendURL;

function SignIn() {
  return (
    <>
      <NavBarContainer />
      <SignInForm />

      <MobileFooter />
    </>
  );
}

export default SignIn;
