import React from 'react'

import "../../style/SignIn/signIn.css"
import FormLogin from '../../components/FormLogin'

function Sign_in() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <FormLogin />
      </section>
    </main>
    )
    }
  


export default Sign_in