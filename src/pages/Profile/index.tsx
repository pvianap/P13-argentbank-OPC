import React, { useState, useEffect } from 'react';
import Account from '../../components/Account';
import { profile } from '../../store/User';

export default function Profile() {
  const [content, setContent] = useState<{
    firstName: string;
    lastName: string;
  }>({ firstName: '', lastName: '' });

  useEffect(() => {
    profile().then((res: any) => setContent(res.data.body));
  }, []);

  return (
    <div>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {content.firstName} {content.lastName}!
          </h1>
          <button className="edit-button">Edit Name</button>
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
