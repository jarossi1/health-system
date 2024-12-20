import { useEffect, useState } from 'react';
import axios, {Axios} from 'axios';
import {Link} from "react-router-dom";

const updateUser = async (id, name, email, department) => {
    try {
        const response = await axios.put(`http://localhost:5000/api/users/${id}`, {
            name,
            email,
            department
        });
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
}


function UserTable(){
    const [users, setUsers] = useState([]);
    const [id, setId] = useState('');  // <-- Make sure this line exists at the beginning
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');

useEffect(() => {
    axios.get('http://localhost:5000/api/users')
        .then(response => setUsers(response.data))
        .catch(error => console.error('Error fetching users:', error));
}, []);

const handleUpdate = async () => {
    if (id && name && email && department) {
        try {
            const updatedUser = await updateUser(id, name, email, department);
            setUsers(users.map(user => user.idhealth_user === id ? updatedUser : user));
            alert('User updated successfully');
        } catch (error) {
            alert('Error updating user');
            console.error('Error updating user:', error);
        }
    } else {
        alert('Please fill in all fields');
    }
};

    return (
        <div className="table-container">
            <h2>User Information Table</h2>
            <Link to="/NewRecord" className="formButton">
                Add New Record
            </Link>
            <table className="userTable">
                <thead>
                <tr key="header">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.idhealth_user}>
                        <td>{user.idhealth_user}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.department}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <table>
                <thead>
                <tr>
                    <th>At Employee ID</th>
                    <th>Update Name</th>
                    <th>Update Email</th>
                    <th>Update Department</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <input
                            type="text"
                            placeholder="ID"
                            value={id}
                            onChange={(event) => setId(event.target.value)}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            placeholder="Department"
                            value={department}
                            onChange={(event) => setDepartment(event.target.value)}
                        />
                    </td>
                    <td>
                        <button onClick={handleUpdate}>Update</button>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
    );
}

export default UserTable;