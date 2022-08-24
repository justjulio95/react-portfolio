import React, { useState } from "react";
import { Container, Row, Col, Card, Image, Modal, Button } from 'react-bootstrap'
import portfolioInfo from "../../utils/portfolioInfo";

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
          <Image src={project.image} style={{ width: "25%" }}/>
        </Modal.Body>
        <Button
          href={project.link}
          target="_blank"
        >
          Here's the Website
        </Button>
        <Button
          href={project.github}
          target="_blank"
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
      <Card key={index} className="mb-3 mx-3" style={{ width: "50%" }}>
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
        <h1>My Portfolio</h1>
      </div>
      <p>Take a look at my Github page:
        <Button
          href="/"
          target="_blank"
        >
          image
        </Button>
      </p>
      <p>Here's my Resume:
        <Button
          href="/"
          target="_blank"
        >
          Download PDF
        </Button>
      </p>

      <Container fluid="lg">
        <Row className="justify-content-center">
          {mapped}
        </Row>
      </Container>
    </div>
  )
}

export default Portfolio