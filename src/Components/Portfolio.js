import React from "react";

import PortImage from "../Compo/PortImage";
import "../CSS/Portfolio.css";

// image
import netflix from "../Assets/portfolio/netflix.png";
import amazon from "../Assets/portfolio/amazon.png";
import covi from "../Assets/portfolio/covid tracker.png";
import tweet from "../Assets/portfolio/tweet.png";
import vtr from "../Assets/portfolio/vtr.png";
import reel from "../Assets/portfolio/reels.png";
import mproject from "../Assets/portfolio/major-project.png";
import crypto from "../Assets/portfolio/cryptoworld.png";

const Portfolio = () => {
  return (
    <section id="contact" className="contact-area  gray-bg">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title text-center pb-25">
            <h2 className="title">MY WORK</h2>
            <p></p>
          </div>
        </div>
      </div>
      <div className="row" style={{ margin: "0" }}>
        <div className="pop col-lg-6 col-md-12 col-sm-12">
          <div className="portfolio">
            <PortImage
              img={covi}
              title="COVID TRACKER"
              link="https://covid-19-tracker-6579c.web.app"
              gitlink="https://github.com/JiteshSonar/Covid-Tracker"
            />
          </div>
        </div>
        <div className="pop col-lg-6 col-md-12 col-sm-12">
          <div className="portfolio">
            <PortImage
              img={crypto}
              title="CRYPTO WORLD"
              link="https://reels-clone-53bd7.web.app"
              gitlink="https://github.com/JiteshSonar/Reels-CLone"
            />
          </div>
        </div>
        <div className="pop col-lg-6 col-md-12 col-sm-12">
          <div className="portfolio">
            <PortImage
              img={netflix}
              title="NETFLIX CLONE"
              link="https://netflix-clone-24f60.web.app/"
              gitlink="https://github.com/JiteshSonar/Netflix-Clone"
            />
          </div>
        </div>
        <div className="pop col-lg-6 col-md-12 col-sm-12">
          <div className="portfolio">
            <PortImage
              img={amazon}
              title="AMAZON CLONE"
              link="https://clone-1e8d1.web.app"
              gitlink="https://github.com/JiteshSonar/Amazon-Clone"
            />
          </div>
        </div>

        <div className="pop col-lg-6 col-md-12 col-sm-12">
          <div className="portfolio">
            <PortImage
              img={mproject}
              title="SMART TEXTILE APP"
              link="https://reels-clone-53bd7.web.app"
              gitlink="https://github.com/JiteshSonar/Reels-CLone"
            />
          </div>
        </div>
        <div className="pop col-lg-6 col-md-12 col-sm-12">
          <div className="portfolio">
            <PortImage
              img={vtr}
              title="GOA TOURIST GUIDE"
              link="https://touristguide-b200f.web.app"
              gitlink="https://github.com/JiteshSonar/Goa-Tourist-Guide"
            />
          </div>
        </div>
        <div className="pop col-lg-6 col-md-12 col-sm-12">
          <div className="portfolio">
            <PortImage
              img={tweet}
              title="TWEETER CLONE"
              link="https://twitter-clone-735cc.web.app"
              gitlink="https://github.com/JiteshSonar/Twiter-Clone"
            />
          </div>
        </div>
        <div className="pop col-lg-6 col-md-12 col-sm-12">
          <div className="portfolio">
            <PortImage
              img={reel}
              title="REEELS CLONE"
              link="https://reels-clone-53bd7.web.app"
              gitlink="https://github.com/JiteshSonar/Reels-CLone"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
