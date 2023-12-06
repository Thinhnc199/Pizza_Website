import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import '../styles/dashboard.css';

const URL = 'https://64acf320b470006a5ec50e25.mockapi.io/users';

const Dashboard = () => {

    const [staffs, setStaffs] = useState([]);

    const getListStaff = async () => {
        const res = await axios.get(`${URL}`);
        if (res.status === 200) {
            setStaffs(res.data);
        }
    }

    useEffect(() => {
        getListStaff();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm(`Are you sure that you want to delete a products with ID: ${id}`)) {
            const res = await axios.delete(`${URL}/${id}`);
            if (res.status === 200) {
                getListStaff();
                toast.success("Deleted Successfully ~");
            } else {
                toast.error("Delete: Error!");
            }
        }
    }

    return (
        <div className="staff-table">
            <div className="btn-add">
                <Link to={'/add/'}>
                    <button className='add-staff-btn'>ADD NEW PIZZA</button>
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {staffs && staffs.map((staff) => (
                        <tr key={staff.id}>
                            <td>{staff.id}</td>
                            <td>{staff.name}</td>
                            <td><img src={staff.image} alt={staff.id} /></td>
                            <td>{staff.price}</td>
                            <td>{staff.description}</td>
                            <td>
                                <Link to={`/update/${staff.id}`}><button>Edit</button></Link>
                                <button onClick={() => handleDelete(staff.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;