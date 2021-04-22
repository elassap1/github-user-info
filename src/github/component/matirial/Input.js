import React from 'react'
import styled from 'styled-components'

const Inputs = styled.input`
border: 1px solid ${props=>props.b_clr};
width: ${props=> `${props.size[0]}rem`};
height: ${props=> `${props.size[1]}rem`};
color: ${props=>props.clr?props.clr:props.clr};
background: ${props=>props.bg?props.bg:props.bg};
border-radius: 2px;
padding: 2px;
padding-left: 5px;
font-size: 1rem;
outline: none;
transition: all ease-in-out .5s;
&:hover{
  box-shadow: 0 0 15px ${props=>props.b_clr?props.b_clr:props.b_clr};
  transform: scale(1.01,1.01);
}
`  

const Input = ({handleChange, type='text', size=[1,1], holder='text', value, d_value, clr, bg='white', b_clr}) => {

  return (
    <>
      <Inputs size={size} type={type} placeholder={holder} value={value} defaultValue={d_value} onChange={e=>handleChange(e)} clr={clr} bg={bg} b_clr={b_clr} />
    </>
  )
}

export default Input
