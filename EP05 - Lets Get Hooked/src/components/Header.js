import { foodLogoURL } from "../utils/constant"; // whenever we have named export from single file this is how we import named export with curly braces

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo"
          alt="logo"
          src={foodLogoURL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header; // in one file we can have only one default export