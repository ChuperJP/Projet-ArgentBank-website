import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../style/Header/header.css"
import LogoBank from "../../assets/argentBankLogo.png"
import { useDispatch, useSelector } from "react-redux"
import { selectLog, selectUserInfo } from '../../utils/selectors';
import { logOut } from '../../features/log';
import { removeUserInfo } from '../../features/userInfo'




function Header() {

  
  const dispatch = useDispatch()
  const log = useSelector(selectLog)
  const userInfo = useSelector(selectUserInfo)
  const pseudo = userInfo.userName

  const isConnected = () => {
    if (log.token === null){
      return false
    }
      return true
  }


  const signOut = () =>{
    dispatch(removeUserInfo())
    dispatch(logOut())
  }

  const handleClick = (e) =>{
    signOut()
  }
  
 console.log(isConnected())
 console.log(userInfo.userName)
 
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/home">
        <img
          className="main-nav-logo-image"
          src={LogoBank}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {isConnected() === true ? null :
          <NavLink className="main-nav-item" to="/sign-in">
          <i className="fa fa-user-circle"></i>
          Sign In
          </NavLink>
          }
        { isConnected() === false ? null :
          <NavLink className="main-nav-item" to="/user">
          <i className="fa fa-user-circle"></i>
          {pseudo}
          </NavLink> 
        }
        { isConnected() === false ? null :
          <NavLink className="main-nav-item" to="/home" onClick={handleClick}>
          <i className="fa fa-sign-out"></i>
          Sign Out
          </NavLink> 
          }
      </div>
    </nav>
  )
}

export default Header