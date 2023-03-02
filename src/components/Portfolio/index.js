import React, { useState } from "react";
import { Container, Row, Col, Card, Image, Modal, Button } from 'react-bootstrap'
import portfolioInfo from "../../utils/portfolioInfo";
import resume from "../../Resume/resume.pdf"
import github from "../../images/github.svg"

// loading icon???? 
// CSS CLASS Curpsur pointer

function Portfolio() {
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState({});

  const createModal = (project) => {
    return (
      <Modal
        show={modal}
        onHide={() => setModal(false)}
        size='lg'
        arial-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>
            {project.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{project.summary}</p>
          <Image src={project.image} className="d-block mx-auto my-auto" style={{ width: "75%" }}/>
        </Modal.Body>
        <Button
          href={project.link}
          target="_blank"
          className="d-inline-block mx-auto my-auto mb-3"
        >
          Here's the Website
        </Button>
        <Button
          href={project.github}
          target="_blank"
          className="d-inline-block mx-auto my-auto"
        >
          Here's the Repo
        </Button>

        <Modal.Footer>
          <div>Tech Used: </div>
          <p>{project.tech}</p>
          <Button variant="danger" onClick={() => setModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  const mapped = portfolioInfo.map((e, index) => {
    return (
      <Card key={index} className="mb-3 mx-3" style={{ width: "50%", cursor: "pointer" }}>
        <Image
          onClick={() => {
            setTempData({
              image: e.image,
              link: e.link,
              github: e.github,
              title: e.title,
              summary: e.summary,
              tech: e.tech
            })
            setModal(true)
          }}
          src={e.image}
        />
        <div></div>
        {createModal(tempData)}
      </Card>
    )
  })

  return (
    <div>
      <div>
        <h1 className="d-inline-block my-3 text-info">My Portfolio</h1>
      </div>
      <p>Take a look at my Github page:
        <Button
          href="/"
          target="_blank"
          className="mx-3"
        >
          <img src={github} style={{ width: "150%", position: "relative", right: "5px" }}/>
        </Button>
      </p>
      <p>Here's my Resume:
        <Button
          href={resume}
          target="_blank"
          className="mx-3"
        >
          Download PDF
        </Button>
      </p>

      <div>
        <h3 className="d-inline-block my-3 mx-5 mb-5 text-info">
          Just as a heads up, these projects that I'm so proud of are currently under 
          construction. I'm in the process of moving them from Heroku to Amazon Web Service. 
          If you'd like to take a look at this for yourself, feel free to contact me and I'll 
          be more than happy to show you how to run the program step by step on your own computer.
        </h3>
      </div>

      <Container fluid="lg">
        <Row className="justify-content-center">
          {mapped}
        </Row>
      </Container>
    </div>
  )
}

export default Portfolio