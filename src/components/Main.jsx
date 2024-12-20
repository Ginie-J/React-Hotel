import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Main = () => {
  // 애니메이션을 위한 variants 설정(hidden과 visible에 대한 애니메이션 값을 지정해줘야 한다)
  const variants = {
    hidden: { opacity: 0, y: 20 },  // 초기 상태: 보이지 않음, 아래쪽으로 밀림
    visible: { opacity: 1, y: 0, transition: { duration: 1 } } // 보이는 상태: 위로 살짝 떠오르며 opacity 1
  };

  return (
    <section id='main'>
      <Container fluid className='padding-side'>
        <div className='main-container'>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={variants} // 애니메이션 효과 연결
            viewport={{ once: true }}
          >
            <img src="/images/rooftop005.jpg" alt="" className='visible-img'/>
          </motion.div>
          <div className='main-text-box align-items-right'>
            <h1>EZ Hotel만의 특별한 시간</h1>
            <p>우리 호텔에서 특별한 시간을 보내보세요. 우리 호텔에서 특별한 시간을 보내보세요. 우리 호텔에서 특별한 시간을 보내보세요. 우리 호텔에서 특별한 시간을 보내보세요. 우리 호텔에서 특별한 시간을 보내보세요. </p>
            <br/>
            <p>깔끔한 시설과 훌륭한 서비스로 고객을 모십니다. 깔끔한 시설과 훌륭한 서비스로 고객을 모십니다. 깔끔한 시설과 훌륭한 서비스로 고객을 모십니다. 깔끔한 시설과 훌륭한 서비스로 고객을 모십니다. 깔끔한 시설과 훌륭한 서비스로 고객을 모십니다. 깔끔한 시설과 훌륭한 서비스로 고객을 모십니다. </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Main;
