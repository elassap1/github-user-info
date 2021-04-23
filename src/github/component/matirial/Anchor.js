import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Links = styled(Link)`
  border: 2px solid ${props=>props.b_clr};
  color: ${props=>props.clr};
  text-decoration: none;
  background: ${props=>props.bg};
  width: ${props=> `${props.size[0]}rem`};
  height: ${props=> `${props.size[1]}rem`};
  font-size: ${props=> `${props.size[0]*0.2}rem`};
  border-radius: 5px;
  transition: all ease-in-out .5s;
  cursor: pointer;
  text-align: center;
  &:hover{
    color: ${props=>props.clr};
    background : ${props=>props.bg};
    box-shadow: 0 0 10px ${props=>props.b_clr};
    transform: scale(1.3,1.1);
  }
  @media (max-width: 650px){
    width: ${props=> `${props.size[0]*.8}rem`};
    height: ${props=> `${props.size[1]*.8}rem`};
  }
`

const Anchor = ({clr, bg, b_clr, size=1,children, go='', padding}) => {

  return (
    <Links  to={go} clr={clr} bg={bg} b_clr={b_clr} size={size} padding={padding}>
      {children}
    </Links>
  )
}

export default Anchor
