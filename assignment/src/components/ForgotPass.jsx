import React, { useState } from 'react';

const ForgetPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleForgetPassword = () => {
    // Perform forget password logic here
  };

  return (
    <div>
      <h2>Forget Password</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleForgetPassword}>Reset Password</button>
    </div>
  );
};

export default ForgetPasswordScreen;
