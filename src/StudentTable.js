export default function StudentTable(){
    return(
        <div className="container">
            <h2>Student Records</h2>
            <div className="table-container">
                <a href="#" class="btn btn-add">Add New Student</a>
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
                                <a href="" className="btn">View</a>
                                <a href="" className="btn">Edit</a>
                                <a href="" className="btn">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}