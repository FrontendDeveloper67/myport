import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant } from "../../utils/motion";

const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div
          variants={textVariant(0.4)}
          className={`flexCenter ${css.heading}`}
        >
          <div>
            <span className="primaryText">Projects</span>
            <p style={{ marginTop: "10px" }}>

            </p>
          </div>
          <span className="secondaryText"></span>
        </motion.div>

        <div className={`flexCenter ${css.showCase}`}>

          <a href="https://channelize.io/">
            <motion.img
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              src="./channelize.png"
              alt="channelize"
            />
          </a>

          <a href="https://bigsteptech.com/" target="_blank" rel="noopener noreferrer">
            <motion.img
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              src="./bigsteptech.jpg"
              alt="Bigsteptech"
            />
          </a>



          <a href="https://dev.risebuildings.com/" target="_blank" rel="noopener noreferrer">
            <motion.img
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              src="./risebuildings.png"
              alt="risebuildings"
            />
          </a>

          <a href="https://ashokahillsjunglecafe.com/">
            <motion.img
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              src="./ashokahillsjunglecafe.png"
              alt="ashokahillsjunglecafe"
            />
          </a>         
          {/* <a href="" target="_blank" rel="noopener noreferrer">
            <motion.img
              variants={fadeIn("up", "tween", 0.3, 0.6)}
              src="/spacex.png"
              alt="project 3"
            />
          </a>          */}

        </div>
      </div>
    </motion.section>




  );
};

export default Portfolio;
