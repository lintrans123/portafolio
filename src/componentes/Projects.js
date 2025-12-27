import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Projectscard } from "./Projectscard";
import projImg1 from "../imagen/Project1.jpg";
import projImg2 from "../imagen/Project2.jpg";
import projImg3 from "../imagen/Project3.PNG";
import papel from "../imagen/imagen2.jpeg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "**********",
      description: "En desarrollo",
      imgUrl: papel,
    },
    {
      title: "**********",
      description: "En desarrollo",
      imgUrl: papel,
    },
   
  ];

  const projects2 = [
    {
      title: "Cubsat",
      description: "research & assembly projects",
      imgUrl: projImg1,
    },
    {
      title: " agricole dron ",
      description: "research & assembly projects",
      imgUrl: projImg2,
    },
  
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__bounce": ""}>
                <h2>Projects</h2>
                <p>Aquí encontrarás una selección de proyectos personales y colaborativos que demuestran mis habilidades en desarrollo web, programación y resolución de problemas. Cada uno fue construido con enfoque en buenas prácticas  y funcionalidad real.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">software</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">electronica </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Gestion</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <Projectscard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <Projectscard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>

                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Proyectos en desarrollo y proximidad.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}






