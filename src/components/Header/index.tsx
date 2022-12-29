import React from 'react';
import '../../style/main.css';
import Logo from '../../assets/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

type Props = {};

export default function Header({}: Props) {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to="/login">
          <FontAwesomeIcon icon={faUserCircle} className="fa fa-user-circle" />
          Sign In
        </Link>
      </div>
    </nav>
  );
}
