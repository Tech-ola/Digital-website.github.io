import React from 'react';
import './main.css';
import './bootstrap.min.css';
import './font-awesome-4.7.0/css/font-awesome.min.css';
import './font-awesome-4.7.0/fonts/fontawesome-webfont.svg';
import './magnific-popup.css';
import './owl.theme.default.css';
import './owl.carousel.min.css';
import './components/img/logo.png';
import logo from './components/img/logo.png';
import './components/js/main.js';


 
function Myheader(){
    return(
       <div>
    <nav class="navbar navbar-expand-lg">
        
        <a class="navbar-brand" href="#home">
            
            <img src={logo}  alt="header-Logo" class="logo"/></a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText">
            <span class="icon-bar"><i class="fa fa-bars fa-2x"></i></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav ml-auto line">
                <li class="nav-item">
                    <a class="nav-link" href="#home" data-scroll-nav="0">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#about" data-scroll-nav="1">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#services" data-scroll-nav="2">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#portfolio" data-scroll-nav="3">Work</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#team" data-scroll-nav="4">Team</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#price" data-scroll-nav="5">Price</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#blog" data-scroll-nav="6">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contact" data-scroll-nav="7">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    <header class="home" id="home" data-scroll-index="0">

        <div class="container">
            <div class="row">

                <div class="offset-lg-1 col-lg-10 offset-lg-1 home-content text-center mt-md-5 mt-sm-5">
                    <h3 class="heading-tertiary mb-3">
                        Digital Agency
                    </h3>
                    <h1 class="heading-primary mb-3">
                        Best <span>Creative Agency</span> For your Needs
                    </h1>

                    <p class="mb-5">
						We are committed to getting your business to the right audience. </p>

                    <a href="#0" class="button btn-hover btn-fill mt-5">More About &rarr;</a>
                    <a href="#0" class="button video-btn mt-5"><i class="fa fa-play"></i></a>
                </div>


            </div>
        </div>
        <svg width="100%" height="80%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="wave">
            <title>Wave</title>
            <defs></defs>
            <path id="feel-the-wave" d="" />
        </svg>

        <svg width="100%" height="80%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="wave">
            <title>Wave</title>
            <defs></defs>
            <path id="feel-the-wave-two" d="" />
        </svg>

    </header>
    
    </div>
    );
}

export default Myheader;