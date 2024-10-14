import React, {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AxiosGetRequest from './AxiosGetRequest';

export default function AddProduct() {
    let navigate=useNavigate();

    const [product,setProduct]=useState({
        name:"",
        price:"",
        material:"",
        size:"",
        color:"",
        quantity:""
    })

    const{name,price,material,size,color,quantity}=product;

    const onInputChange=(event)=>{
        setProduct({...product,[event.target.name]: event.target.value});
    };

    const onSubmit=async(e)=>{
        e.preventDefault();
        try{
        await axios.post("http://localhost:8081/api/v1/products",{productName: name, price: price, material: material, size: size, quantity: quantity, color: color});
        navigate("/")
        }catch(error){
            console.log(error)
        }
    }

        const [options, setOptions] = useState([]);
      
        useEffect(() => {
          async function fetchData() {
            // Fetch data
            const { data } = await axios.get("http://localhost:8081/api/v1/colors/");
            const results = []
            // Store results in the results array
            data.forEach((value) => {
              results.push({
                key: value.color,
                value: value.colorId,
              });
        
            });
            // Update the options state
            setOptions([
              {key: 'Select a color', value: ''}, 
              ...results
            ])
          }
      
          // Trigger the fetch
          fetchData();
        }, []);
    
        // const { label, name1, ...rest } = props;
    

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

                <label htmlFor='Material' className='form-label'>Item Material</label>
                <input type='{text}' className='form-control' placeholder='Enter Material' name='material' value={material} onChange={(event)=>onInputChange(event)}></input>

                <label htmlFor='Size' className='form-label'>Item Size</label>
                <input type='{text}' className='form-control' placeholder='Enter Item Size' name='size' value={size} onChange={(event)=>onInputChange(event)}></input>

                <label htmlFor='Color' className='form-label'>Item Color</label>
                <select className='form-control' placeholder='Select Item Color' name='color' value={color} onChange={(event)=>onInputChange(event)} >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
        </select>
    
                <label htmlFor='Quantity' className='form-label'>Item Quantity</label>
                <input type='number' className='form-control' placeholder='Enter Item Quantity' name='quantity'  value={quantity} onChange={(event)=>onInputChange(event)}></input>
            </div>

            <button type='submit' className='btn btn-outline-primary'>Submit</button>
            <button type='submit' className='btn btn-outline-danger mx-2'>Cancel</button>
            </form>
        </div>
        
    </div>
  )
}
