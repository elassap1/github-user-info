import React, { useContext } from 'react';
import './user.scss'
import image from './login.svg'
import Anchor from '../../component/matirial/Anchor';
import { gitContext } from '../../context/Context';

const Login = () => {

  let {setLogin} = useContext(gitContext);

  return (
    <div className='user'>
      <img src={image} alt="github"/>
      <h1>Github User</h1>
      <span onClick={()=>setLogin(true)}>
      <Anchor go='/' padding={[1,1]} size={[15,1.5]} bg='#03a9f45c' clr='white' b_clr='#2196f3'>login / sign up</Anchor>
      </span>
    </div>
  )
}

export default Login
