import React, { useState} from "react";
import {useNavigate} from "react-router-dom";
import "../Styles/FYP.css";
import Image1 from "../Assets/FYP.png";
import Image2 from "../Assets/activities-fyp.jpg";
import Image3 from "../Assets/module-fyp.jpg";
import Image4 from "../Assets/insight-fyp.jpg";
import Image5 from "../Assets/career-fyp.jpg";
import Image6 from "../Assets/networking-fyp.jpg";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import useStore from "../../useStore";

const FYP = () => {
    const user = useStore((state) => state.user);
  const [show, setShow] = useState(false);
  const [motivasi, setMotivasi] = useState('');
  const [errorMotivasi, setErrorMotivasi] = useState('');
  const [error, setError] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const onChangeMotivasi = (e) => {
    const value = e.target.value
    setMotivasi(value)
    if(!value){
      setErrorMotivasi('Motivasi tidak boleh kosong!')
    } else {
      setErrorMotivasi('')
    }
  }
  const submitDaftar = (e) =>{
    const data ={
      motivasi:motivasi,
        name: user.name,
        phone: user.phone,
        ttl: user.ttl,
        address: user.address,
        education: user.education,
    }
    //console.log(data)
    if(!motivasi){
      setError('Motivasi tidak boleh kosong!')
    } else{
      e.preventDefault()
      navigate('/cart');
      axios.post('http://localhost:3001/IISMA', data)
      .then(result =>{
        if(result){
           localStorage.setItem('token', result.data.token)
         }

        //console.log(result)
      })
       .catch(e =>{
         setError(e.response.data.message)
       })
    }

  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-10 mb-4">
        <div className="col-lg col-md fyp-panel">
          <div className='row'>
            <div className='col-lg-5 col-md-12'>
              <h1 className='text-head-fyp'>#FYP (Find Your Path)</h1>
              <img src={Image1} class="fyp-img" alt="FYP" />
            </div>
            <div className='text-fyp col-lg-7 col-md-12 text-center'>
            Kalian pernah gak sih mengalami kebingungan dalam berkembang?<br/>
              Diumur yang sudah tidak muda lagi kita semua pasti pernah dihadapi dengan situasi yang sulit dalam memilih passion yang biasa kita kenal dengan <i>quarter life crisis</i>.
              <br/>Nah! Bagi kalian yang masih bingung dan belum menemukan solusinya, AIMPROVE menawarkan solusi berupa konsultasi career dalam project <i>Find Your Path</i>,
              disini kalian akan mendapatkan banyak sekali informasi seperti magang dimana, organisasi apa yang harus diikuti, seminar apa yang bisa jadi bekal bagus buat kalian kedepannya,
              dan masih banyak lagi yang bisa didapetin untuk mencari tahu awal langkah kita loh.<br/>
              <b>Ayo segera daftarkan diri kamu !!</b>

              <div className="klik-regist-fyp">
                      <button class="btn btn-dark btn-lg " onClick={handleShow}>Daftar</button>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Form Daftar FYP</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <Form.Label>Motivasi</Form.Label>
                            <Form.Control as="textarea" value={motivasi} onChange={onChangeMotivasi} rows={3} />
                            {
                              errorMotivasi && (
                                <p
                                className="text-danger">{errorMotivasi}</p>
                              )
                            }
                          </Form.Group>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                          Batal
                        </Button>
                          <Button variant="primary" onClick={submitDaftar}>
                            Daftar
                          </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>

            </div>

          </div>
        </div>
      </div>

      <div className='row'>
        <h2 className='text-head-act'>Activities</h2>
          <div className='text-body-act col-lg-5 col-md-12'>
            Webinars with Experts<br/> One on Three Mentorship<br/> Sharing and Consultation Career
          </div>
          <div className='col-lg-5 col-md-12 mt-4'>
            <img src={Image2} class="act-img" alt="FYP" />
          </div>
      </div>

      <div className="row justify-content-center my-3">
              <h2 className="text-head-act text-center mt-4">What We Offer</h2>
            <div className="col-12 col-lg-6 col-md-6 mt-5">
              <div className="card-fyp mx-auto shadow">
                <div className="card-body ">
                    <img src={Image3} className="offer-img text-center card-img" alt="module" />
                    <p className="card-text-fyp text-center">
                    <b>Exclusive Modules</b>
                    </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 col-md-6 mt-5">
              <div className="card-fyp mx-auto shadow">
                <div className="card-body ">
                    <img src={Image4} className="offer-img text-center card-img" alt="insight" />
                    <p className="card-text-fyp text-center">
                    <b>Exclusive Insights</b>
                    </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 col-md-6 mt-5">
              <div className="card-fyp mx-auto shadow">
                <div className="card-body ">
                    <img src={Image5} className="offer-img text-center card-img" alt="career" />
                    <p className="card-text-fyp text-center">
                    <b>Career Knowledge</b>
                    </p>
                  </div>
                </div>
            </div>

            <div className="col-12 col-lg-6 col-md-6 mt-5">
              <div className="card-fyp mx-auto shadow">
                <div className="card-body ">
                    <img src={Image6} className="offer-img text-center card-img" alt="networking" />
                    <p className="card-text-fyp text-center">
                    <b>Networking</b>
                    </p>
                </div>
              </div>
            </div>

          </div>


    </div>

  )
}

export default FYP
