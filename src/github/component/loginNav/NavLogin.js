import React, { useContext } from 'react';
import styled from 'styled-components';
import { gitContext } from '../../context/Context';
import Anchor from '../matirial/Anchor';

const NavLogin = () => {

  let {setLogin} = useContext(gitContext);
  const email = 'https://mail.google.com/';

  return (
    <Div>
      <div>
        <Anchor clr='green' b_clr='none' size={[8,1]} href={email}>
          @
        </Anchor>
      </div>
      <Heading>Wellcome,</Heading>
      <h3>Guest</h3>
      <span onClick={()=>setLogin(true)}>
        <Anchor clr='gray' b_clr='none' size={[6,.5]}>Logout</Anchor>
      </span>
      
    </Div>
  )
}

export default NavLogin

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
  padding: 10px 30%;
  background: #fff;
  @media (max-width: 850px){
    padding: 10px 15%;
  }
  @media (max-width: 650px){
    padding: 10px 5%;
  }
`