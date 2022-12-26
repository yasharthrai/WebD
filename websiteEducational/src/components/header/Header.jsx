import React, { useRef } from "react";
import { Container } from 'reactstrap';
import './Header.css';
import logo from '../../assests/logo.png';

const navLinks = [
    {
      display: "Home",
      url: "#",
    },
    {
      display: "About",
      url: "#",
    },
  
    {
      display: "Courses",
      url: "#",
    },
    {
      display: "Pages",
      url: "#",
    },
    {
      display: "Blog",
      url: "#",
    },
  ];
  

const Header = () => {

    const menuRef = useRef();
    const menuToggle = () => menuRef.current.classList.toggle('active_menu');

     return (
        <div className="header">
            <Container>
                 <div className="navigation d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <h2 className="d-flex align-items-center gap-1">
                            <img src={logo} width='160px' alt="" />
                        </h2>
                    </div>

                    <div className="nav d-flex align-items-center gap-5">
                        <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
                            <ul className="nav__list">
                                {navLinks.map((item, index) => (
                                    <li key={index} className="nav__item">
                                       <a href={item.url}>{item.display}</a>
                                   </li>
                                ))}   
                            </ul>
                        </div>
                    </div>

                    <div className="mobile__menu">
                        <span>
                            <i className="ri-menu-line" onClick={menuToggle}></i>
                        </span>
                    </div>
                 </div>
            </Container>
        </div>
     )
}

export default Header;