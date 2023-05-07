import React, { useState } from 'react'
import "../../style/UserHeader/userHeader.css"
import { useSelector, useDispatch } from 'react-redux'
import { selectUserInfo, selectEditInfo } from '../../utils/selectors';
import { toggleEdit } from '../../features/editInfo.js'
import FormEditInfo from '../FormEditInfo'


function UserHeader() {

  const userInfo = useSelector(selectUserInfo)
  const editInfo = useSelector(selectEditInfo)
  const dispatch = useDispatch()
  const firstName = userInfo.firstName
  const lastName = userInfo.lastName

  return (
    <div className="header">
        {editInfo.edit === true ? <h1>Edit user info</h1> : <h1>Welcome back<br />{firstName} {lastName}!</h1>}
        {editInfo.edit === true ? null : <button className="edit-button" onClick={()=> dispatch(toggleEdit())}>Edit Name</button>}
        {editInfo.edit === true ?<FormEditInfo /> : null}
      </div>
  )
}

export default UserHeader