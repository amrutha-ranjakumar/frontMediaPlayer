import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Landing() {
  return (
    <>
      <Container className='mt-5 mb-5 d-flex align-items-center justify-content-evenly w-100 '>
      
        <Row>
          <Col>
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <br/>
            
            <p style={{textAlign:"justify",fontSize:'15px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, iure non asperiores nesciunt totam mollitia placeat enim eligendi commodi vero. Asperiores incidunt vero quis quasi repellat, magni nulla porro consectetur?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima inventore ducimus laborum, amet laboriosam repudiandae accusamus in ullam quaerat, aliquam facilis.Inventore nemo ipsum dolorem, reprehenderit quidem non obcaecati perspiciatis!.</p>
            <Link to='/home'>
            <button className='btn btn-warning mt-5'>Get Started<i class="fa-solid fa-arrow-right ms-2"></i></button>
            </Link>
         
          </Col>
          <Col>
          <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" height={'400px'} className='ms-5'/>
          </Col>
        </Row>
        </Container >
        <div className='container mt-5 mb-5'>
        <h3>Features</h3>
        <div className='cards d-flex align-iten-center justify-content-evenly mt-5'>
        <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button  className='text-white' variant="warning">Go somewhere</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button  className='text-white' variant="warning">Go somewhere</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button  className='text-white' variant="warning">Go somewhere</Button>
      </Card.Body>
    </Card>


      </div>
      </div>
      <div className='container mb-5 mt-5 border border-2 border-secondary rounded p-4'>
        <Row>
          <Col>
          <h3 className='text-warning mt-5 mb-5'>Simple and powerful</h3>
          <p><span className='fs-5 fw-border'>Play Everything:</span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa error assumenda odio, rerum quia et earum ipsum animi dolores recusandae accusantium distinctio necessitatibus. Pariatur voluptatem labore nesciunt optio 
          </p>
          <p><span className='fs-5 fw-border'>Play Everything:</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet optio exercitationem voluptatibus qui accusantium esse tenetur earum, illo quasi voluptate veritatis quis mollitia, autem, quo quas aliquid ex officiis laboriosam!</p>
          <p><span className='fs-5 fw-border'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cum ad commodi autem repudiandae explicabo aperiam porro qui. Excepturi aut aliquam error, magnam saepe minima ad deserunt officia aspernatur obcaecati? 
          </p>
          <p><span className='fs-5 fw-border'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis molestias saepe quas, deleniti omnis modi rem nemo odit illum iure, voluptate in commodi ducimus! Velit voluptates earum veritatis ipsum id?</p>
          </Col>
          <Col className='mt-5'>
          <iframe width="100%" height="460" src="https://www.youtube.com/embed/VAdGW7QDJiU" title="JAWAN: Chaleya (Hindi) | Shah Rukh Khan | Nayanthara | Atlee | Anirudh | Arijit S, Shilpa R | Kumaar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Col>
        </Row>
      </div>
    </>

  )
}

export default Landing