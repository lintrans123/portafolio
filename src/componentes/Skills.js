import meter1 from "../imagen/meter1.svg";
import meter2 from "../imagen/meter2.svg";
import meter3 from "../imagen/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Row, Col } from "react-bootstrap";

import colorSharp from "../imagen/fondo2.jpg"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <Row>
                <Col>
                    <div className="skill-bx wow zoomIn">
                        <h2>Habilidades</h2>
                        <p>Mis habilidades incluyen la programación y un gran interés por el estudio continuo.<br></br>  además de conocimientos básicos en tecnologías de nube..</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>cloud technology</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>study </h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}


