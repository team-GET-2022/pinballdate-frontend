import React from 'react';
import { Modal, Button, Card } from 'react-bootstrap'
import '../aboutUsModal.css'
import Lauren from '../images/lauren.png'
import Dan from '../images/dan.png'
import Andres from '../images/andres.jpg'
import Rey from '../images/rey.jpeg'

class AboutUsModal extends React.Component {

  render() {
    return (
      <>
        <Modal.Header>
          <Modal.Body>
            <Modal.Title>About Us</Modal.Title>
            <Card>
              <Card.Title>Dan Brian</Card.Title>
              <Card.Body>
                <div className='aboutUs-body'>
                  <img src={Dan} alt="Dan portrait" />
                  <br />
                  <p>Senior Technical Writer who specializes in cloud infrastructure and API documentation. Having managed teams and projects for small and large tech companies over the past decade, I've delivered and shepherded documentation projects for large cloud platform services, such as docs for Virtual Machine (VM) server management, Virtual Private Network (VPC) setup, and DNS configuration. I work in a broad variety of media applications that will probably cripple my wrists someday. Deadlines are important to me.</p>
                </div>
                <div className='aboutUs-links'>
                  <a href="https://github.com/dbrian57">GitHub</a>
                  <a href="https://www.linkedin.com/in/dan-brian/">LinkedIn</a>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Title>Lauren Murphy</Card.Title>
              <Card.Body>
                <div className='aboutUs-body'>
                  <img src={Lauren} alt="Lauren portrait" />
                  <br />
                  <p>Software developer with a background in psychology and studio/digital art. My primary focuses are HTML, CSS, JS, and soon Python. I have an interest in graphics pipeline programming (GLSL/HLSL) that I hope to pursue in greater depth in the near future.

                    Passionate about accessibility and open-source development.  I care a lot about aesthetics, presentation, and usable interfaces.
                  </p>
                </div>
                <div className='aboutUs-links'>
                  <a href="https://github.com/L-nobilis">GitHub</a>
                  <a href="https://www.linkedin.com/in/lauren-murphy-wa/">LinkedIn</a>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Title>Andres Mills Gallego</Card.Title>
              <Card.Body>
                <div className='aboutUs-body'>
                  <img src={Andres} alt="Andres portrait" />
                  <br />
                  <p>I am a full stack software developer.  I am also a first generation immigrant  from Colombia, South America.  I am a lifelong woodworker and I love to learn new things.  I enjoy both the front end and the back end, but my creative side tends to steer me more in the direction of front end development.

                    I embrace the opportunity to step out of my comfort zone, and for me problem solving isn’t just a skill I use in my career, it is a way of life.  I look forward to the challenge that comes with any new opportunity and I view these challenges as pathways to growth, both personal and professional.

                    When I am not coding, I love spending time with my family, enjoying the outdoors and whenever possible, traveling!
                  </p>
                </div>
                <div className='aboutUs-links'>
                  <a href="https://github.com/AndresMillsGallego">GitHub</a>
                  <a href="https://www.linkedin.com/in/andres-mills-gallego/">LinkedIn</a>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Title>Rey Mercado</Card.Title>
              <Card.Body>
                <div className='aboutUs-body'>
                  <img src={Rey} alt="Rey portrait" />
                  <br />
                  <p>Student in software engineering aspiring to have first role as software engineer as soon as summer 2022.  I have studied software engineering with Hack Reactor / Galvanize before enrolling in Code Fellows Intermediate Software Engineering course in JavaScript.  Formerly after graduating from University of California, Davis with a degree in Economics, I spent a decade working as a US Army Chemical officer, mostly spent time abroad, in program management.  After leaving the military, I worked as an accountant where I quickly found the work did not fit my thirst for creativity using my analytical skills. My goal is to have a long and successful career in software engineering as soon as I complete advanced software engineering at Code Fellows (401), and look to get hired as soon as this summer 2022.</p>
                </div>
                <div className='aboutUs-links'>
                  <a href="https://github.com/44thm0820">GitHub</a>
                  <a href="https://www.linkedin.com/in/reymercadousa/ ">LinkedIn</a>
                </div>
              </Card.Body>
            </Card>

            <Button onClick={() => this.props.toggleAboutUsModal()}>Close</Button>
          </Modal.Body>
        </Modal.Header>
      </>
    )
  }
}

export default AboutUsModal;