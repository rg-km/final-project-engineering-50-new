import React, { useState} from "react";
import {useNavigate} from "react-router-dom";
import "../Styles/IISMA.css";
import relation from "../Assets/iisma-relation.png";
import tips from "../Assets/iisma-tips.png";
import brain from "../Assets/iisma-brain.png";
import discuss from "../Assets/iisma-discuss.png";
import registrasi from "../Assets/registrasi.png";
import administrasi from "../Assets/administrasi.png";
import announcement1 from "../Assets/announcement1.png";
import wawancara from "../Assets/wawancara.png";
import announcement2 from "../Assets/announcement2.png";
import Onboarding from "../Assets/Onboarding.png";
import camp from "../Assets/camp.png";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import useStore from "../../useStore";

const IISMA = () => {
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
      motivasi: motivasi,
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
      axios.post('http://localhost:8080/api/aimprove', data)
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
      {
        error && (
            <div className='alert alert-danger'>
                <p>{error}</p>
            </div>
        )
      }
      <div className="row justify-content-center mt-4 mb-4">
        <div className="col-lg col-md iisma-panel">
          <div className="row">
            <div className="col-lg-5 col-md-12 mt-3">
              <h2 className="text-head iism">IISMA-CAMP</h2>
              <div className="text-center">
                <img src={require("../Assets/iisma-2.png")} class="image3" alt="iisma" />
              </div>
            </div>
            <div className="col-lg-7 col-md-12 mt-3 text-center">
              <p className="text-white body">
                Ada yang tau program IISMA ?? Masih bingung ingin memasuki univ apa ?? nah kalian dateng diwaktu yang tepat kenapaa?? karena aimprove sedang menjalankan project baru bernama IISMA Camp dengan kuota terbatas, disini kalian
                akan mendapatkan berbagai pengalaman IISMA di beberapa negara langsung dari peserta IISMA sebelumnya dan tentu saja dengan tips and triknya loooohh. <br />
                <b> Ayooo buruan daftar sebelum kehabisan!!!!.</b>
              </p>
                <div className="tombol-group">
                    <button class="btn btn-dark btn-lg " onClick={handleShow}>Daftar</button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Form Daftar IISMA</Modal.Title>
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

      <h2 className="text-center fw-bold mt-5">BENEFITS</h2>

      <div className="row justify-content-center my-3">
        <div className="col-12 col-lg-6 col-md-6 mt-4">
          <div className="card mx-auto shadow relation">
            <div className="text-center">
              <img src={relation} className="card-img-top" alt="relation" />
            </div>
            <div className="card-body ">
              <p className="card-text tulisan text-center">
                <b>Memiliki relasi dengan lulusan IISMA lainnya</b>
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-6 mt-4">
          <div className="card mx-auto shadow tips">
            <div className="text-center">
              <img src={tips} className="card-img-top" alt="tips" />
            </div>
            <div className="card-body">
              <p className="card-text tulisan text-center">
                <b>Mendapatkan tips dan trick lolos seleksi IISMA</b>
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-6 mt-4">
          <div className="card mx-auto shadow brain">
            <div className="text-center">
              <img src={brain} className="card-img-top" alt="brain" />
            </div>
            <div className="card-body">
              <p className="card-text tulisan text-center">
                <b>Mendapatkan kesiapan psikologis sebelum mengikuti IISMA</b>
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-6 mt-4">
          <div className="card mx-auto shadow discuss">
            <div className="text-center">
              <img src={discuss} className="card-img-top" alt="discuss" />
            </div>
            <div className="card-body">
              <p className="card-text tulisan text-center">
                <b>Berkesempatan untuk mendapat exlusive mockup interview IISMA</b>
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-center fw-bold mt-5">OUR TIMELINE</h2>

      <div className="row justify-content-center my-3">
        <div className="col-12 col-lg-4 col-md-6 mt-5 ">
          <div className="text-center">
            <img src={registrasi} className="image4 img-top" alt="tregistrasi" />
          </div>
          <div className="text-head text-center">
            <h2 className="rata-text">Registrasi</h2>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-md-6 mt-5">
          <div className="text-center">
            <img src={administrasi} className="image4 img-top" alt="tregistrasi" />
          </div>
          <div className="text-head text-center">
            <h2 className="rata-text">Seleksi Administrasi</h2>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-md-6 mt-5">
          <div className="text-center">
            <img src={announcement1} className="image4 img-top" alt="tregistrasi" />
          </div>
          <div className="text-head text-center">
            <h2 className="rata-text">Pengumuman Administrasi</h2>
          </div>

        </div>
        <div className="col-12 col-lg-4 col-md-6 mt-5">
          <div className="text-center">
            <img src={wawancara} className="image4 img-top" alt="tregistrasi" />
          </div>
          <div className="text-head text-center">
            <h2 className="rata-text">Wawancara</h2>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-md-6 mt-5">
          <div className="text-center">
            <img src={announcement2} className="image4 img-top" alt="tregistrasi" />
          </div>
          <div className="text-head text-center">
            <h2 className="rata-text">Pengumuman Akhir</h2>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-md-6 mt-5">
          <div className="text-center">
            <img src={Onboarding} className="image4 img-top" alt="tregistrasi" />
          </div>
          <div className="text-head text-center">
            <h2 className="rata-text">On Boarding</h2>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-md-6 mt-5">
          <div className="text-center">
            <img src={camp} className="image4 img-top" alt="tregistrasi" />
          </div>
          <div className="text-head text-center">
            <h2 className="rata-text">IISMA-CAMP Progam Batch 1</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IISMA;
