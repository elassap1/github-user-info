import React from 'react'
import styled from 'styled-components'

let Container = styled.div`
  display: flex;
  border-radius: 5px;
  box-shadow: 0 0 5px black;
  box-sizing: border-box;
  padding: 5px 20px;
  background: #fff;
  width: 200px;
  justify-content: space-between;
  >*{
    margin: 10px;
  }
`

const Div = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Div
