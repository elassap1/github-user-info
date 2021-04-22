import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import {AiOutlineBook} from 'react-icons/ai'
import {IoMdContacts, IoIosContact} from 'react-icons/io'
import {BsCode} from 'react-icons/bs'

let Container= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 3vh 10px;
  >*{
    margin: 10px
  }
  @media (max-width: 570px){
    flex-direction: column;
  }
  @media (min-width: 571px) and (max-width: 850px) {
    flex-wrap: wrap;
  }
`

let Book = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1rem;
  background: #fff;
  padding: 10px;
  color: gray;
  width: 20%;
  @media (max-width: 570px){
    grid-template-columns: 1fr 1fr;
    width: 85%;
  }
  @media (min-width: 571px) and (max-width: 850px) {
    width: 45%;
  }
`

const Card = (props) => {

  let {userInfo} = props

  let userData = [
    userInfo.public_repos, 
    userInfo.followers, 
    userInfo.following, 
    userInfo.public_gists
  ];

  let icons = [
    <AiOutlineBook/>,
    <IoMdContacts/>,
    <IoIosContact/>,
    <BsCode/>
  ];

  let titles = [
    'Repos',
    'Followers',
    'Following',
    'Gists'
  ]

  return (
    <Container>
      {userData.map((item, index)=><Book key={index}>
        <Icon>
          {icons[index]}
        </Icon>
        <div>
          <h2>{item}</h2>
          <h2>{titles[index]}</h2>
        </div>
      </Book>
      )}
    </Container>
  )
}

export default Card
