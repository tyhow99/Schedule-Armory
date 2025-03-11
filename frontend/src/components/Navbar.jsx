import './Navbar.css';




const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo-box">
            <img src="/logo.png" alt="Logo" className="logo" />
        </div>
        <div className="links-box">
            <div className="links-images" >
                <img src="/logo.png" alt="Logo" className="logo" />
                <img src="/logo.png" alt="Logo" className="logo" />
                <img src="/logo.png" alt="Logo" className="logo" />
            </div>
            <div className="links-description">
                <p>Hello</p>
            </div>
        </div>
        <div className="profile-box">
            <p>Profile</p>
        </div>
    </div>
  );
}

export default Navbar;
