import React from 'react'
import {useState, useEffect} from 'react'
import Product from './Product'
import {  MDBRow } from 'mdbreact'

export default function Products() {
    const [products, setProduct] = useState([
        {id: 1, name: "Mouse", price: 20, picture: "https://images.pexels.com/photos/9346/hands-desk-office-working.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}, 
        {id: 2, name: "Keyboard", price: 50, picture: "https://images.pexels.com/photos/532173/pexels-photo-532173.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
    ])

    useEffect(() => {
    }, [])

    return (
        <MDBRow>
            {products.map(product => (<Product product={product}/>))}
        </MDBRow>
    )
}
