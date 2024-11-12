import React, {useState, useEffect } from 'react';
import {Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function UploadProdImg(){

    let navigate=useNavigate();

    const {id} = useParams(); 


    const formData = new FormData();

    const onInputChange=(event)=>{
        const file = event.target.files[0];
        //only handles png uploads
        const renamedFile = new File([file], `${id}-img.png`);

        formData.append("file",renamedFile);
    };

    const onSubmit=async(e)=>{
        
        axios.post(`http://localhost:8081/api/v1/products/uploadImg/${id}`,formData,{
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        console.log('Product image uploaded');
        navigate("/")
    }

    return(
        <div className='container'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Upload Product Image</h2>
                <form onSubmit={onSubmit}>
                <div className='mb-3'>
                    <label htmlFor='ColorName' className='form-label'>Image</label>
                    <input type="file" id="myFile" name="filename" className='form-control'  onChange={(event)=>onInputChange(event)}></input>
    
                </div>
    
                <button type='submit' className='btn btn-outline-primary'>Submit</button>
                <Link className='btn btn-outline-danger mx-2' to={`/`}>Cancel</Link>
                </form>
            </div>
        </div>
    )
}