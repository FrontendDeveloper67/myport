import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaBehance, FaInstagram, FaMobile, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZBSlwxbrvTQjFQRhlvPDVzRKjPJTjbsrQNtnRBZXkjTpQQlNFMZZnbDwFnVwNPhKzvHQg">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Contact me by </span>           
          </div>
          <div className={css.socialLinks}>
            <a href="https://wa.me/9711936716?text=Hi,%20Akash" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp color="#075E54" size={30} />              
            </a>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZBSlwxbrvTQjFQRhlvPDVzRKjPJTjbsrQNtnRBZXkjTpQQlNFMZZnbDwFnVwNPhKzvHQg" target="_blank" rel="noopener noreferrer">
              <FaEnvelope color="#4285F4" size={30} />
            </a>
            <a href="https://github.com/akashUIimprovements" target="_blank" rel="noopener noreferrer">
              <FaGithub color="black" size={30} />
            </a>
            <a href="https://www.linkedin.com/in/tanwarakash6716/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin color="#0077B5" size={30} />
            </a>  
            
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
