import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import KidsSay from "../Assets/KidsSay.mp4";
import MeTime from "../Assets/MeTime.jpeg";
import Darnest from "../Assets/darnest.png";

const TelevisionAppearances = () => {
  return (
    <div id="tv" className="container">
      <div
        className="py-5"
        style={{
          position: "relative",
          //   background: "rgb(0,0,0,0.4)",
        }}
      >
        <h2
          style={{ fontSize: 60, color: "#da5049" }}
          className="container text-center py-3"
          data-aos="fade-up"
        >
          Television Appearances
        </h2>
        <div data-aos="slide-up" className="text-center">
          <div>
            <Carousel showThumbs={false}>
              <div className="d-flex justify-content-center">
                <img src={MeTime} style={{ maxWidth: 700 }} />
                <p
                  className="legend"
                  style={{
                    background: "#da5049",
                    fontSize: 20,
                  }}
                >
                  Me Time
                </p>
              </div>
              <div>
                <video
                  src={KidsSay}
                  style={{ height: "auto", width: "100%" }}
                  controls
                  poster={Darnest}
                ></video>
                <p
                  className="legend"
                  style={{
                    background: "#da5049",
                    fontSize: 20,
                  }}
                >
                  Kids Say The Darndest Things
                </p>
              </div>
              <div>
                <iframe
                  width="560"
                  height="615"
                  src="https://www.youtube.com/embed/T_yws5odue4"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <p
                  className="legend"
                  style={{
                    background: "#da5049",
                    fontSize: 20,
                  }}
                >
                  Access Daily
                </p>
              </div>
              <div>
                <iframe
                  width="560"
                  height="615"
                  src="https://www.youtube.com/embed/j0BPzY56dIw"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <p
                  className="legend"
                  style={{
                    background: "#da5049",
                    fontSize: 20,
                  }}
                >
                  Steve and Kate’s Documentar
                </p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelevisionAppearances;
