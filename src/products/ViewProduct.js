import React, {useState, useEffect} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ViewProduct() {
    let navigate=useNavigate();

    const {id} = useParams();

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


      return(
        <div className='container'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Add Item</h2>
            
            <div className='mb-3'>
                <label>Item Name : </label>
                <p>{values.productName}</p>

                <label>Item Price</label>
                <p>{values.price} </p>

                <label>Item Material</label>
                <p>{values.material} </p>

                <label>Item Size</label>
                <p>{values.size}</p>

                <label>Item Color</label>
                <p>{values.color.colorId} </p>
                {console.log(values.color.colorId)}
    
                <label>Item Quantity</label>
                <p>{values.quantity} </p>
            </div>

            <Link className='btn btn-outline-danger mx-2' to={`/`}>Back</Link>
            
        </div>
        
    </div>
    )
}
