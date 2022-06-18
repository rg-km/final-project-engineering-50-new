import React from "react";
import "../Styles/IISMA.css";
import relation from "../Assets/iisma-relation.png";
import tips from "../Assets/iisma-tips.png";
import brain from "../Assets/iisma-brain.png";
import discuss from "../Assets/iisma-discuss.png";

const IISMA = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5 mb-4">
        <div className="col-lg col-md iisma-panel">
          <div className="row">
            <div className="col-lg-4 col-md-6 mt-3">
              <h2 className="text-head">IISMA-CAMP</h2>
              <div className="text-center">
                <img src={require("../Assets/iisma-2.png")} class="image3" alt="iisma" />
              </div>
              <p className="text-body">
                Ada yang tau program IISMA ?? Masih bingung ingin memasuki univ apa ?? nah kalian dateng diwaktu yang tepat kenapaa?? karena aimprove sedang menjalankan project baru bernama IISMA Camp dengan kuota terbatas, disini kalian
                akan mendapatkan berbagai pengalaman IISMA di beberapa negara langsung dari peserta IISMA sebelumnya dan tentu saja dengan tips and triknya loooohh. <br />
                <b> Ayooo buruan daftar sebelum kehabisan!!!!.</b>
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-center fw-bold mt-4">BENEFITS</h2>

      <div className="row justify-content-center my-3">
        <div className="col-12 col-lg-6 col-md-6 mt-5">
          <div className="card mx-auto shadow relation">
            <div className="text-center">
              <img src={relation} className="card-img-top" alt="relation" />
            </div>
            <div className="card-body ">
              <p className="card-text tulisan text-center">
                <b>Memiliki relasi dgn lulusan IISMA</b>
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-6 mt-5">
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
        <div className="col-12 col-lg-6 col-md-6 mt-5">
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
        <div className="col-12 col-lg-6 col-md-6 mt-5">
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
    </div>
  );
};

export default IISMA;
