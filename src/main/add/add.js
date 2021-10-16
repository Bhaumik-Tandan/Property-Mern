import {React,useState} from 'react'
import {useForm}  from "react-hook-form";
import { restCon } from '../../restCon';
import Loading from '../../loading/main';
import "./add.css";

function Add() {
  const { register, handleSubmit} = useForm();  
  const [status,setStatus]=useState();
  const [loading,setLoading]=useState(false);

  async function onSubmit(e)
  {
    setLoading(true);
    const r=await restCon(e,"POST","property");
    if(r.status==400)
    setStatus("Property Id already exists");
    else
    setStatus("Property added");
    setLoading(false);
  }


    return (
        <div>
          {loading? <Loading text="Submitting"/>:
           <center> <h1>Add Property</h1>
           <form onSubmit={handleSubmit(onSubmit)}>
             <label>Property ID</label><br/>
             <input type="number" {...register("productId", { required: true })}/><br/>

             <label>Name</label><br/>
             <input {...register("name", { required: true })} /><br/>
             
             <label>Cost</label><br/>
             <input type="number" {...register("cost", { required: true })} placeholder="In $" /><br/>
              
             <label>Address</label><br/>
             <textarea rows="4" {...register("address", { required: true })} /><br/><br/>

             <label>City</label><br/>
             <input {...register("city", { required: true })} /><br/><br/>
             
             <input type="submit" /><br/>
           {status}
      </form></center>}
        </div>
    )
}
export default Add;
