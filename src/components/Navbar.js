import React, { useState, useEffect } from "react";
import "./Navbar.css"

function Navbar(){
    const[show, setShow] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        setShow(window.scrollY > 100);
      })
    }, []);
    


    return(
        <div className={`nav-container ${show && "nav-container-black"}`}>
            <img className="nav-logo" alt="Netflix" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"></img>
            <img className="nav-profile" alt="Profile" src="https://media.licdn.com/dms/image/C4E03AQGcS1p2B2Id_g/profile-displayphoto-shrink_800_800/0/1654023622639?e=1694044800&v=beta&t=rnIW9xjlEk_cEmG8NoufbMbjkXtrDphqM695XHK4b64"></img>
            <div className="nav-text">
                <h3>Thulio Pereira 🤠</h3>
            </div>
        </div>
    )

}

export default Navbar;