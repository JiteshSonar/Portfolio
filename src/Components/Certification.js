import React from "react";

import "../CSS/Certifiction.css";
import REACT from "../Assets/cirtficate/REACT.jpg";
import MERN from "../Assets/cirtficate/MERN.jpg";
import WEB from "../Assets/cirtficate/WEB.jpg";
import UIUX from "../Assets/cirtficate/UIUX.jpg";
import python from "../Assets/cirtficate/python.jpg";
import c from "../Assets/cirtficate/c.jpg";
import vue from "../Assets/cirtficate/vuee.jpg"
import PopupImage from "../Compo/PopupImage";

const Certification = () => {
  return (
    <div>
      <section id="work" className="work-area pt-125 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title pb-25">
                <h2 className="title">My Certificates</h2>
              </div>
            </div>
          </div>

          <div className="row">
          <div className="pop col-lg-4 col-md-6 col-sm-6">
              <PopupImage
                title="C programming"
                img={c}
                link="https://coursera.org/verify/XBPXUDY7GYQY"
              />
            </div>
            <div className="pop col-lg-4 col-md-6 col-sm-6">
              <PopupImage
                title="Web Development"
                img={WEB}
                link="https://coursera.org/verify/XBPXUDY7GYQY"
              />
            </div>
            <div className="pop col-lg-4 col-md-6 col-sm-6">
              <PopupImage
                title="React JS Development"
                img={REACT}
                link="https://courses.learncodeonline.in/learn/certificate/2384806-53635"
              />
            </div>
            <div className="pop col-lg-4 col-md-6 col-sm-6">
              <PopupImage
                title="VueJs Developement"
                img={vue}
                link="coursera.org/verify/DMXD4WHHCAB2"
              />
            </div>
            <div className="pop col-lg-4 col-md-6 col-sm-6">
              <PopupImage
                title="Full Stack MERN Development"
                img={MERN}
                link="https://courses.learncodeonline.in/learn/certificate/2384806-50332"
              />
            </div>
            <div className="pop col-lg-4 col-md-6 col-sm-6">
              <PopupImage
                title="Python Data Structures"
                img={python}
                link="coursera.org/verify/DMXD4WHHCAB2"
              />
            </div>
            <div className="pop col-lg-4 col-md-6 col-sm-6">
              <PopupImage title="UI/UX Training" img={UIUX} link="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certification;
