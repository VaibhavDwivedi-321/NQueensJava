import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/proj1.png";
import projImg2 from "../assets/img/proj2.png";
import projImg3 from "../assets/img/proj3.png";
import projImg4 from "../assets/img/proj4.png";
import projImg5 from "../assets/img/proj5.png";
import projImg6 from "../assets/img/proj6.png";
import projImg7 from "../assets/img/proj7.png";
import projImg8 from "../assets/img/proj8.png";
import projImg9 from "../assets/img/proj9.png";
import projImg10 from "../assets/img/proj10.png";
import projImg11 from "../assets/img/proj11.png";
import projImg12 from "../assets/img/proj12.png";
import projImg13 from "../assets/img/projnew1.png";
import projImg14 from "../assets/img/projnew2.png"

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "VODEX2.0",
      description: "My own personalized chatGPT with ability to provide MCQ answer more effieciently.",
      imgUrl: projImg13,
      linked: "https://vodex-vd.vercel.app/"
    },
    {
      title: "VChat",
      description: "A microsoftTeams clone made for chatting.",
      imgUrl:projImg14,
      linked: "https://vaibhav-vchat.onrender.com"
    },
    {
      title: "CORPTALKS",
      description: "A feedback giver made for corporations",
      imgUrl: projImg1,
      linked: "https://corptalks-feedback-vaibhav.onrender.com/"
    },
    {
      title: "My WeatherCard",
      description: "A live weather application that utilises openweatherAPI to fetch data.",
      imgUrl:projImg2,
      linked: "https://vaibhavweather.onrender.com"
    },
    {
      title: "TodoList Node",
      description: "A Todolist which utilises MongoDB to keep your day-to-day tasks safe",
      imgUrl: projImg3,
      linked: "https://todolist-vaibhav.onrender.com/"
    },
    {
      title: "SimonGame",
      description: "A game made using vanilla.js",
      imgUrl: projImg4,
      linked: "https://vaibhavdwivedi-321.github.io/SimonGame-Memorize/"
    },
    
  ];


  const projects2 = [
    {
      title: "Drum Kit",
      description: "A Drum Kit made using JavaScript!",
      imgUrl: projImg5,
      linked: "https://vaibhavdwivedi-321.github.io/DrumKit_Js/"
    },
    {
      title: "KeeperNotes",
      description: "A React Notes WebApp",
      imgUrl: projImg6,
      linked: "https://vaibhavdwivedi-321.github.io/NotesKeeper/"
    },
    {
      title: "DiceGame",
      description: "A new way to declare the winner of the toss",
      imgUrl: projImg7,
      linked: "https://vaibhavdwivedi-321.github.io/DiceGame/"
    },
    {
      title: "CSSPortfolio",
      description: "Portfolio made using CSS and Html",
      imgUrl: projImg8,
      linked: "https://vaibhavdwivedi-321.github.io/MyFirstCSSPortfolio/"
    },
    {
      title: "Newsletter MailChimp",
      description: "A newsletter utilising mailchimp-API",
      imgUrl: projImg9,
      linked: "https://newslettersignup-vd.onrender.com/"
    },

    {
      title: "Tindog",
      description: "A website for Dogs made using Bootstrap",
      imgUrl: projImg11,
      linked: "https://vaibhavdwivedi-321.github.io/Tindog-TinderForDogs/"
    }

  ];
const projects3 = [
  {
    title: "Personal Site",
    description: "My first HTML Project",
    imgUrl: projImg12,
    linked: "https://vaibhavdwivedi-321.github.io/HTMLPersonalSite/"
  },
  {
    title: "TodoList React",
    description: "A simple TodoList made using React.js",
    imgUrl: projImg10,
    linked: "https://vaibhavdwivedi-321.github.io/React.js-To-Do-List/"
  }
];








  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are a few past Web Development projects I've worked on. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="third">My Resume</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
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
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">

                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                    {/* <Tab.Pane eventKey="third">
                      <p><a href="https://drive.google.com/file/d/1e00JhzZq82BzffwxRjbk9gqkf1YHGUZt/view?usp=share_link">My Resume</a></p>

                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
