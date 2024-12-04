import NavBarContainer from '../components/NavBarContainer.jsx';
import MainBody from '../components/MainBody.jsx';
import bigLogo from '../assets/big_logo_black.png'
import RecipeList from '../components/RecipeList.jsx';
import ContactForm from '../components/ContactForm.jsx';
import Footer from '../components/Footer.jsx';

// Enviroment variables
// const serverURL = import.meta.env.VITE_backendURL;

function Home() {
  return (
    <>
      <h1> hi </h1>
      <NavBarContainer />
      <MainBody child={<img className='bigLogo' src={bigLogo} style={{
        minWidth: "200px",
        width: "30vw"
      }} />} />
      <RecipeList />
      <ContactForm />
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

export default Home;
