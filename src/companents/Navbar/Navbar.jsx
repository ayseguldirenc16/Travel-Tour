import React, {useState}from "react";
import "./navbar.css";
import "./navbar.scss"
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";

function Navbar() {
  const [active, setActive]= useState('navBar')
  const showNav =()=>{
    setActive('navBar, activeNavbar')
  }
  const removeNavbar =()=>{
    setActive('navBar ')
  }
  return (
    <>
      <section className="navBar">
        <header className="header flex">
          <div className="logoDiv">
            <a href="#" className="logo flex">
              <h1>
                <MdOutlineTravelExplore className="iconTravel" /> Travel
              </h1>
            </a>
          </div>

          <div className={active}>
            <ul className="navLists flex">
              <li className="navItem">
                <a href="#" className="navLink">
                  Anasayfa
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  Paketlerimiz
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  Alışveriş
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  Hakkımızda
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  Sayfa
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  Yeni Turlarımız
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  İletişim
                </a>
              </li>
              <button className="btn">
                <a href="">İncele</a>
              </button>
            </ul>
            <div className="closeNavbar" onClick={removeNavbar} ><IoCloseCircle className="icon" /></div>
          </div>

          <div className="toggleNavbar" onClick={showNav} >
          <TbGridDots className="icon" />
          </div>
        </header>
      </section>
    </>
  );
}

export default Navbar;
