import 'bootstrap/dist/css/bootstrap.min.css'
import Products from './Components/Product/Products'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import {useState, useEffect} from 'react'


export default function App() {
  const clientID = "934174265842-1tss91slckamufhpjchn25kelu4pk7gm.apps.googleusercontent.com"
  const [user, setUser] = useState(null);

  const responseGoogle=(response)=>{
    console.log(response.profileObj);
    setUser(response.profileObj)
  }

  const handleLogoutSuccess = (response) => {
    console.log("Logout Success ", response);
    setUser(null);
  }

  const handleLogoutFailure = error => {
    console.log("Logout Failure ", error);
  }

  return (
    <>
      <Router>
        <MDBNavbar dark bgColor='dark'>
          <MDBContainer fluid>
            <Link to="/" className='navbar-brand'>Navbar</Link>
            {user ? <div className="d-flex flex-row"> 
              <div><Link className='navbar-brand'> Welcome {user.givenName} !</Link> </div>
              <GoogleLogout
              clientId={clientID}
              onLogoutSuccess={handleLogoutSuccess}
              onFailure={handleLogoutFailure}
            />
            </div> :
            <div>
              <GoogleLogin
                clientId= {clientID}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              /></div> 
            }
            <MDBNavbarBrand href='/Cart' className='justify-content-end'>Cart</MDBNavbarBrand>
          </MDBContainer>
        </MDBNavbar>
        <Switch>
          <Route path="/Cart">
          </Route>
          <Route path="/">
            <Products />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
