import React, {useState} from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/aimprove.png';
import {Form} from 'react-bootstrap';
import axios from 'axios'


const RegisterPage = () => {
    const[nama_lengkap,setNama] = useState('');
    const[errorNama,setErrorNama] = useState('');
    const[nomor_telpon,setNoTelp] = useState('');
    const[errorNoTelp,setErrorNoTelp] = useState('');
    const[tempat_tanggal_lahir,setTTL] = useState('');
    const[errorTTL,setErrorTTL] = useState('');
    const[alamat,setAlamat] = useState('');
    const[errorAlamat,setErrorAlamat] = useState('');
    const[pendidikan,setPendidikan] = useState('');
    const[errorPendidikan,setErrorPendidikan] = useState('');
    const[email,setEmail] = useState('');
    const[errorEmail,setErrorEmail] = useState('');
    const[password,setPassword] = useState('');
    const[errorPassword,setErrorPassword] = useState('');
    const[alert,setAlert] = useState('');
    const[error,setError] = useState('');

    const onChangeNama =(e) =>{
        const value = e.target.value
        setNama(value)
        setError('')
        if(!value){
            setErrorNama('Nama tidak boleh kosong')
        } else{
            setErrorNama('')
        }
    }
    const onChangeNoTelp =(e) =>{
        const value = e.target.value
        setNoTelp(value)
        setError('')
        if(!value){
            setErrorNoTelp('Nomor telepon tidak boleh kosong')
        } else{
            setErrorNoTelp('')
        }
    }
    const onChangeTTL =(e) =>{
        const value = e.target.value
        setTTL(value)
        setError('')
        if(!value){
            setErrorTTL('Tanggal Lahir tidak boleh kosong')
        } else{
            setErrorTTL('')
        }
    }
    const onChangeAlamat =(e) =>{
        const value = e.target.value
        setAlamat(value)
        setError('')
        if(!value){
            setErrorAlamat('Alamat tidak boleh kosong')
        } else{
            setErrorAlamat('')
        }
    }
    const onChangePendidikan =(e) =>{
        const value = e.target.value
        setPendidikan(value)
        setError('')
        if(!value){
            setErrorPendidikan('Jurusan tidak boleh kosong')
        } else{
            setErrorPendidikan('')
        }
    }
    const onChangeEmail =(e) =>{
        const value = e.target.value
        setEmail(value)
        setError('')
        if(!value){
            setErrorEmail('Email tidak boleh kosong')
        } else{
            setErrorEmail('')
        }
    }
    const onChangePassword = (e) =>{
        const value = e.target.value
        setPassword(value)
        setError('')
        if(!value){
            setErrorPassword('Password tidak boleh kosong')
        } else{
            setErrorPassword('')
        }
    }
    const clickRegis = () =>{
        const data ={
            nama_lengkap: nama_lengkap,
            nomor_telpon: nomor_telpon,
            tempat_tanggal_lahir: tempat_tanggal_lahir,
            alamat: alamat,
            pendidikan: pendidikan,
            email: email,
            password: password
        }
        // console.log(data)
        if(!nama_lengkap){
            setError('Nama tidak boleh kosong!')
        } else if (!nomor_telpon) {
            setError('No telepon tidak boleh kosong!')
        }else if (!tempat_tanggal_lahir) {
            setError('Tanggal tidak boleh kosong!')
        }else if (!alamat) {
            setError('Alamat tidak boleh kosong!')
        } else if (!pendidikan){
            setError('Jurusan tidak boleh kosong!')
        } else if(!email){
            setError('Email tidak boleh kosong!')
        } else if (!password) {
            setError('Password tidak boleh kosong!')
        } else{
        axios.post('http://localhost:8080/api/register', data)
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
                                                    <input id="inputNama" type="nama_lengkap" placeholder="Nama Lengkap" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4 form-bg" value={nama_lengkap} onChange={onChangeNama} />
                                                    {
                                                        errorNama && (
                                                            <p className="text-danger">{errorNama}</p>
                                                        )
                                                    }
                                                </div>
                                                <div className="mb-3">
                                                    <input id="inputNoTelp" type="nomor_telpon" placeholder="No Telepon" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4 form-bg" value={nomor_telpon} onChange={onChangeNoTelp} />
                                                    {
                                                        errorNoTelp && (
                                                            <p className="text-danger">{errorNoTelp}</p>
                                                        )
                                                    }
                                                </div>
                                                <div className="mb-3">
                                                    <input id="inputTempatTanggalLahir" type="tempat_tanggal_lahir" placeholder="Tempat Tanggal Lahir" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4 form-bg" value={tempat_tanggal_lahir} onChange={onChangeTTL} />
                                                    {
                                                        errorTTL && (
                                                            <p className="text-danger">{errorTTL}</p>
                                                        )
                                                    }
                                                </div>
                                                <div className="mb-3">
                                                    <input id="inputAlamat" type="alamat" placeholder="Alamat" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4 form-bg" value={alamat} onChange={onChangeAlamat} />
                                                    {
                                                        errorAlamat && (
                                                            <p className="text-danger">{errorAlamat}</p>
                                                        )
                                                    }
                                                </div>
                                                <div className="mb-3">
                                                    <input id="inputPendidikan" type="pendidikan" placeholder="Pendidikan" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4 form-bg" value={pendidikan} onChange={onChangePendidikan} />
                                                    {
                                                        errorPendidikan && (
                                                            <p className="text-danger">{errorPendidikan}</p>
                                                        )
                                                    }
                                                </div>
                                                <div className="mb-3">
                                                    <input id="inputEmail" type="email" placeholder="Email address" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4 form-bg" value={email} onChange={onChangeEmail} />
                                                    {
                                                        errorEmail && (
                                                            <p className="text-danger">{errorEmail}</p>
                                                        )
                                                    }
                                                </div>
                                                <div className="mb-3">
                                                    <input id="inputPassword" type="password" placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary form-bg" value={password} onChange={onChangePassword}/>
                                                    {
                                                        errorPassword && (
                                                            <p className="text-danger">{errorPassword}</p>
                                                        )
                                                    }
                                                </div>
                                                <div className="text-center d-flex justify-content-between mt-4">
                                                    
                                                    <p>Already have an account? Please <Link to="/signin">Sign In</Link>
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