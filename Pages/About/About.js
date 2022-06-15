import React from "react";
import img from "../../assets/img.svg";
import { motion } from "framer-motion";
import './About.css'
import { Container, Row, Col } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col sm={12} md={6} >
          <motion.div
            className="image"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
          >
            <img src={img} alt="img" />
          </motion.div>
        </Col>
        <Col sm={12} md={6}>
          <motion.div
            class="information"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
          >
            <h2>
              <span>Nesreen  Salem</span>
            </h2>
            <p>
            Innovative front end developer with one year experience building and
            maintaining responsive websites, proficient in HTML, CSS, JavaScript
            plus modern libraries and frameworks, being passionate and self
            motivated will push me to do my best to get the job done.

            
            </p>
            <span class="inf">
              <strong class="str-1">Full Name </strong> :Nesreen Gamal Abbas Salem
            </span>
            <span class="inf">
              <strong class="str-2">Age </strong> : 25 Years
            </span>
            <span class="inf">
              <strong class="str-3">Education   </strong> :     BFCAI
            </span>
            <span class="inf">
              <strong class="str-4">Languages </strong> : Arabic + good English
            </span>
            <span class="inf">
              <strong class="str-5">Address </strong> : Cairo,Egypt
            </span>
            <span class="inf">
              <strong class="str-6">Freelance </strong> : Available
            </span>
            <span class="inf">
              <strong class="str-7">E-mail </strong> : nesrengamal97@gmail.com
            </span>
            <span class="inf">
              <strong class="str-8">Phone </strong> : 011 023 906 37
            </span>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
