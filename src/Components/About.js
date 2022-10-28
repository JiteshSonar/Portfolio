import React from "react";
import "../CSS/About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import {
  FaCalendar,
  FaEnvelope,
  FaLocationArrow,
  FaPhone,
} from "react-icons/fa";
import Progress from "../Compo/Progress";
import call from "../Assets/back/shape/call-to-action.jpg";

/* images */
import html from "../Assets/Skicons/html-5-48.png";
import css from "../Assets/Skicons/css3-48.png";
import angular from "../Assets/Skicons/angularjs-48.png";
import react from "../Assets/Skicons/react-native-48.png";
import native from "../Assets/Skicons/react-native-64.png";
import mongo from "../Assets/Skicons/mongodb_original_logo_icon_146424.png";
import ex from "../Assets/Skicons/expressjs_logo_icon_169185.png";
import node from "../Assets/Skicons/nodejs_original_logo_icon_146411.png";
import c from "../Assets/Skicons/c.png";
import cpp from "../Assets/Skicons/cpp.png";
import js from "../Assets/Skicons/js.png";

const About = () => {
  return (
    <div>
      <section id="about" className="about-area pt-125 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h2 className="title">About Me</h2>
                <p style={{alignContent: "center", marginBottom: "50px" }}>
                  "A designer knows he has achieved perfection not when there is
                  nothing left to add, but when there is nothing left to take
                  away."
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="about-content mt-50">
                <h5 className="about-title">Hi There! I'm Jitesh Sonar</h5>
                <p>
                  A UI Designer & Full-Stack Developer from Pune,
                  Maharashtra. I am a Software Developer at Siddhatech Software
                  Services Pvt Ltd, Pune. I did my Higher Secondary Education in
                  Moolji Jetha (MJ) College, Jalgaon and undergraduate course in
                  BE Computer Science at SSBT's College Of Engineering And
                  Technology, Bambhori, Jalgaon. Affiliated to K.B.C. North
                  Maharashtra University, Jalgaon.
                </p>
                <ul className="clearfix" style={{ marginBottom: "50px" }}>
                  <li>
                    <div className="single-info ">
                      <div className="info-icon">
                        <FaCalendar />
                      </div>
                      <div className="info-text">
                        <p>
                          <span>Date of birth:</span> 23 May 2000
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-info">
                      <div className="info-icon">
                        <FaEnvelope />
                      </div>
                      <div className="info-text">
                        <p>
                          <span>Email: </span>
                          <a href="mailto:jiteshsonar03@gmail.com?subject=Mail from our Website">
                            jiteshsonar03@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-info">
                      <div className="info-icon">
                        <FaPhone />
                      </div>
                      <div className="info-text">
                        <p>
                          <span>Phone:</span> +91 95528 17104
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-info">
                      <div className="info-icon">
                        <FaLocationArrow />
                      </div>
                      <div className="info-text">
                        <p>
                          <span>Location:</span> Kothrud, Pune, 411038
                          Maharashtra, India
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-6">
              <div className="skill-item">
                <div className="skill-header">
                  <div>
                    <h5>C & C++</h5>
                  </div>
                  <div>
                    <img className="ico" src={cpp} alt="" />
                    <img className="ico" src={c} alt="" />
                  </div>
                </div>
                <div className="skill-percentage">
                  <Progress done="70" />
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <div>
                    <h5>HTML, CSS & JAVASCRIPT</h5>
                  </div>
                  <div>
                    <img className="ico" src={html} alt="" />
                    <img className="ico" src={css} alt="" />
                    <img className="ico" src={js} alt="" />
                  </div>
                </div>
                <div className="skill-percentage">
                  <Progress done="100" />
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <div>
                    <h5>REACT JS</h5>
                  </div>
                  <div>
                    <img className="ico" src={react} alt="" />
                  </div>
                </div>

                <div className="skill-percentage">
                  <Progress done="80" />
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <div>
                    <h5>MERN / MEAN</h5>
                  </div>
                  <div>
                    <img className="ico" src={mongo} alt="" />
                    <img className="ico" src={ex} alt="" />
                    <img className="ico" src={react} alt="" />
                    <img className="ico" src={angular} alt="" />
                    <img className="ico" src={node} alt="" />
                  </div>
                </div>
                <div className="skill-percentage">
                  <Progress done="75" />
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-header">
                  <div>
                    <h5>REACT NATIVE</h5>
                  </div>
                  <div>
                    <img className="ico" src={native} alt="" />
                  </div>
                </div>
                <div className="skill-percentage">
                  <Progress done="60" />
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <div>
                    <h5>UI/UX</h5>
                  </div>
                  <div>
                    <h5 style={{ color: "blue", fontWeight: 700 }}>UI/UX</h5>
                  </div>
                </div>
                <div className="skill-percentage">
                  <Progress done="100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  --====== CALL TO ACTION PART START ====== */}

      <section
        id="call-to-action"
        className="call-to-action pt-125 pb-130 bg_cover"
        style={{ backgroundImage: `url(${call})`, padding: "20px" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9">
              <div className="call-action-content text-center">
                <h2 className="action-title">Have any project on mind?</h2>
                <p>If you can Think it, I can Develope it.</p>
                <ul>
                  <li>
                    <a
                      className="main-btn custom"
                      href="https://drive.google.com/file/d/1hjqR7aORWXYTkCuDkfkWlksSDoVASg8F/view?usp=sharing"
                    >
                      download cv
                    </a>
                  </li>

                  <Link to="/contact">
                    <li>
                      <p className="main-btn custom-2">Contact Me</p>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
