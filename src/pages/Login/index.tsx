// import React, { useState } from 'react';
// import Api from '../../utils/Api';
import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
// import { clearMessage } from '../../slices/message';
import { login, logout } from '../../store/User';

type Props = {};

export default function Login({}: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.user);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(login({ email, password }));
  };
  if (user) {
    return <Navigate to="/profile" />;
  }
  return (
    <div>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                id="email"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                id="password"
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            {/* SHOULD BE THE BUTTON BELOW  */}
            <button className="sign-in-button">Sign In</button>
          </form>
          {/* {loading && (
          <span className="spinner-border spinner-border-sm">Loading</span>
        )} */}
        </section>
      </main>
    </div>
  );
}
