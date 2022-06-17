import React from "react";
import { Link } from 'react-router-dom';
import "../Styles/Home.css";
import Image from "../Assets/IISMA.png";
import Image1 from "../Assets/FYP.png";
import Image2 from "../Assets/Company.png";
import Image3 from "../Assets/Analythics.png";
import Bima from "../Assets/Bima.jpeg";
import Al from "../Assets/Al.jpeg";
import Enggar from "../Assets/Enggar.jpeg";

function Home() {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5 mb-4">
        <div className="col-lg info-panel">
          <div className="row">
            <div className="col-lg">
              <h1 className="text-head">Tumbuh Bersama AIMPROVE</h1>
              <img src={Image3} class="image3" alt="Analythics" />
              <p className="text-body">
                Mari kita bentuk masa depan pembelajaran <br /> Bantu orang-orang di seluruh dunia memberdayakan <br /> diri mereka sendiri melalui pengetahuan.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-center fw-bold mt-4">OUR PRODUCT</h2>

      <div className="row2 row justify-content-center">
        <div className="col-lg our-panel shadow mb-4">
          <div className="row">
            <div className="col-lg">
              <Link to="/IISMA"><img src={Image} class="rounded float-start" alt="IISMA" /></Link>
            </div>
            <div className="col-lg">
              <Link to="/fyp"><img src={Image1} class="rounded" alt="FYP" /></Link>
            </div>
            <div className="col-lg">
              <Link to="/COMPANYcamp"><img src={Image2} class="rounded float" alt="Company" /></Link>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-center fw-bold mt-4">TESTIMONI</h2>

      <div className="row3 row justify-content-center">
        <div className="col-lg testi-panel">
          <div className="row">
            <div className="col-lg">
              <div class="card shadow mb-5 bima">
                <img src={Bima} class="card-img-top" alt="Bima" />
                <div class="card-body">
                  <p class="card-text text-center">"Pertukaran pelajar di UL (University Of Limerick) ini sangat life changing karena mendapatkan banyak wawasan, budaya, membuka pandangan dan pikiran serta mendapat banyak teman-teman baru. I wouldn't trade anything for this experience"</p>
                </div>
              </div>
            </div>
            <div className="col-lg">
              <div class="card shadow mb-5 Al">
                <img src={Al} class="card-img-top" alt="Al" />
                <div class="card-body">
                  <p class="card-text text-center">“Seneng banget dapet pengalaman baru pastinya, ketemu orang-orang hebat yang punya passion yang sama. Kegiatan MSIB ini membantu banget dalam menunjang kemampuan individu dan menerapkan secara nyata. ”</p>
                </div>
              </div>
            </div>
            <div className="col-lg">
              <div class="card shadow mb-5 Enggar">
                <img src={Enggar} class="card-img-top" alt="Enggar" />
                <div class="card-body">
                  <p class="card-text text-center">“(Manfaat yang saya dapatkan selama IISMA, red) adalah knowledge, experience, and network. Seperti yang dijelaskan oleh Zalfa dan Yosua tadi. Kalau knowledge ini kita belajar mata kuliah interdisipliner ini kapan lagi begitu. Dan semuanya ini, ketiga manfaat ini, bisa dipakai untuk membangun prospek karier,”</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
