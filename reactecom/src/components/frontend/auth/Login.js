import React from 'react'
import Navbars from '../../../layouts/frontend/Navbars'

export default function Login() {
  return (
    <div>
<Navbars/>
<div className='container py-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4>Login</h4>
                            </div>
                                <div className='card-body'>
                                    
                                <form>
                                 
                                    <div className='form-group mb-3'>
                                        <label >Email </label>
                                        <input type="" className='form-control' name="email" value=""/>
                                        
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label >Password </label>
                                        <input type="" className='form-control' name="password" value=""/>
                                        
                                    </div>
                                
                                    <div className='form-group mb-3 '>
                                        <button type="submit" className='btn btn-primary'>Login</button>
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
