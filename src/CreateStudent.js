import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CreateStudent(){
    const [id, setId]=useState("");
    const [name, setName]=useState("");
    const [location, setLocation]=useState("");
    const [email, setEmail]=useState("");
    const [phone, setPhone]=useState("");

    const [validationId, setValidationId]=useState(false);
    const [validationName, setValidationName]=useState(false);
    const [validationLocation, setValidationLocation]=useState(false);
    const [validationEmail, setValidationEmail]=useState(false);
    const [validationPhone, setValidationPhone]=useState(false);

    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const studentData={id, name, location, email, phone};
        //console.log(studentData);
        fetch("http://localhost:8000/students", {
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(studentData)
        })
        .then((res)=>{
            alert("Student Data saved successfully!");
            navigate("/");
        })
        .catch((err)=>console.log(err.message))
    }

    return(
        <div className="container">
            <h2>Add New Student</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">ID:</label>
                <input type="text" id="id" name="id" required value={id} onChange={e=>setId(e.target.value)} onFocus={()=>setValidationId(true)}/>
                {id.length!==3 && validationId &&<span className="errorMsg">Please Enter Your Correct Student ID</span>}

                <label htmlFor="name">First Name:</label>
                <input type="text" id="name" name="name" required value={name} onChange={e=>setName(e.target.value)} onFocus={()=>setValidationName(true)}/>
                {name.length===0 && validationName &&<span className="errorMsg">Please Enter Your First Name</span>}

                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location" required value={location} onChange={e=>setLocation(e.target.value)} onFocus={()=>setValidationLocation(true)}/>
                {location.length===0 && validationLocation &&<span className="errorMsg">Please Enter Your Location</span>}

                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" required value={email} onChange={e=>setEmail(e.target.value)} onFocus={()=>setValidationEmail(true)}/>
                {validationEmail && !email.includes('@') &&<span className="errorMsg">Please Enter Your Correct Email Address</span>}

                <label htmlFor="phone">Phone:</label>
                <input type="text" id="phone" name="phone" required value={phone} onChange={e=>setPhone(e.target.value)} onFocus={()=>setValidationPhone(true)}/>
                {phone.length<10 && validationPhone &&<span className="errorMsg">Please Enter Your Phone Number Including Area Code</span>}

                <div>
                    <button className="btn btn-save">Save</button>
                    <Link to="/" className="btn btn-back">Back</Link>
                </div>
            </form>
        </div>
    )
}