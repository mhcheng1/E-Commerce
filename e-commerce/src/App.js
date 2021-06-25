import 'bootstrap/dist/css/bootstrap.min.css'
import Products from './Components/Product/Products'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import GoogleLogin from 'react-google-login'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <MDBNavbar dark bgColor='dark'>
          <MDBContainer fluid>
            <Link to="/" className='navbar-brand'>Navbar</Link>
            <Link to="/login" className='navbar-brand'>Login</Link>
            <MDBNavbarBrand href='#' className='justify-content-end'>Cart</MDBNavbarBrand>
          </MDBContainer>
        </MDBNavbar>
        <Switch>
          <Route path="/">
            <Products />
          </Route>
          <Route path="/login">
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
