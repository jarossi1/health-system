import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function NewRecord() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        department: ""
    });

    const handleChange = (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const navigate = useNavigate();
    const handleClick = async e => {
        e.preventDefault();
        try {

            await axios.post("http://localhost:5000/api/users", user);
            navigate("/UserTable");
        } catch (err) {
            console.log(err);
        }
    }
    console.log(user);
    return (
        <div className='form'>
            <h1>Add New Record</h1>
            <input type="text" placeholder="Name" onChange={handleChange} name="name" />
            <input type="text" placeholder="Email" onChange={handleChange} name='email' />
            <input type="text" placeholder="Department" onChange={handleChange} name='department' />
            <button className="formButton" onClick={handleClick}>Add Record</button>

        </div>

    );
}

export default NewRecord;