import React, { useContext } from 'react';
import styled from 'styled-components';
import { gitContext } from '../../context/Context';
import Anchor from '../matirial/Anchor';

const NavLogin = () => {

  let {handleLogin} = useContext(gitContext);
  const email = 'https://mail.google.com/'

  return (
    <Div>
      <Gmail>
        <a href={email}>
          @
        </a>
      </Gmail>
      <Heading>Wellcome,</Heading>
      <h3>Guest</h3>
      <span onClick={()=>handleLogin()}>
      <Anchor onClick={()=>handleLogin()} clr='gray' b_clr='none'>Logout</Anchor>
      </span>
      
    </Div>
  )
}

export default NavLogin

const Gmail = styled.div`
a{
  font-size: 1.3rem;
  color: green;
  text-decoration: none;
  font-weight: 700;
}
`

const Heading = styled.h3`
  color: gray;
  font-weight: 100;
`
const Div = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 10px 35%;
  background: #fff;
  @media (max-width: 850px){
    padding: 10px 15%;
  }
  @media (max-width: 650px){
    padding: 10px 5%;
  }
`