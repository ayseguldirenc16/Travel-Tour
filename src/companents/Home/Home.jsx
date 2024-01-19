import React , {useEffect} from 'react'
import './home.css'
import './home.scss'
import video1 from '../../assets/video1.mp4'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import Aos from 'aos';
import 'aos/dist/aos.css'
function Home() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])


  return (
    <>
      <section className="home">
        <div className="overlay"></div>
        <video src={video1} muted autoPlay loop type='video/mp4'></video>

        <div className="homeContent container">
          <div className="textDiv">
            <span data-aos="fade-up" className="smallText">
              Tüm Paketlerimiz
            </span>

            <h1  data-aos="fade-up"  className="homeTitle">
              Tatilinizi Seçin
            </h1>
          </div>


          <div  data-aos="fade-up" className="cardDiv grid">
            <div className="destinationInput">
              <label htmlFor="city">Hedef Noktanızı Seçiniz:</label>
              <div className="input flex">
                <input type="text" placeholder='Nereye Gitmek İstersin?' />
                <GrLocation  className='icon'/>
              </div>
            </div>

            <div className="dateInput">
              <label htmlFor="date">Tarih Seçiniz:</label>
              <div className="input flex">
                <input type="date" />
              </div>
            </div>

            <div className="priceInput">
              <div className="label_total flex">
                <label htmlFor="price">Max Fiyat</label>
                <h3 className='total'>150.000₺</h3>
              </div>
              <div className="input flex">
                <input type="range" max="150000" min="5000" />
              </div>
            </div>
            <div className="searchOptions flex">
            <HiFilter  className='icon'/>
            <span>Filtrele</span>
            </div>
          </div>

          <div  data-aos="fade-up"  className="homeFooterIcons flex">
            <div className="rightIcons">
            <FiFacebook className='icon' />
            <FaInstagram className='icon'/>
            <CiYoutube className='icon' />
            </div>

            <div className="leftIcons">
            <BsListTask className='icon' />
            <TbApps className='icon'/>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
