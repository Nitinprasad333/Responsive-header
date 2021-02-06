import React from 'react';
import './style.css';
import Logo from '../images/reactlog.png'

const Resheader = () => {

    const navSlide=()=>{
        const burger = document.querySelector('.burger')
        const nav= document.querySelector('.nav-link')
        burger.addEventListener('click',()=>{
            nav.classList.toggle('nav-active')
        })
    }

    const navHandler=()=>{
        navSlide()
    }

    return (
        <div>
            <nav>
            <img src={Logo} style={{height:30, width:30}}/>
            <div className='logo'>
    <h4>React Nav</h4>
            </div>
            <ul className='nav-link'>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
            <div class = 'burger' onClick = {navHandler}>
             <div class = 'line1'></div>
             <div class = 'line2'></div>
             <div class = 'line3'></div>
            </div>
            </nav>
               
        </div>
    );
}

export default Resheader;