import React from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

export default function Product( {product} ) {
    
    return (
        <MDBCol style={{ maxWidth: "22rem" }}>
          <MDBCard className="mt-3 mx-3">
            <MDBCardImage className="card-img-top" src={product.picture} alt='Card cap'  />
            <MDBCardBody>
              <MDBCardTitle>{ product.name }</MDBCardTitle>
              <MDBCardText> ${ product.price } </MDBCardText>
              <a href="#" className='d-flex justify-content-end align-items-center'>Add to Cart</a>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    )
}
