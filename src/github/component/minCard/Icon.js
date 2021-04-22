import React from 'react'
import styled from 'styled-components'

let Icons = styled.div`
  font-size: 2.5rem;
  padding: 20px;
  border-radius: 50%;
  background: #f3a189;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 850px) and (min-width: 650px){
    font-size: 3rem;
    padding: 15px 5px;
  }
  @media (max-width: 650px){
    font-size: 3.5rem;
    padding: 5px;
    width: 100px
  }
`

const Icon = ({children}) => {
  return (
    <Icons>
      {children}
    </Icons>
  )
}

export default Icon
