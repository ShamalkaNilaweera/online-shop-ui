import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {

    const [products, setProducts] = useState([])

    useEffect(()=> {
        loadProducts();
    },[]);

    const loadProducts=async()=>{
        const result=await axios.get("http://localhost:8081/api/v1/products/products")
        setProducts(result.data);
    }
  return (
    <div className='container'>
        <div className='py-4'>
        <table class="table table-hover border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product</th>
      <th scope="col">Price per Item</th>
      <th scope="col">Color</th>
      <th scope="col">Quantity</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        products.map((product,index)=>(
        <tr>
        <th scope="row" key={index}>{index+1}</th>
        <td>{product.productName}</td>
        <td>{product.productPrice}</td>
        <td>{product.color}</td>
        <td>{product.quantity}</td>
        <td>
            <button className='btn btn-outline-primary mx-2'>View</button>
            <button className='btn btn-primary mx-2'>Edit</button>
            <button className='btn btn-danger mx-2'>Delete</button>
        </td>
        </tr>
            
        ))
    }
    
  </tbody>
</table>
        </div>
    </div>
  )
}
