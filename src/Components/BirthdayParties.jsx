const BirthdayParties = () => {
  return (
    <div id="birthday">
      <div
        className="py-5"
        style={{
          position: "relative",
          //   background: "rgb(0,0,0,0.4)",
        }}
      >
        <h2
          data-aos="fade-up-right"
          style={{ fontSize: 60, color: "#da5049" }}
          className="container text-center py-3"
        >
          The ultimate value in entertainment for larger venues!
        </h2>
        <div className="text-center">
          <div>
            <iframe
              data-aos="slide-left"
              src="https://www.youtube.com/embed/MeI-6yDlkF4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              data-aos="slide-right"
              src="https://www.youtube.com/embed/JoeRH-agcTQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <h6
            className="container py-4"
            style={{ fontSize: 30, maxWidth: 800 }}
            data-aos="fade"
          >
            If you are looking for the perfect kids show, consider James Chan.
            Together, you’ll have the ultimate birthday party package with
            magic, iPhone magic, and juggling. His show is perfect for kids of
            all ages. Typically he’ll do a short show consisting of magic and
            juggling followed by world-class walk-around magic perfect for the
            adults!
          </h6>
        </div>
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-md" data-aos="fade-right">
            <h4
              style={{
                fontSize: 40,
                color: "#da5049",
                textTransform: "uppercase",
              }}
            >
              Grad Night
            </h4>
            <p style={{ color: "black", fontSize: 18 }}>
              ames has performed many grad nights events and looks forward to
              working with you. As guests enter the venue, there’s usually a
              bottleneck during check-in. We recommend having him do juggling,
              which is more visual as guests enter the venue. Once everyone is
              inside, he’ll transition to his signature close-up magic, which is
              sure to wow even the most skeptical of teens.
            </p>
          </div>
          <div className="col-md row" data-aos="fade-left">
            <iframe
              src="https://www.youtube.com/embed/_8yVq-EhUk8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/jAXx51NaroE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container pt-5">
        <div className="row align-items-center" data-aos="fade-left">
          <iframe
            height={350}
            className="col-md"
            src="https://www.youtube.com/embed/UokoBEGj62Y"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="col-md" data-aos="fade-right">
            <h4
              style={{
                fontSize: 40,
                color: "#da5049",
                textTransform: "uppercase",
              }}
            >
              JUGGLING
            </h4>
            <p style={{ color: "black", fontSize: 18 }}>
              A great way to start off the show is with some juggling. James has
              been juggling since age 5.
            </p>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row ">
          <div className="col-md" data-aos="fade-right">
            <h4
              style={{
                fontSize: 40,
                color: "#da5049",
                textTransform: "uppercase",
              }}
            >
              Wedding
            </h4>
            <p style={{ color: "black", fontSize: 18 }}>
              Depending on your wedding, you may have James do “mingling magic”
              during cocktail hour or have him do a short stage show and
              “mingling magic.” As you take photos after the ceremony, guests
              don’t have much to do while waiting for dinner. This is the
              perfect time to entertain your guests. Once you’re back from
              taking photos and changing into your evening wear, swing by and
              get him to do some magic for you before the banquet. As you can
              see, James is comfortable in front of larger audiences and has the
              perfect routine for weddings. Don’t worry; he won’t steal the
              show, as he’ll keep the focus on both the bride and the groom.
            </p>
          </div>
          <div className="col-md row" data-aos="fade-left">
            <iframe
              src="https://www.youtube.com/embed/NkKXkfFWk_g"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayParties;
