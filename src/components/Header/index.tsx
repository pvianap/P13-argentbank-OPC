import React, { useState, useEffect, useCallback } from 'react';
import '../../style/main.css';
import Logo from '../../assets/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, profile } from '../../store/User';

type Props = {};

export default function Header({}) {
  const { user } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  function LogOut() {
    dispatch(logout());
  }
  // GET CONTENT
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState<{
    firstName: string;
    lastName: string;
  }>({ firstName: '', lastName: '' });

  console.log('User header: ', user);
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
        {user ? (
          <div>
            <Link to="/profile">
              <i className="fa-solid fa-2x fa-circle-user" />
              <p>
                {' '}
                {user.content != undefined
                  ? user.content.content.firstName
                  : ''}{' '}
              </p>
            </Link>
            <Link
              className="main-nav-item"
              onClick={() => LogOut()}
              to="/login"
            >
              <FontAwesomeIcon
                icon={faUserCircle}
                className="fa fa-user-circle"
              />
              Logout
            </Link>
          </div>
        ) : (
          <Link className="main-nav-item" to="/login">
            <FontAwesomeIcon
              icon={faUserCircle}
              className="fa fa-user-circle"
            />
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
