import React, { useContext } from 'react'
import styled from 'styled-components';
import Anchor from '../matirial/Anchor';
import {MdBusinessCenter} from 'react-icons/md';
import {GrMapLocation} from 'react-icons/gr';
import {IoMdLink} from 'react-icons/io';
import { gitContext } from '../../context/Context';

let Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  >div{
    margin: 25px 15px;
  }
  @media (max-width: 850px){
    flex-direction: column;
  }
`
let Article = styled.div`
  position: relative;
  width: 40%;
  height: 400px;
  background: white;
  padding: 25px;
  border: 1px solid black;
  overflow: auto;
  &::before{
    content: ${props=>props.title&&props.title};
    background: white;
    padding: 5px 10px;
    font-size: 2rem;
    position: absolute;
    top: -30px;
    left: 0;
  };
  img{
    width: 70px;
    border-radius: 50%;
  }
  @media (max-width: 850px){
    width: 85%;
  }
`

let User1 = styled.div`
  display: flex;
  justify-content: space-between;
  >*{
    margin: 10px 0;
  }
  a{
    font-size: 1.2rem;
    width: 100px;
    height: 44px;
    color: green;
    text-decoration: none;
  }
`
let User2 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  font-size: 1.5rem;
  margin: 10px;
  >div{
    display: flex;
    >*{
      margin: 10px
    }
    a{
      text-decoration: none;
      color: black;
    }
  }
`

const Wraper = (props) => {

  let {userInfo, follower} = useContext(gitContext);

  let {subscriptions_url, avatar_url, twitter_username,html_url, name, company, blog,bio,location} = userInfo;

  return (
    <Container>

      <Article title='User'>
        <User1>
          <img src={avatar_url} alt={name||'Guest'} />
          <div>
            <h3>{name||'Guest'}</h3>
            <h3>@{twitter_username||'No Social Media'}</h3>
          </div>
            <Anchor padding={[1, 1]} go={subscriptions_url} clr='green' b_clr='green' to='' size={[1.7,0.5]}>Follow</Anchor>
        </User1>
        <p style={{padding: '10px', margin: '10px 0'}}>{bio||'No Bio Exist'}</p>
        <User2>
          <div>
            <MdBusinessCenter/><p>{company||'company'}</p>
          </div>
            <div>
            <GrMapLocation/><p>{location||'location'}</p>
            </div>
            <div>
            <IoMdLink/><p><a href={html_url}>{blog||'blog'}</a></p>
            </div>
        </User2>
      </Article>
      <Article>
        {follower.length>0 ? follower.map(
          (item,index)=><User1 key={index+10} title='Followers'>
            <img src={item.avatar_url} alt={item.login}/>
            <div>
              <h3>{item.login}</h3>
              <a href={html_url}>{html_url}</a>
            </div>
          </User1>)
      :<div>
        No Followers Exist
        </div>}
      </Article>

    </Container>
  )
}

export default Wraper
