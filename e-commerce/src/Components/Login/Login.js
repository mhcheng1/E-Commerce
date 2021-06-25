import React from 'react'
import GoogleLogin from 'react-google-login'

export default function Login() {
  const responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);
  }

  return (
    <div>
        <GoogleLogin
        clientId="934174265842-1tss91slckamufhpjchn25kelu4pk7gm.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        
        />
    </div>
  )
}
