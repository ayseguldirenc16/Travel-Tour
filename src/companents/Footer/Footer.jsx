import React ,{useEffect} from 'react'
import './footer.css'
import video2 from '../../assets/video2.mp4'
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import Aos from 'aos';
import 'aos/dist/aos.css'
function Footer() {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <>
      <section className="footer">
        <div className="videoDiv">
        <video src={video2} muted autoPlay loop type='video/mp4'></video>
        </div>
        <div className="secContent container">
          <div className="contactDiv flex">
            <div className="text" data-aos="fade-up">
              <small>Buraya Tıklayınız</small>
              <h2>Tatil Planınızda Sayfamızı incelemeyi unutmayın!</h2>
            </div>
            <div className="inputDiv flex">
              <input type="text" placeholder='Email adresinizi giriniz:' data-aos="fade-up" />
              <button className="btn flex" type='submit'>
                Gönder  <FiSend className='icon' data-aos="fade-up"/>
              </button>
            </div>
          </div>


          <div className="footerCard flex">
            <div className="footerInto flex">
              <div className="logoDiv">
                <a href="#"className='logo flex'>
                <MdTravelExplore  className='icon'/>     Travel.</a>

              </div>

              <div className="footerParagraf" data-aos="fade-up">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur labore iste laboriosam autem explicabo laudantium sequi quidem reiciendis? Dolorum quia voluptate temporibus laudantium, neque quo tempore eveniet facilis error ullam?
                Cum debitis possimus voluptatum, mollitia officiis molestiae voluptas voluptate, optio est maxime neque quae distinctio, placeat recusandae provident odio architecto deserunt illo aliquam aperiam dolores at officia. Illum, natus exercitationem.
              </div>

              <div className="footerSocials flex" data-aos="fade-up">
              <AiOutlineTwitter className='icon'/>
              <AiFillYoutube  className="icon"/>
              <AiFillInstagram className="icon"/>
              </div>
            </div>
            <div className="footerDiv flex">
              <small >En iyi Tatil Planlama Sitesi</small>
              <small  >Detaylı Bilgi İçin Bizlere Ulaşın.</small>
            </div>
            <div className="footerLinks grid">
              {/* ilk kısım */}
              <div className="linkGroup" data-aos="fade-up" data-aos-duration="3000">
                <span className="groupTitle">
                  ŞİRKETİMİZ
                </span>

                <li className="footerList flex">
                <FiChevronRight className='icon' />
                Desteklerimiz
                </li>

                <li className="footerList flex">
                <FiChevronRight className='icon' />
                Sigorta
                </li>

                <li className="footerList flex">
                <FiChevronRight className='icon' />
                KVKK
                </li>

                <li className="footerList flex">
                <FiChevronRight className='icon' />
                Ödeme
                </li>
                <li className="footerList flex">
                <FiChevronRight className='icon' />
                Turizm
                </li>
              </div>
{/* ikinci kısım */}
              <div className="linkGroup" data-aos="fade-up" data-aos-duration="4000">
                <span className="groupTitle">
                ORTAKLAR
                </span>

                <li className="footerList flex">
                <FiChevronRight className='icon' />
                Rezervasyonlar
                </li>

                <li className="footerList flex">
                <FiChevronRight className='icon' />
                Araç Kiralama
                </li>

                <li className="footerList flex">
                <FiChevronRight className='icon' />
                Pansiyon
                </li>

                <li className="footerList flex">
                <FiChevronRight className='icon' />
                Trivago
                </li>
                <li className="footerList flex">
                <FiChevronRight className='icon' />
                Tur Rehberi desteği
                </li>
              </div>
              {/* 3.kısım */}
              <div className="linkGroup" data-aos="fade-up" data-aos-duration="5000">
                <span className="groupTitle">
                  Yeni Geziler
                </span>

                <li className="footerList flex">
                <FiChevronRight className='icon' />
                Londra
                </li>

                <li className="footerList flex">
                <FiChevronRight className='icon' />
                California
                </li>

                <li className="footerList flex">
                <FiChevronRight className='icon' />
                Endonezya
                </li>

                <li className="footerList flex">
                <FiChevronRight className='icon' />
                Avrupa
                </li>
                <li className="footerList flex">
                <FiChevronRight className='icon' />
                Avusturya
                </li>
              </div>
            </div>
            

          </div>


        </div>
      </section>
    </>
  )
}

export default Footer
