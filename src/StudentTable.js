import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function StudentTable(){
    const [students, setStudents] = useState("");
    const navigate=useNavigate();

    const DisplayDetails=(id) => {
        navigate("/student/view/"+id);
    }
    const EditDetails=(id) => {
        navigate("/student/edit/"+id);
    }

    const RemoveDetails=(id) => {
        if(window.confirm("Are you sure you want to Permanently Delete this Student Data?")){
            fetch("http://localhost:8000/students/"+id, {
                method:'DELETE'
            })
            .then((res)=>{
                alert("Deleted Student Data successfully!");
                window.location.reload();
            })
            .catch((err)=>console.log(err.message))
        }
    }

    useEffect(()=>{
        fetch("http://localhost:8000/students")
        .then((res)=>res.json())
        .then((data)=>setStudents(data))
        .catch((err)=>console.log(err.message))
    },[])

    return(
        <div className="container">
            <h2>Student Records</h2>
            <div className="table-container">
                <Link to="/student/create" className="btn btn-add">Add New Student</Link>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Location</th>
                            <th>Email Address</th>
                            <th>Phone Number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students && students.map((item)=>(
                            <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.location}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>
                                <button onClick={()=>DisplayDetails(item.id)} className="btn btn-info">View</button>
                                <button onClick={()=>EditDetails(item.id)} className="btn btn-primary">Edit</button>
                                <button onClick={()=>RemoveDetails(item.id)} className="btn btn-danger">Delete</button>
                            </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}