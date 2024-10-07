import React from 'react'
import {Container, Col, Row} from 'react-bootstrap';

const Hero = () => {
  return (
    <section id='hero'>
        <Container fluid className='padding-side'>
            <div className='d-flex d-height rounded-5 overflow-hidden position-relative'>
                <img src="/images/pool003.jpg" alt=""/>
                <p className='hero-text text-shadow'>Happy Holliday in<br/> EZ Hotel</p>
                <div className='reserv-box col-4 bg-white rounded-5 px-3 py-5'>
                    <h1 className='reserv-text text-center'>Reservation</h1>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Hero