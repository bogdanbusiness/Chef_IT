import './App.css';
import NavBarContainer from './components/NavBarContainer.jsx';
import Footer from './components/Footer.jsx';
import MainBody from './components/MainBody.jsx';
import bigLogo from './assets/big_logo_black.png'
import RecipeList from './components/RecipeList.jsx';

// Enviroment variables
// const serverURL = import.meta.env.VITE_backendURL;

function App() {
  return (
    <>
      <NavBarContainer />
      <MainBody child={<img className='bigLogo' src={bigLogo} />} />
      <RecipeList />
      <Footer />
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

export default App;
