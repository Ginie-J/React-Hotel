import React from 'react'
import {Container, Col, Row} from 'react-bootstrap';
import { useEffect } from 'react';
import { useAnimation, motion, inView } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/*const observerAnimation = () => {
  const animation = useAnimation();
  const {ref, inView} = useInView();

  useEffect(()=>{
    if(inView){
      animation.start('visible');
    }
  }, [animation, inView]);
  return (ref, animation);
};*/

const Main = () => {
  return (
    <section id='main'>
        <Container fluid className='padding-side'>
            <div className='main-container'>
            <motion.div
                
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <img src="/images/rooftop005.jpg" alt="" className='visible-img'/>
            </motion.div>
              <h1>EZ Hotel만의 특별한 시간</h1>
            </div>
        </Container>
    </section>
  )
}

export default Main