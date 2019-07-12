import React, { Component } from 'react';

import './Header.css';
import profile from '../../assets/user.svg';

class Header extends Component {
  render() {
    return (
      <nav className="header">
        <img src="https://i.imgur.com/KDIDiSE.png" alt="facebook" />
        <div className="perfil">
          <strong className="namePerfil">Meu perfil</strong>
          <img src={profile} alt="perfil" />
        </div>
      </nav>
    );
  }
}

export default Header;
