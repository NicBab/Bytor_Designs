import React from "react";
import "./css/Contact.css";
import { Container } from "react-bootstrap";
import * as GrIcons from "react-icons/gr";
import * as BsIcons from "react-icons/bs";

const Contact = () => {

  const onContactPhoneClick = () => {
    window.location = "tel:+337 123-4567";
  };

  const onContactEmailClick = () => {
    window.location.href = "mailto: dylannicholson@gmail.com";
  };

  return (
    <>
      <div className="contactPg">
        <Container className="contactContainer">
          <div className="contactLinks" onClick={onContactEmailClick}>
            <GrIcons.GrMail className="contactIcons" /> dylanNicholson@gmail.com
          </div>
          <div className="contactLinks" onClick={onContactPhoneClick}>
            <BsIcons.BsFillTelephoneFill className="contactIcons" />
            (337) 123-4567
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;
