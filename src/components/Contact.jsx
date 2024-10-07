import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

function Contact() {
  return (
    <>
      <div className="container contact">
        <h1>Contact Me</h1>
        <div className="contact-icon" data-aos="zoom-in-up" data-aos-duration="1000">
          <a href="" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="" target="_blank" className="items">
            <FiFacebook className="icons" />
          </a>
          <a href="" target="_blank" className="items">
            <AiOutlineLinkedin className="icons" />
          </a>
          <a href="" target="_blank" className="items">
            <FaXTwitter className="icons" />
          </a>
          <a href="https://github.com/abhishek7462" target="_blank" className="items">
            <FaGithub className="icons" />
          </a>
          <a href="mailto:abhi2198m@gmail.com" target="_blank" className="items">
            <CgMail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
