import { useState } from "react";
import { Link } from "react-router-dom";

export default function CreateStudent(){
    const [id, setId]=useState("");
    const [name, setName]=useState("");
    const [location, setLocation]=useState("");
    const [email, setEmail]=useState("");
    const [phone, setPhone]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log({id, name, location, email, phone});
        fetch("http://localhost:8000/students")
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err.message))
    }

    return(
        <div className="container">
            <h2>Add New Student</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">ID:</label>
                <input type="text" id="id" name="id" value={id} onChange={e=>setId(e.target.value)}/>

                <label htmlFor="name">First Name:</label>
                <input type="text" id="name" name="name" value={name} onChange={e=>setName(e.target.value)}/>

                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location" value={location} onChange={e=>setLocation(e.target.value)}/>

                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" value={email} onChange={e=>setEmail(e.target.value)}/>

                <label htmlFor="phone">Phone:</label>
                <input type="text" id="phone" name="phone" value={phone} onChange={e=>setPhone(e.target.value)}/>

                <div>
                    <button className="btn btn-save">Save</button>
                    <Link to="/" className="btn btn-back">Back</Link>
                </div>
            </form>
        </div>
    )
}