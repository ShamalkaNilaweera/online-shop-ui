import React from 'react'
import { Link } from 'react-router-dom'

export default function 
() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">ONLINE SHOP</a>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
     
     <Link className='btn btn-outline-light' to="/addProduct"> Add Product</Link>
     <Link className='btn btn-outline-light' to="/addColor"> Add Color</Link>
  </div>
</nav>
    </div>
  )
}
