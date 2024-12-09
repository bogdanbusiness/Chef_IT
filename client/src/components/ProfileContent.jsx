import "./styles/profileContent.css";
import Cook from "../assets/cook.png";
import Cookies from "js-cookie"

document.documentElement.style.setProperty('--profileContent-primaryColor', "#" + import.meta.env.VITE_primaryColor);
document.documentElement.style.setProperty('--profileContent-secondaryColor', "#" + import.meta.env.VITE_secondaryColor);
document.documentElement.style.setProperty('--profileContent-fontName', import.meta.env.VITE_fontName);
document.documentElement.style.setProperty('--profileContent-fontSize', import.meta.env.VITE_fontSize);

function ProfileContent() {
  const user = Cookies.get("user");
  let name = "";
  let email = "";
  let telephone = "";

  if (user) {
    const parsedInfo = JSON.parse(user);
    name = parsedInfo.full_name;
    email = parsedInfo.email; 
    telephone = parsedInfo.telephone;
  }
 

	return (
		<div className="profileContent">
			<div className="profileCardsContainer">
        <div className="profileCookCard">
          <img src={Cook} className="profileCardImg"/>
          <span className="profileInfo"> {name} </span>
        </div>

        <div className="profileInfoCard">
          <span className="profileInfo"> Email: {email} </span>
          <span className="profileInfo"> Telephone: {telephone} </span>
          <span className="profileInfo"> College Group: </span>
        </div>
			</div>

			<a href="/addRecipe" className='profileAddRecipeLink' >
				<div className='profileAddRecipe'>
					Add a recipe
				</div>
			</a>
		</div>
	);
}

export default ProfileContent;
