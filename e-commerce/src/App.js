import 'bootstrap/dist/css/bootstrap.min.css'
import Products from './Components/Product/Products'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function App() {
  return (
    <>
      <MDBNavbar dark bgColor='dark'>
        <MDBContainer fluid>
          <a href='#' className='navbar-brand'>Navbar</a>
          <MDBNavbarBrand href='#'>Login</MDBNavbarBrand>
          <MDBNavbarBrand href='#' className='justify-content-end'>Cart</MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      <Products />
    </>
  );
}

export default App;
