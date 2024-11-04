import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
export default function Home() {
  let navigate=useNavigate();
  
    const [products, setProducts] = useState([])

    useEffect(()=> {
        loadProducts();
    },[]);

    const loadProducts=async()=>{
        const result=await axios.get("http://localhost:8081/api/v1/products/products")
        setProducts(result.data);
    }

    const handleDelete = (productId) => {
      console.log('Delete action triggered!')
      if (window.confirm("Are you sure you want to delete this item?")) {
        axios.delete(`http://localhost:8081/api/v1/products/deleteProduct/${productId}`);
        console.log('Product deleted');
      }
      const newProductList = products.filter( prod => prod.productId !== productId)
      setProducts(newProductList);
      navigate("/")
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
            <Link className='btn btn-outline-primary mx-2' to ={`/viewProduct/${product.productId}`}>View</Link>
            <Link className='btn btn-primary mx-2'  to ={`/updateProduct/${product.productId}`}>Edit</Link>
            <button className='btn btn-danger mx-2' onClick={()=>handleDelete(product.productId)}>Delete</button>
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
