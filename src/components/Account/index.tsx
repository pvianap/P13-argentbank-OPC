import React from 'react';

type Props = {};

export default function Account({
  title,
  amountString,
  description,
}: {
  title: string;
  amountString: string;
  description: string;
}) {
  const amount = parseFloat(amountString);
  return (
    <section className="account">
      <div>
        <h3 className="account-title"> {title} </h3>
        <p className="account-amount">${amount} </p>
        <p className="account-amount-description"> {description} </p>
      </div>
      <div className="cta">
        <button> View transactions </button>
      </div>
    </section>
  );
}
