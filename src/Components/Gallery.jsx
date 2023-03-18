import ImageGallery from "react-image-gallery";

import g1 from "../Gallery/g1.jpg";
import g2 from "../Gallery/g2.jpg";
import g3 from "../Gallery/g3.jpg";
import g4 from "../Gallery/g4.jpg";
import g5 from "../Gallery/g5.jpg";

const images = [
  {
    original: g1,
    thumbnail: g1,
  },
  {
    original: g2,
    thumbnail: g2,
  },
  {
    original: g3,
    thumbnail: g3,
  },
  {
    original: g4,
    thumbnail: g4,
  },
  {
    original: g5,
    thumbnail: g5,
  },
];

const Gallery = () => {
  return (
    <div
      id="gallery"
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
        GALLERY
      </h2>
      <div className="text-center" data-aos="fade">
        <ImageGallery items={images} />
      </div>
    </div>
  );
};

export default Gallery;
