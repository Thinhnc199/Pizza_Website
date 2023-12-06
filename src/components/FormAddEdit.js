import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../styles/formAddEdit.css';

const URL = 'https://64acf320b470006a5ec50e25.mockapi.io/users';

const initialState = {
    name: '',
    image: '',
    price: '',
    description: '',

}

const error_init = {
    name_err: '',
    image_err: '',
    price_err: '',
    description_err: '',
}

const FormAddEdit = () => {

    const { id } = useParams();
    const navigate = useHistory();

    const [state, setState] = useState(initialState);
    const { name, image, price, description } = state;
    const [errors, setErrors] = useState(error_init);

    // const getOneStaff = async (id) => {
    //     const res = await axios.get(`${URL}/${id}`);
    //     if (res.status === 200) {
    //         setState(res.data);
    //     }
    // }

    const getOneStaff = async (id) => {
        try {
            const res = await axios.get(`${URL}/${id}`);
            console.log("Response from getOneStaff:", res);
            if (res.status === 200) {
                setState(res.data);
            }
        } catch (error) {
            console.error("Error fetching staff:", error);
            if (error.response) {
                console.error("Detailed error response:", error.response.data);
            }
        }
    }

    useEffect(() => {
        if (id) getOneStaff(id);
    }, [id]);

    const updateStaff = async (staffID, data) => {
        const res = await axios.put(`${URL}/${staffID}`, data);
        if (res.status === 200) {
            toast.success(`Updated Pizza with ID: ${staffID} successfully ~`);
            navigate('/dashboard');
        }
    }

    const addNewStaff = async (data) => {
        try {
            const res = await axios.post(`${URL}`, data);
            if (res.status === 200 || res.status === 201) {
                toast.success("New Pizza has been added successfully ~");
                navigate('/dashboard');
            } else {
                toast.error("Unexpected response status: " + res.status);
            }
        } catch (error) {
            console.error("Error adding new staff:", error);
            if (error.response) {
                console.error("Detailed error response:", error.response.data);
            }
            toast.error("An error occurred while processing your request.");
        }
    }


    // validate
    const validateForm = () => {
        let isValid = true;
        let errors = { ...error_init };

        if (name.trim() === '' || name.length < 2) {
            errors.name_err = 'Name is Required';
            if (name.length < 2) {
                errors.name_err = 'Name must be more than 2 words';
            }
            isValid = false;
        }

        if (image.trim() === '') {
            errors.image_err = 'Image is required';
            isValid = false;
        }

        if (isNaN(price) || parseInt(price) < 1 || price === '') {
            errors.price_err = 'price must be a positive number and more than 0';
            isValid = false;
        }

        if (description.trim() === '') {
            errors.description_err = 'Description is required';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            if (id) updateStaff(id, state);
            else addNewStaff(state);
        } else {
            toast.error("Some info is invalid ~ Pls check again");
        }
    }

    const handleInputChange = (event) => {
        let { name, value } = event.target;
        setState((state) => ({ ...state, [name]: value }));
    }

    return (
        <div className='container'>
            <div className="form">
                <h2>{id ? "Update Form" : "Add New Pizza"}</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input type="text" name='name' value={state.name} onChange={handleInputChange} />
                        {errors.name_err && <span className='error'>{errors.name_err}</span>}
                    </div>
                    <div>
                        <label htmlFor="image">Image: </label>
                        <input type="text" name='image' value={state.image} onChange={handleInputChange} />
                        {errors.image_err && <span className='error'>{errors.image_err}</span>}
                    </div>
                    <div>
                        <label htmlFor="Price">Price: </label>
                        <input type="number" name='price' value={state.price} onChange={handleInputChange} />
                        {errors.price_err && <span className='error'>{errors.price_err}</span>}
                    </div>
                    <div>
                        <label htmlFor="Description">Description: </label>
                        <input type="text" name='description' value={state.description} onChange={handleInputChange} />
                        {errors.description_err && <span className='error'>{errors.description_err}</span>}
                    </div>


                    <button type='submit' className='form-button'>{id ? "Update" : "Submit"}</button>
                </form>
            </div>
        </div>
    );
};

export default FormAddEdit;