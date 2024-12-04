import NavBarContainer from '../components/NavBarContainer.jsx';
import MainBody from '../components/MainBody.jsx';
import bigLogo from '../assets/big_logo_black.png'

// Enviroment variables
// const serverURL = import.meta.env.VITE_backendURL;

function SignIn() {
  return (
    <>
      <NavBarContainer />
      <MainBody child={<img className='bigLogo' src={bigLogo} />} />
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

export default SignIn;
