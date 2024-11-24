// import { useEffect, useState } from 'react'
// import MenuButton from './components/menuButton.jsx';
import './App.css'
import NavBarContainer from './components/NavBarContainer.jsx';

// Enviroment variables
// const serverURL = import.meta.env.VITE_backendURL;

function App() {
  return (
    <>
      <NavBarContainer />
      <div className='filler'>

      </div>
      <div className='filler'>

      </div>
      <div className='filler'>

      </div>
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

export default App
