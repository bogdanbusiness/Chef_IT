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

  // const [backendData, setBackendData] = useState([{}]);

  // useEffect(() => {
  //   fetch(serverURL).then(
  //     (response) => response.json()
  //   ).then(
  //     (data) => {
  //       setBackendData(data)
  //     }
  //   )
  // }, []);

  // return (
  //   <div>
  //     {
  //       (backendData.string == undefined) ? (
  //         <p>Loading...</p>
  //       ) : (
  //         <p> { backendData.string } </p>
  //       )
  //     }
  //   </div>
  // );
}

export default LogIn;
