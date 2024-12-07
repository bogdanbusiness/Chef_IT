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
}

export default Home;
