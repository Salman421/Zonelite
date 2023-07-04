import React, { useState } from 'react';

const Wallet = () => {
  const [balance, setBalance] = useState(10000);
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('');
  const [ifscCode, setIFSCCode] = useState('');

  const handleDeposit = () => {
    const amount = parseFloat(prompt('Enter the deposit amount:'));
    if (!isNaN(amount) && amount > 0) {
      setBalance(balance + amount);
    }
  };

  const handleWithdraw = () => {
    const amount = parseFloat(prompt('Enter the withdrawal amount:'));
    if (!isNaN(amount) && amount > 0 && balance >= amount) {
      const enteredAccountNumber = parseInt(prompt('Enter your account number:'));
      const enteredAccountName = prompt('Enter your account name:');
      const enteredIFSCCode = prompt('Enter the IFSC code:');

      if (
        enteredAccountNumber === accountNumber &&
        enteredAccountName === accountName &&
        enteredIFSCCode === ifscCode
      ) {
        setBalance(balance - amount);
      } else {
        alert('Account details do not match. Withdrawal canceled.');
      }
    } else {
      alert('Invalid withdrawal amount or insufficient balance.');
    }
  };

  return (
    <div>
      <h2>Wallet Balance: {balance}</h2>
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
};

export default Wallet;
