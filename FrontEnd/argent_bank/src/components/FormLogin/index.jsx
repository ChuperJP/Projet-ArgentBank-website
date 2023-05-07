import React from 'react'
import "../../style/FormLogin/formLogin.css"
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { logIn } from '../../features/log';
import { saveUserInfo } from '../../features/userInfo';
import { selectLog, selectUserInfo } from '../../utils/selectors';





function FormLogin() {

  const dispatch = useDispatch();
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const log = useSelector(selectLog)
  const userInfo = useSelector(selectUserInfo)


  const signIn = async() => {
    const logResponse = await fetch ('http://localhost:3001/api/v1/user/login',{
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: userName,
      password: password,
    }),
  });
  const logData = await logResponse.json();
  
  dispatch(logIn(logData.body.token))
  //console.log(logData.body.token)
  //alert(logData.message)
  

  const userInfoResponse = await fetch ('http://localhost:3001/api/v1/user/profile',{
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'Authorization': "Bearer " + logData.body.token
    },
    body: JSON.stringify({
     
    }),
  });
  const userInfoData = await userInfoResponse.json();
  //console.log(userInfoData.body)
  dispatch(saveUserInfo(userInfoData.body))

  }

  // const getUserInfo = async() => {
  //   const userInfoResponse = await fetch ('http://localhost:3001/api/v1/user/profile',{
  //   method: 'POST',
  //   headers: {
  //     'accept': 'application/json',
  //     'Authorization': "Bearer " + log.token
  //   },
  //   body: JSON.stringify({
     
  //   }),
  // });
  // const userInfoData = await userInfoResponse.json();
  // console.log(userInfoData)
  // dispatch(saveUserInfo(userInfoData))
  // //console.log(userInfo)
  // }


  const handleSubmit = async(e) => {
    e.preventDefault()
    signIn()
    setUserName("")
    setPassword("")
  }

  return (
    <form type="submit" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={userName} onChange={(e)=>setUserName(e.target.value)} required/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
              >Remember me</label>
          </div>
          <button className="sign-in-button" type="submit">Sign In</button> 
    </form>
)
}

export default FormLogin