import introSide from "../Assets/intro-side.jpg";
import parallax1 from "../Assets/parallax-1.jpg";
import { Parallax } from "react-parallax";

const Intro = () => {
  return (
    <>
      <div id="works" className="works dark-background">
        <div className="container d-flex justify-content-center flex-column text-center align-items-center">
          <div class="sixteen columns">
            <h1>
              <span data-aos="fade-down" className="mb-4">
                James Chan 15-Year-Old Magician and Juggler
              </span>
            </h1>
          </div>
          <div class="sixteen columns row" style={{ maxWidth: 1000 }}>
            <img
              data-aos="fade-left"
              src={introSide}
              alt="intro-side"
              height={500}
              width={500}
              style={{
                maxWidth: "300px",
                height: "auto",
                margin: "auto",
                paddingTop: 60,
                paddingBottom: 60,
              }}
              className="col rounded img-thumbnail"
            />
            <h5 className="col" data-aos="fade-right">
              At age 5 James Chan was juggling 3 balls, at age 8 he was juggling
              5 balls & three flaming torches and by age 10 he was picking
              pockets . James’ credits include appearing on ABC7 News national
              television with Tiffany Haddish , Access Daily with Penn and
              Teller , and performing for former CIA director Leon Panetta,
              White House’s Chief Data Scientist, DJ Patil. James recently
              featured in the Mercury news for winning the International
              Brotherhood of Magician's' online magic contest beating out many
              magicians twice his age in the first ever magic competition held
              on Zoom. He was also the youngest person ever to be featured on
              Silicon Valley Business Journal.
            </h5>
          </div>
        </div>
      </div>
      <div>
        <Parallax
          // blur={10}
          bgImage={parallax1}
          bgImageAlt="the cat"
          strength={500}
        >
          <div
            className="py-5"
            style={{
              position: "relative",
              //   background: "rgb(0,0,0,0.4)",
            }}
          >
            <h2
              data-aos="fade-down"
              style={{ fontSize: 60, color: "#da5049" }}
              className="container text-center py-3"
            >
              Welcome to the world of James Chan
            </h2>
            <div className="text-center">
              <iframe
                data-aos="fade-up"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/j0BPzY56dIw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <h6
                data-aos="fade"
                className="container py-4"
                style={{ fontSize: 30, maxWidth: 800 }}
              >
                If you are looking for magic that that will leave a lasting
                impression on both the adults and the kids? James Chan is the
                perfect choice for your next corporate or family event! James
                Chan is a charming magician and juggler whose talent is only
                surpassed by his effervescent personality. At 15 years old, he
                has learned to balance high school, family time, and being a
                ‘teen’ with a passionate commitment to perfecting his craft. For
                James, a typical day includes practicing and rehearsing, under
                the watchful direction of his dad, Master Magician, Dan Chan.
                James Chan has also trained at the San Francisco Circus Center
                in clowning, stilts, acrobatics and more! Performing regularly
                at local functions, libraries, grand openings, festivals, and
                even high profile corporate events in Silicon Valley, has
                allowed this magician to build the reputation of being one of
                the top entertainers in the Bay Area.
              </h6>
            </div>
          </div>
        </Parallax>
      </div>
    </>
  );
};

export default Intro;
