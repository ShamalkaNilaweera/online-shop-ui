import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function ViewProduct() {
    let navigate=useNavigate();

    const [product,ViewProduct]=useState({
        name:"",
        price:""
    })
}