import React, { Component } from 'react';

import './Header.css';
import profile from '../../assets/user.svg';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div>
          <strong className="nameApp">facebook</strong>
        </div>
        <div class="perfil">
          <strong className="namePerfil">Meu perfil</strong>
          <img src={profile} alt="perfil" />
        </div>
      </div>
    );
  }
}

export default Header;
