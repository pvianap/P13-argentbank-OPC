import React, { useState } from 'react';
import Api from '../../utils/Api';

type Props = {};

export default function Login({}: Props) {
  //EVENTLIST -> Action (Login[Api/Post => Res => Dispatch], Logout, modifyProfile, Transactions) -> API POST LOGIN -> dispatch store
  //ifAuth => /user

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await Api.login(email, password).then((res) =>
        console.log(res.body.token)
      );
      // gérez ici la réussite du login
    } catch (error: any) {
      setError(error.message);
      console.log('Login error: ', error);
    }
  };

  return (
    <div>
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
      </section>
    </div>
  );
}
