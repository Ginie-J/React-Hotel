import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import { addDays } from 'date-fns'
import "react-datepicker/dist/react-datepicker.css"
import { FaRegCalendarAlt } from "react-icons/fa";

const DatePickers = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(new Date() + 1, 1));
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(1);
  const [stayDuration, setStayDuration] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  //숙박기간 계산 및 에러처리
  useEffect(()=>{
    if(endDate <= startDate){
      setErrorMessage('체크아웃 날짜는 체크인 날짜보다 이후여야 합니다.');
      setStayDuration(0);
    }else{
      setErrorMessage("");
      const timeDiff = endDate.getTime() - startDate.getTime(); //unix timestamp(그냥 숫자)로 바꿔서 빼준다
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      setStayDuration(daysDiff);
    }
  }, [startDate, endDate]) //startDate나 endDate가 바뀔때 가동
  //예약하기 버튼
  const handleReserv = () => {
    console.log("체크인 :" + startDate);
    console.log("체크아웃 :" + endDate);
    console.log("객실 수 :" + rooms);
    console.log("인원 :" + guests);
  }
  return (
    <>
      <form id='yForm' className='form-group flex-wrap px-5 py-3 d-flex'>
        <div className="col-lg-12 my-4">
          <label className='form-label'>체크인</label>
          <div className="position-relaive bg-transparent">
            <DatePicker selected={startDate} 
                        onChange={(date)=>setStartDate(date)}
                        minDate={new Date()}  
                        className='form-control' 
                        dateFormat="yyyy/MM/dd"
                        showIcon 
                        icon={<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg>}/>
          </div>
        </div>
        <div className="col-lg-12 my-4">
          <label className='form-label'>체크아웃</label>
          <div className="position-relaive bg-transparent">
          <div className="position-relaive bg-transparent">
            <DatePicker selected={endDate} 
                        onChange={(date)=>setEndDate(date)}
                        minDate={addDays(startDate, 1)}
                        className='form-control' 
                        dateFormat="yyyy/MM/dd"
                        showIcon 
                        icon={<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg>}/>
          </div>
          </div>
        </div>
        <div className='col-lg-12'>
          {errorMessage ? <p className='text-danger'>{errorMessage}</p>: <p className='duration-text'>{stayDuration} 박</p>}
        </div>
        <div className="col-lg-6 my-4">
          <label className='form-label'>객실 수</label>
          <div className="position-relaive bg-transparent d-flex align-items-center">
            <div className="col-8">
                <input type="number" 
                        value={rooms}
                        onChange={(e)=>setRooms(e.target.value)} 
                        name='quantity' 
                        className='form-control text-black-50 ps-3'/>
            </div>
            <div className="col-2 ms-1">개</div>
          </div>
        </div>
        <div className="col-lg-6 my-4">
          <label className='form-label'>인원</label>
          <div className="position-relaive bg-transparent d-flex align-items-center">
            <div className="col-8">
              <input type="number" 
                    value={guests}
                    onChange={(e)=>setGuests(e.target.value)} 
                    name='person' 
                    className='form-control text-black-50 ps-3'/>
            </div>
            <div className="col-2 ms-1">명</div>
          </div>
        </div>
        <div className="d-grid col-12">
          <button className="btn btn-arrow btn-primary mt-3 reserv-button" onClick={handleReserv} style={{fontWeight:'bold', color: '#333'}}>예약하기</button>
        </div>
      </form>
    </>
  )
}

export default DatePickers