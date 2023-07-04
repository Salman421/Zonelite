import React from 'react';
import Addproduct from './components/Addpro'
import Editpro from './components/Editpro'
import Layout from './Layout/Layout';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import ForgotPass from './components/ForgotPass'
import ViewPro from './components/ViewPro'
import Wallet from './components/Wallet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/forgot' element={<ForgotPass />}></Route>
        <Route path='/layout' element={<Layout />}></Route>
        <Route path='/wall' element={<Wallet />}></Route>
        <Route path='/add' element={< Addproduct />} ></Route>
        <Route path='/edit/:id' element={<Editpro />}></Route>
        <Route path='/view/:id' element={<ViewPro />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;