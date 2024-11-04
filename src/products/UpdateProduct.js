import React, {useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateProduct(){



  let navigate=useNavigate();

  const {id} = useParams();

    const [product,setProduct]=useState({
      id:0,
        name:"",
        price:"",
        material:"",
        size:"",
        colorId:0,
        quantity:""
    })

    // const{productId, name,price,material,size,colorId,quantity}=product;

    const onInputChange=(event)=>{
        setProduct({...product,[event.target.name]: event.target.value});
    };

    const onSubmit=async(e)=>{
        e.preventDefault();
        try{
          console.log("onsubmit"+ values.price)
        await axios.put("http://localhost:8081/api/v1/products",{productId: id, productName: values.productName, price: values.price, material: values.material, size: values.size, quantity: values.quantity, color: values.color});
        navigate("/")
        }catch(error){
            console.log(error)
        }
    }

    const [options, setOptions] = useState([]);


    const [values, setValues] = useState({
      productId : id,
      productName : "",
      price:0,
      material:"",
      size:"",
      quantity:0,
      color:0
    })

    useEffect(()=>{
      axios.get('http://localhost:8081/api/v1/products/'+id)
      .then(res=> 
        console.log(res.data.color.color)
      )});
    useEffect(()=>{
      axios.get('http://localhost:8081/api/v1/products/'+id)
      .then(res=> 
        setValues({...values, 
          productName : res.data.productName, 
          price : res.data.price,
          material : res.data.material,
          size : res.data.size,
          quantity : res.data.quantity,
          color : res.data.color.colorId
        })
      )
      .catch(err=> console.log(err))
      
    },[])

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

    return(
        <div className='container'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Add Item</h2>
            <form onSubmit={onSubmit}>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>Item Name</label>
                <input type='{text}' className='form-control' placeholder='Enter Item Name' name='name' value={values.productName} onChange={e=> setValues({...values, productName : e.target.value})}></input>

                <label htmlFor='Price' className='form-label'>Item Price</label>
                <input type='number' className='form-control' placeholder='Enter Item Price' name='price' value={values.price} onChange={e=> setValues({...values, price : e.target.value})}></input>

                <label htmlFor='Material' className='form-label'>Item Material</label>
                <input type='{text}' className='form-control' placeholder='Enter Material' name='material' value={values.material} onChange={e=> setValues({...values, material : e.target.value})}></input>

                <label htmlFor='Size' className='form-label'>Item Size</label>
                <select  className='form-control' placeholder='Enter Item Size' name='size' value={values.size} onChange={e=> setValues({...values, size : e.target.value})}>
                    <option value='KIDS'>KIDS</option>
                    <option value='S'>S</option>
                    <option value='M'>M</option>
                    <option value='L'>L</option>
                </select>

                <label htmlFor='Color' className='form-label'>Item Color</label>
                {/* TODO */}
                <select className='form-control' placeholder='Select Item Color' name='colorId' value={values.color.color} onChange={e=> setValues({...values, color : e.target.value})} >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
        </select>
    
                <label htmlFor='Quantity' className='form-label'>Item Quantity</label>
                <input type='number' className='form-control' placeholder='Enter Item Quantity' name='quantity'  value={values.quantity} onChange={e=> setValues({...values, quantity : e.target.value})}></input>
            </div>

            <button type='submit' className='btn btn-outline-primary'>Update</button>
            <button type='submit' className='btn btn-outline-danger mx-2'>Cancel</button>
            </form>
        </div>
        
    </div>
    )
}

export default UpdateProduct