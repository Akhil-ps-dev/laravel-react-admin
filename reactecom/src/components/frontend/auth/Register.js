import React, { useState } from 'react'
import Navbars from '../../../layouts/frontend/Navbars'
import axios from 'axios';

export default function Register() {

    const [registerInput, setRegister] = useState({

        name: '',
        email: '',
        password: '',
    });

    const handleInput = (e) => {
        e.presist();
        setRegister({ ...registerInput, [e.target.name]: e.target.value });
    }

    const registerSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
        }

axios.post('http://127.0.0.1:8000/api/register').then(res=>{

});

    }


    return (
        <div>
            <Navbars />
            <div className='container py-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4>Register</h4>
                            </div>
                            <div className='card-body'>

                                <form onSubmit={registerSubmit}>
                                    <div className='form-group mb-3'>
                                        <label >Full Name</label>
                                        <input className='form-control' value={registerInput.name} onChange={handleInput} type="" name="name" />

                                    </div>
                                    <div className='form-group mb-3'>
                                        <label >Email </label>
                                        <input type="" value={registerInput.email} onChange={handleInput} className='form-control' name="email" />

                                    </div>
                                    <div className='form-group mb-3'>
                                        <label >Password </label>
                                        <input type="" value={registerInput.password} onChange={handleInput} className='form-control' name="password" />

                                    </div>

                                    <div className='form-group mb-3'>
                                        <button type="submit" className='btn btn-primary'>Register</button>
                                    </div>


                                </form>

                            </div>

                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}
