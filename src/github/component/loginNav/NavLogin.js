import React from 'react';
import styled from 'styled-components';
import Anchor from '../matirial/Anchor';
import { useAuth0 } from "@auth0/auth0-react";

const NavLogin = () => {

  const {user, logout } = useAuth0();
  const email = 'https://mail.google.com/'

  return (
    <Div>
      <Gmail>
        <a href={email}>
          <img src={user.picture} alt={user.name}/>
        </a>
      </Gmail>
      <Heading>Wellcome,</Heading>
      <h3>{user.nickname}</h3>
      <span onClick={()=>logout({ returnTo: window.location.origin })}>
      <Anchor clr='gray' b_clr='none'>Logout</Anchor>
      </span>
      
    </Div>
  )
}

export default NavLogin

const Gmail = styled.div`
 img{
   width: 40px;
   border-radius: 40%40%;
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