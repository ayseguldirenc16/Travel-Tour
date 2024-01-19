import React from 'react'
import './footer.css'
import video3 from '../../assets/video3.mp4'
import { FiSend } from "react-icons/fi";
function Footer() {
  return (
    <>
      <section className="footer">
        <div className="videoDiv">
        <video src={video3} muted autoPlay loop type='video/mp4'></video>
        </div>
        <div className="secContent container">
          <div className="contactDiv flex">
            <div className="text">
              <small>Buraya Tıklayınız</small>
              <h2>Tatil Planınızda Sayfamızı incelemeyi unutmayın!</h2>
            </div>
            <div className="inputDiv flex">
              <input type="text" placeholder='Email adresinizi giriniz:' />
              <button className="btn flex" type='submit'>
              <FiSend className='icon'/>
              </button>
            </div>
          </div>


        </div>
      </section>
    </>
  )
}

export default Footer
