import './App.css'
// import NavBarContainer from './components/NavBarContainer.jsx';
import Footer from './components/Footer.jsx';

// Enviroment variables
// const serverURL = import.meta.env.VITE_backendURL;

function App() {
  return (
    <>
      <Footer />
      <div className='filler'>

      </div>
      <div className='filler2'>

      </div>
      {/* <NavBarContainer /> */}
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
