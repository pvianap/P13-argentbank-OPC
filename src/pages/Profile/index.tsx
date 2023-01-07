import React, { useState, useEffect } from 'react';
import Account from '../../components/Account';
import { profile, updateProfile } from '../../store/User';

export default function Profile() {
  // GET CONTENT
  const [content, setContent] = useState<{
    firstName: string;
    lastName: string;
  }>({ firstName: '', lastName: '' });
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    profile().then((res: any) => setContent(res.data.body));
  }, []);

  //CHANGE NAME
  const [firstNameUpdate, setFirstNameUpdate] = useState('firstName');
  const handleChangeUserName = (e: any) => {
    e.preventDefault();
    const userProfile = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
    };
    updateProfile(userProfile);
    console.log('Sent to change: ', userProfile);
    setIsUpdating(false);
  };
  console.log('Profile content: ', content);
  return (
    <div>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {isUpdating ? (
              <form onSubmit={handleChangeUserName}>
                <div className="formChangeUserNameInputs">
                  <div>
                    <input
                      type="text"
                      id="username"
                      defaultValue={content.firstName}
                      className="inputUpdate"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="lastname"
                      defaultValue={content.lastName}
                      className="inputUpdate"
                    />
                  </div>
                </div>
                <div className="formChangeUserNameButtons">
                  <button type="submit" className="buttonUpdate">
                    Save
                  </button>
                  <button
                    type="button"
                    className="buttonUpdate"
                    onClick={(e) => setIsUpdating(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              `${content.firstName} ${content.lastName}!`
            )}
          </h1>
          {isUpdating ? (
            `save and cancel`
          ) : (
            <button className="edit-button" onClick={() => setIsUpdating(true)}>
              Edit Name
            </button>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amountString="2082.79"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amountString="10928.42"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amountString="184.30"
          description="Current Balance"
        />
      </main>
    </div>
  );
}
