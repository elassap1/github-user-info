import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import NavLogin from '../../component/loginNav/NavLogin'
import Card from '../../component/minCard/Card'
import Search from '../../component/search/Search'
import './home.scss'
import { gitContext } from '../../context/Context'
import Wraper from '../../component/minCard/Wraper'
import Charting from '../../component/charts/Charting'

const Home = () => {

  let [user, setUser] = useState('');
  let [gitUser, setGitUser] = useState('');
  let [userInfo, setUserInfo] = useState({});
  let [follower, setFollower] = useState([]);
  let [requestLimit, setRequestLimit] = useState({});

  const githubUser = `https://api.github.com/users/${user}`;
  const request = 'http://api.github.com/rate_limit'

  const getUser = async() => {
    fetch(githubUser).then(res=>res.json()).then(data=>setUserInfo(data)).then(
      fetch(userInfo.followers_url).then(res=>res.json()).then(data=>setFollower(data))
    );
    fetch(request).then(res=>res.json()).then(data=>setRequestLimit(data.rate))
  }

  useEffect(()=>{
    user!==''&&getUser();
    setUser('');
  },[gitUser])

  const handleChange = (e) => {
    let value = e.target.value;
    value!==''&&setUser(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    user!==''&&setGitUser(user);
  }

  return (
    <div className='home'>
      <gitContext.Provider value={{handleChange, user, handleSubmit, follower, userInfo}}>
        <NavLogin />
        <Div>
          <Search />
          <Span>Requests: {requestLimit.remaining} / {requestLimit.limit}</Span>
        </Div>
      {userInfo.login?

        <>
          <Card userInfo={userInfo}/>
          <Wraper />
          <Charting />
        </>

        :<Div style={{fontSize: '2rem', color: 'white'}}>No github user request</Div>
      }
      </gitContext.Provider>
    </div>
  )
}

export default Home

let Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 90% !important;
margin: 10vh 0;
>*{
  margin: 10px
}
@media (max-width: 850px){
  flex-direction: column;
}
span{
  color: white;
}
`
let Span = styled.span`
font-size: 1.5rem;
color: gray;
`
