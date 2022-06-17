import React, {useState} from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/aimprove.png';
import {Form} from 'react-bootstrap';
import axios from 'axios'


const RegisterPage = () => {
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[alert,setAlert] = useState('');
    const[error,setError] = useState('');

    const onChangeEmail =(e) =>{
        const value = e.target.value
        setEmail(value)
        setError('')
    }
    const onChangePassword = (e) =>{
        const value = e.target.value
        setPassword(value)
        setError('')
    }
    const clickRegis = () =>{
        const data ={
            email: email,
            password: password
        }
        // console.log(data)
        axios.post('http://localhost:3001/register', data)
        .then(result =>{
            if(result){
                if(result.data){
                    setEmail('')
                    setPassword('')
                    setAlert(result.data.message)
                    setTimeout(() => {
                        setAlert('')
                    }, 3000)
                }
            }

            // console.log(result)

        })
        .catch(e =>{
            setError(e.response.data.message)
        })
    }
    

    return (
        <>
            <div className="maincontainer">
                <div className="container-fluid">
                    <div className="row no-gutter"> 
                        <div className="col-md-6 bg-light">
                            <img src={logo} width={200} height={150}>
                            </img>
                            <div className="login d-flex align-items-center py-5">
                                <div className="container">
                                    {
                                        error && (
                                            <div className='alert alert-danger'>
                                                <p>{error}</p>
                                            </div>
                                        )
                                    }
                                    {
                                        alert && (
                                            <div className='alert alert-primary'>
                                                <p>{alert}</p>
                                            </div>
                                        )
                                    }
                                    
                                    <div className="row">
                                        <div className="col-lg-10 col-xl-7 mx-auto">
                                            <h3 className="display-4">SIGN UP</h3>
                                            <p className="text-muted mb-4">Register to login to our application</p>
                                            <Form>
                                                <div className="mb-3">
                                                    <input id="inputEmail" type="email" placeholder="Email address" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4 form-bg" value={email} onChange={onChangeEmail} />
                                                </div>
                                                <div className="mb-3">
                                                    <input id="inputPassword" type="password" placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary form-bg" value={password} onChange={onChangePassword}/>
                                                </div>
                                                <div className="text-center d-flex justify-content-between mt-4">
                                                    
                                                    <p>Already have an account? Please <Link to="/signin">Sign In</Link>
                                                        {/* <a href="/signin" class="font-italic text-muted"> 
                                                        <u>Sign In</u></a> */}
                                                    </p>
                                                </div>
                                                <div className="d-grid gap-2 mt-2">
                                                <button type="submit"  className="btn btn-ungu btn-block text-uppercase mb-2 shadow-sm" onClick={clickRegis}>Sign Up</button>
                                                </div>
                                                
                                                
                                            </Form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6 d-none d-md-flex bg-image">
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterPage;