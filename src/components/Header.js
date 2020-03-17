import React from 'react';
import '../App.css';

function Header () {
  return (
    <div className="header" >
      <h1 className="title" >Facebook</h1>
      <h2 className="profile" >Meu perfil</h2>
      <img src={require("../assets/profile.png")}/>
    </div>
  )
};

export default Header;

