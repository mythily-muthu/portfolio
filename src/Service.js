import React from "react";
import "./Service.css";

function Service() {
  return (
    <div className="service component__space" id="Services">

      <div className="heading">
        <h1 className="heading">Skills</h1>
        {/* <p className="heading p__color">
          There are many variations of passages of Lorem Ipsum available,
        </p> */}
        {/* <p className="heading p__color">
          but the majority have suffered alteration.
        </p> */}
      </div>

      <div className="container">
        <div className="row">
          <div className="col__md__1" data-aos="flip-left">

            <div class="progress__title">
              <h3>React</h3>
              <div className="progress">
                <div className="progress__bar" style={{ width: "75%", height: "20px", background: "#ef2d56" }}>
                  <div className="progress__value">75%</div>
                </div>
              </div>
            </div>

            <div class="progress__title">
              <h3>NodeJS</h3>
              <div className="progress">
                <div className="progress__bar" style={{ width: "75%", height: "20px", background: "#ef2d56" }}>
                  <div className="progress__value">75%</div>
                </div>
              </div>
            </div>

            <div class="progress__title">
              <h3>Express JS</h3>
              <div className="progress">
                <div className="progress__bar" style={{ width: "75%", height: "20px", background: "#ef2d56" }}>
                  <div className="progress__value">75%</div>
                </div>
              </div>
            </div>

            <div class="progress__title">
              <h3>Tailwind CSS</h3>
              <div className="progress">
                <div className="progress__bar" style={{ width: "75%", height: "20px", background: "#ef2d56" }}>
                  <div className="progress__value">75%</div>
                </div>
              </div>
            </div>

            <div class="progress__title">
              <h3>Bootstrap</h3>
              <div className="progress">
                <div className="progress__bar" style={{ width: "75%", height: "20px", background: "#ef2d56" }}>
                  <div className="progress__value">75%</div>
                </div>
              </div>
            </div>

            <div class="progress__title">
              <h3>Mongo DB</h3>
              <div className="progress">
                <div className="progress__bar" style={{ width: "75%", height: "20px", background: "#ef2d56" }}>
                  <div className="progress__value">75%</div>
                </div>
              </div>
            </div>

          </div>

          <div className="col__md__2" data-aos="flip-right">

            <div class="progress__title">
              <h3>Material UI</h3>
              <div className="progress">
                <div className="progress__bar" style={{ width: "75%", height: "20px", background: "#ef2d56" }}>
                  <div className="progress__value">75%</div>
                </div>
              </div>
            </div>



            <div class="progress__title">
              <h3>Git</h3>
              <div className="progress">
                <div className="progress__bar" style={{ width: "75%", height: "20px", background: "#ef2d56" }}>
                  <div className="progress__value">75%</div>
                </div>
              </div>
            </div>

            <div class="progress__title">
              <h3>MySQL</h3>
              <div className="progress">
                <div className="progress__bar" style={{ width: "75%", height: "20px", background: "#ef2d56" }}>
                  <div className="progress__value">75%</div>
                </div>
              </div>
            </div>



          </div>

        </div>
      </div>
    </div>

  );
}

export default Service;
