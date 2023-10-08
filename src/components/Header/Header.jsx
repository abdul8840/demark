import React from 'react';
import "./header.css";

// const nav__links =[
//     {
//         path:'#home',
//         display:'Home'
//     },
    
//     {
//         path:'#about',
//         display:'About'
//     },
    
//     {
//         path:'/service',
//         display:'Service'
//     },
    
//     {
//         path:'#projects',
//         display:'Projects'
//     },
    
//     {
//         path:'#blog',
//         display:'Blog'
//     }

// ]

const Header = () => {
  return (
    <header className='header'>
        <div className='container'>
            <div className='nav_wrapper'>
                <div className='logo'>
                    <h2>Demark</h2>
                    
                </div>

            {/* ========================= nevigation bar ===================== */}

                <div className="navigation">
                    <ul className="menu">
                        {/* {
                            nav__links.map((item,index)=>(
                                <li className="menu__item">
                                    <a href={item.path} className="menu__link">{item.display}</a>
                                </li>
                            ))
                        } */}

                        <li className="menu__item">
                            <a href="/" className="menu__link">Home</a>
                            <a href="/about" className="menu__link">About Us</a>
                            <a href="/services" className="menu__link">Services</a>
                            <a href="/portfolio" className="menu__link">Portfolio</a>
                            <a href="/Contactus" className="menu__link">Contact Us</a>
                        </li>

                    </ul>
                </div>

                {/* ================== light mode ============== */}

                <div className="light_mode">
                    <span><i class="ri-sun-line"></i>Light Mode</span>
                </div>

            </div>
        </div>
    </header>
  )
}

export default Header