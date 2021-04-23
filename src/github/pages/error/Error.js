import React from 'react'
import styled from 'styled-components'
import Anchor from '../../component/matirial/Anchor';

const Div = styled.div`
  max-width: 100vw;
  height: 100vh;
  background: #E91E63;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  >*{margin:25px}
`;

const H1 = styled.h1`
  font-size: 4rem;
`

const H2 = styled.h1`
  font-size: 2rem;
`

const Error = () => {
  return (
    <Div>
      <H1>404</H1>
      <H2>Page Not Found</H2>
      <span>
        <Anchor go='/' clr='white' b_clr='#000' bg='#8bc34ac2' padding={[1,1.8]} size={[20,15]}>Back To Home</Anchor>
      </span>
    </Div>
  )
}

export default Error