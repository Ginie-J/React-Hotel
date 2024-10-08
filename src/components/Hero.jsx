import React from 'react'
import {Container, Col, Row} from 'react-bootstrap';

const Hero = () => {
  return (
    <section id='hero'>
        <Container fluid className='padding-side'>
            <div className=' d-height rounded-5 overflow-hidden position-relative'>
                <img src="/images/pool003.jpg" alt=""/>
                <Row className='abrow'>
                  <Col md={6} className='textbox'>
                    <p className='hero-text'>Happy Holliday in<br/> EZ Hotel</p>
                  </Col>
                  <Col md={6}>
                    <div className='reserv-box col-4 bg-white rounded-5 px-3 py-5'>
                        <h1 className='reserv-text text-center'>Reservation</h1>
                    </div>
                  </Col>
                </Row>
            </div>
        </Container>
    </section>
  )
}

export default Hero