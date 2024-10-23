import React, {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddColor() {
    let navigate=useNavigate();

    const [color_Name,setColor]=useState('');

    // const colorName=color;

    const onInputChange=(event)=>{
        setColor(event.target.value);
    };


    const onSubmit=async(e)=>{
        e.preventDefault();
        try{
        await axios.post(`http://localhost:8081/api/v1/colors/${color_Name}`);
        navigate("/")
        }catch(error){
            console.log(error)
        }
    }

    const [colors, setColors] = useState([])

    useEffect(()=> {
        loadColors();
    },[]);

    const loadColors=async()=>{
        const result=await axios.get("http://localhost:8081/api/v1/colors")
        setColors(result.data);
    }

    return (
        <div className='container'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Add Color</h2>
                <form onSubmit={onSubmit}>
                <div className='mb-3'>
                    <label htmlFor='ColorName' className='form-label'>Color</label>
                    <input type='{text}' className='form-control' placeholder='Enter Color Name' name='colorName' 
                    value= {color_Name}
                    onChange={(event)=>onInputChange(event)}
                    ></input>
    
                </div>
    
                <button type='submit' className='btn btn-outline-primary'>Submit</button>
                <button type='submit' className='btn btn-outline-danger mx-2'>Cancel</button>
                </form>
            </div>
            
        <div className='py-4'>
        <table class="table table-hover border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Color</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        colors.map((color,index)=>(
        <tr>
        <th scope="row" key={index}>{index+1}</th>
        <td>{color.color}</td>
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