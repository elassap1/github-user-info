import React from 'react';
import './user.scss'
import image from './login.svg'
import Anchor from '../../component/matirial/Anchor';
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {

  const { loginWithRedirect } = useAuth0();


  return (
    <div className='user'>
      <img src={image} alt="github"/>
      <h1>Github User</h1>
      <span onClick={()=>loginWithRedirect()}>
      <Anchor go='/' padding={[1,1]} size={[15,1.5]} bg='#05ca2854' clr='white' b_clr='#05ca28'>login / sign up</Anchor>
      </span>
    </div>
  )
}

export default Login
