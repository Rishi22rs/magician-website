import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";

const Footer = () => {
  return (
    <div id="contact">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1612467.3205526061!2d-123.54142281739304!3d37.87549128800176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808583a3a688d7b5%3A0x8c891b8457461fa9!2sSan%20Francisco%20Bay%20Area%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1678385423289!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div
        className="row align-items-center"
        style={{
          position: "relative",
          left: 0,
          right: 0,
          minHeight: 200,
          background: "#da5049",
        }}
      >
        <span
          className="text-center col-md-4 nopadding"
          style={{ color: "white", fontSize: 40 }}
        >
          <div className="text-center">
            <AiOutlineMail />
          </div>
          office@server.com
        </span>
        <span
          className="text-center col-md-4 nopadding"
          style={{ color: "white", fontSize: 40 }}
        >
          <div className="text-center">
            <AiOutlineContacts />
          </div>
          123 456 789
        </span>
        <span
          className="text-center col-md-4 nopadding"
          style={{ color: "white", fontSize: 40 }}
        >
          <div className="text-center">
            <AiOutlineHome />
          </div>
          San Francisco Bay Area
        </span>
      </div>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: 30, zIndex: 90, fontWeight: "bold" }}
      >
        © copyright 2023 JAMES CHAN
      </div>
    </div>
  );
};

export default Footer;
