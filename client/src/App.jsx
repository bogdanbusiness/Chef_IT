import { useEffect, useState } from 'react'
import './App.css'

// Enviroment variables
const serverURL = import.meta.env.VITE_backendURL;

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch(serverURL).then(
      (response) => response.json()
    ).then(
      (data) => {
        setBackendData(data)
      }
    )
  }, []);

  return (
    <div>
      {
        (backendData.string == undefined) ? (
          <p>Loading...</p>
        ) : (
          <p> { backendData.string } </p>
        )
      }
    </div>
  );
}

export default App
