import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaBehance, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Import Instagram icon

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            <span className="text-primary">I'm</span>
            <br />
            Akash Tanwar
          </motion.span>
          <motion.span className="secondaryText" variants={fadeIn("left", "tween", 0.4, 1)}>
            UI/UX Designer &
            <br />
            Front-end Web Developer
          </motion.span>
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
          
          {/* <a href="#" target="_blank" rel="noopener noreferrer">
            <FaBehance color="black" size={30} />
          </a> */}
          {/* <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram color="black" size={30} />
          </a> */}
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./about.png" alt="About Akash Tanwar" />
        </motion.div>

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText text-primary-color">5+</div>
            <div className="secondaryText">
              <div className="text-primary">Year of Experience</div>
              <div></div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.availableButton}>
            <button>
              <div className={css.blinkingLight}></div> {/* Add blinking light inside the button */}
              <div className={css.buttonText}>Available for Work</div>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
