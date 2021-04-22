import React, { useContext } from 'react'
import Input from '../matirial/Input'
import {HiSearch} from 'react-icons/hi'
import Anchor from '../matirial/Anchor'
import styled from 'styled-components'
import { gitContext } from '../../context/Context'

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  box-sizing: border-box;
  min-width: 50%;
  border-radius: 5px;
  >*{
    margin: 5px
  }
  @media (max-width: 850px){
    width: 90%;
    height: 60px;
  }
`

const Search = () => {

  let {user, handleChange, handleSubmit} = useContext(gitContext);

  return (
    <Div>
      <HiSearch color='#2caeba' />
      <Input value={user} handleChange={handleChange} b_clr='#2caeba' clr='#2caeba' size={[30,2.5]} />
      <form onClick={e=>handleSubmit(e)}>
        <Anchor b_clr='#2caeba' bg='#2caeba' clr='white' size={[8,3]}>Search</Anchor>
      </form>
    </Div>
  )
}

export default Search
