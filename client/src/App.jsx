import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home.jsx'
import LogIn from './pages/LogIn.jsx';
import SignIn from './pages/SignIn.jsx';

// Enviroment variables
// const serverURL = import.meta.env.VITE_backendURL;

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/newpassword" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
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
