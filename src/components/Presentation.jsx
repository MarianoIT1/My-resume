import React from 'react';
import s from "./Presentation.module.css"
import photo from "./img/photo.png";
import { Container, Row, Col } from 'react-grid-system';
import Button from './Button.jsx';
import Fade from 'react-reveal/Fade';



export default function Presentation(props) {
    var presentation = 
    <section className={s.presentation}>
        <div className={s.mainCont}>
            <Container>   
                <Fade delay={700} duration={1200} bottom>     
                    <Row>
                        <Col sm={12} md={6} lg={5}><img className={s.mainImg} src={photo} alt="Mariano Ibarra"/></Col>
                        <Col sm={12} md={6} lg={7}>
                            <div className={s.mainText}>
                                
                                <p>HELLO WORLD</p>
                                <div className={s.triangle}></div>
                                <h1><span>I'm</span> Mariano</h1>
                                <h6>... and I'm a fullstack developer from Rosario - Argentina, working on designing amazing experiences</h6>
                                <a href='mailto:marianoibarratesta@outlook.com'><Button text="Let's talk!" class="botonMain" color="outline"/></a>
                                <a href='download/CV 2022.pdf' target="_blank" download><Button text="Download CV" class="botonMain"/></a>
                            </div>
                        </Col>
                    </Row>
                </Fade>
            </Container>
        </div>
    </section>;
    return presentation;
}