import React from 'react'
import {Container, Col, Row} from 'react-bootstrap';
import DatePickers from './DatePickers';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';



const Hero = () => {
  return (
    <section id='hero'>
        <Container fluid className='padding-side'>
            <div className=' d-height rounded-5 overflow-hidden position-relative'>
              <div className="swiper-box">
                <Swiper 
                  modules={[Pagination, Autoplay]}
                  slidesPerView={"auto"}
                  loop={true}
                  autoplay={{delay : 5000}}
                  pagination={{dynamicBullets:true}}
                >
                  <SwiperSlide><img src="/images/pool003.jpg" alt=""/></SwiperSlide>
                  <SwiperSlide><img src="/images/rooftop008.jpg" alt="" /></SwiperSlide>
                  <SwiperSlide><img src="/images/party001.jpg" alt="" /></SwiperSlide>
                  <SwiperSlide><img src="/images/rooftop006.jpg" alt="" /></SwiperSlide>
                </Swiper>
              </div>
                <Row className='abrow'>
                  <Col md={7} className='textbox'>
                    <p className='hero-text'>Happy Holliday in<br/> EZ Hotel</p>
                  </Col>
                  <Col md={5}>
                    <div className='reserv-box col-4 rounded-5 px-3 py-5'>
                        <h1 className='reserv-text text-center'>Reservation</h1>
                        <DatePickers/>
                    </div>
                  </Col>
                </Row>
            </div>
        </Container>
    </section>
  )
}

export default Hero