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
import vue from "../Assets/Skicons/vue.png";
import jetpack from "../Assets/Skicons/jetpack.svg";

const About = () => {
  return (
    <div>
      <section id="about" className="about-area pt-125 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h2 className="title">About Me</h2>
                <p style={{ alignContent: "center", marginBottom: "50px" }}>
                Innovative Full-Stack Development with a Focus on Quality.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="about-content mt-50">
                <h5 className="about-title">Hi There! I'm <span className="highlited_word"> Jitesh Sonar</span></h5>
                <p style={{textAlign: "justify"}}>
                  I’m a passionate <span className="highlited_word">Software Developer</span> with <span className="highlited_word">2.6+ years</span> of
                  experience at Siddhatech Software Services Pvt Ltd.,
                  specializing in <span className="highlited_word">web and mobile application development</span>. I have
                  a strong focus on creating scalable and high-quality solutions
                  using <span className="highlited_word">React.js, React Native, Vue.js</span>, and <span className="highlited_word">Jetpack Compose</span>,
                  with expertise in <span className="highlited_word">banking, financial services</span>, and <span className="highlited_word">project
                  management systems</span>. Proficient in <span className="highlited_word">TypeScript, Redux Toolkit,
                  MongoDB</span>, and <span className="highlited_word">Tailwind CSS</span>, I thrive in <span className="highlited_word">Agile Scrum teams.</span> I
                  was also honored with the <span className="highlited_word">'Best Table of the Year'</span> award for
                  my exceptional contributions.
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
                          <a href="mailto:sonar.jitesh03@gmail.com?subject=Mail from our Website">
                            sonar.jitesh03@gmail.com
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
                          <span>Location:</span> 411027, Pimple Saudagar, Pune, Maharashtra, India
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
                  <Progress done="90" />
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <div>
                    <h5>Vue JS</h5>
                  </div>
                  <div>
                    <img className="ico" src={vue} alt="" />
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
                  <Progress done="80" />
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <div>
                    <h5>JETPACK COMPOSE (Android)</h5>
                  </div>
                  <div>
                  <img className="ico" src={jetpack} alt="" />
                  </div>
                </div>
                <div className="skill-percentage">
                  <Progress done="100" />
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
                      href="https://drive.google.com/file/d/1HcrffU4j0HDUJHld4ceWvsdJH0cXnZzd/view?usp=sharing"
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
