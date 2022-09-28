import React from 'react';
import s from "./Presentation.module.css"
import photo from "./img/photo.png";
import { Container, Row, Col } from 'react-grid-system';
import Button from './Button.jsx';
import Zoom from 'react-reveal';


export default function Presentation(props) {
    var presentation = 
    <section className={s.presentation}>
        <div className={s.mainCont}>
            <Container>   
            <Zoom bottom>     
                <Row>

                    <Col sm={12} md={6} lg={5}><img className={s.mainImg} src={photo} alt="Mariano Ibarra"/></Col>
                    <Col sm={12} md={6} lg={7}>
                    <div className={s.mainText}>
                            <p>HELLO WORLD</p>
                            <div className={s.triangle}></div>
                            <h1><span>I'm</span> Mariano</h1>
                            <h6>... and I'm a fullstack developer from Rosario - Argentina, working on designing amazing experiences</h6>
                            <a href='mailto:marianoibarratesta@outlook.com'><Button text="Let's talk!" class="botonMain"/></a>
                        </div>
                    </Col>

                </Row>
                </Zoom>
            </Container>
        </div>
    </section>;
    return presentation;
}