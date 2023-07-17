import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddProduct() {
    let navigate=useNavigate();

    const [product,setProduct]=useState({
        name:"",
        price:"",
        quantity:"",
        size:"",
        material:""
    })

    const{name,price,quantity,size,material}=product;

    const onInputChange=(event)=>{
        setProduct({...product,[event.target.name]: event.target.value});
    };

    const onSubmit=async(e)=>{
        e.preventDefault();
        try{
        await axios.post("http://localhost:8081/api/v1/products",{name: name,price: price,color:color,quantity:quantity,size:size,material:material});
        navigate("/")
        }catch(error){
            console.log(error)
        }
    }

  return (
    <div className='container'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Add Item</h2>
            <form onSubmit={onSubmit}>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>Item Name</label>
                <input type='{text}' className='form-control' placeholder='Enter Item Name' name='name' value={name} onChange={(event)=>onInputChange(event)}></input>

                <label htmlFor='Price' className='form-label'>Item Price</label>
                <input type='number' className='form-control' placeholder='Enter Item Price' name='price' value={price} onChange={(event)=>onInputChange(event)}></input>
{/*                 
                <label htmlFor='Color' className='form-label'>Item Color</label>
                <input type='number' className='form-control' placeholder='Enter Item Color' name='color' value={color} onChange={(event)=>onInputChange(event)}></input> */}

                <label htmlFor='Quantity' className='form-label'>Item Quantity</label>
                <input type='number' className='form-control' placeholder='Enter Item Quantity' name='quantity'  value={quantity} onChange={(event)=>onInputChange(event)}></input>

                <label htmlFor='Size' className='form-label'>Item Size</label>
                <input type='text' className='form-control' placeholder='Enter Item Size' name='size'  value={size} onChange={(event)=>onInputChange(event)}></input>
            
                <label htmlFor='Quantity' className='form-label'>Item Material</label>
                <input type='text' className='form-control' placeholder='Enter Item Material' name='material'  value={material} onChange={(event)=>onInputChange(event)}></input>
            </div>

            <button type='submit' className='btn btn-outline-primary'>Submit</button>
            <button type='submit' className='btn btn-outline-danger mx-2'>Cancel</button>
            </form>
        </div>
        
    </div>
  )
}
