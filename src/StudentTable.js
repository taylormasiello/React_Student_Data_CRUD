import { Link } from "react-router-dom";

export default function StudentTable(){
    return(
        <div className="container">
            <h2>Student Records</h2>
            <div className="table-container">
                <Link to="/student/create" class="btn btn-add">Add New Student</Link>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Location</th>
                            <th>Email Address</th>
                            <th>Phone Number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Taylor Masiello</td>
                            <td>Clearwater, FL</td>
                            <td>fakeemail@gmail.com</td>
                            <td>123-456-7890</td>
                            <td>
                                <a href="" className="btn btn-info">View</a>
                                <a href="" className="btn btn-primary">Edit</a>
                                <a href="" className="btn btn-danger">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}