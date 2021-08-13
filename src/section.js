import React from 'react';
import './main.css';
import './bootstrap.min.css';
import './font-awesome-4.7.0/css/font-awesome.min.css';
import './font-awesome-4.7.0/fonts/fontawesome-webfont.svg';
import './magnific-popup.css';
import './owl.theme.default.css';
import './owl.carousel.min.css';
import image1 from './components/img/choose-01.jpg';
import image2 from './components/img/choose-02.jpg';
import image3 from './components/img/choose-02.jpg';
import image4 from './components/img/choose-02.jpg';
import image5 from './components/img/choose-03.jpg';
import './components/js/main.js';


function Mysection(){
    return(
        <div>
    <div id="scroll-to-top"><i class="fa fa-arrow-up fa-fw"></i></div>

    <section class="choose-us padding">
        <div class="container">
            <div class="row">

                   <div class="choose-us_title text-center">
                    <h2 class="heading-primary mb-5">What We Do</h2>
                    <p class="mb-5">What are the list of services we are offering you. <b class="btn btn-primary">Kindly find out below:</b>
                        We can assure you that your business is in safe hands.</p>
                </div>
     
     
                <div class="choose-item col-lg-4 col-md-6 mx-auto p-0 mt-5">
                    <div class="choose">
                        <img src={image1} alt="Graphics Design" />
                        <div class="text-center">
                            <i class="icon fa fa-paint-brush fa-2x"></i>
                            <h5>Graphic Design</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa dicta.
                            </p>
                        </div>
                    </div>
                </div>
     
     
                <div class="choose-item col-lg-4 col-md-6 mx-auto p-0 mt-5">
                    <div class="choose">
                        <img src={image2} alt="Web design" />
                        <div class="text-center">
                            <i class="icon fa fa-desktop fa-2x"></i>
                            <h5>Web Design</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula viverra.
                            </p>
                        </div>
                    </div>
                </div>




                <div class="choose-item col-lg-4 col-md-6 mx-auto p-0 mt-5">
                    <div class="choose">
                        <img src={image3} alt="Advertising and Promotion" />
                        <div class="text-center">
                            <i class="icon fa fa-desktop fa-2x"></i>
                            <h5>Advertising and promotion</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula viverra.
                            </p>
                        </div>
                    </div>
                </div>



                <div class="choose-item col-lg-4 col-md-6 mx-auto p-0 mt-5">
                    <div class="choose">
                        <img src={image4} alt="Social Media Management" />
                        <div class="text-center">
                            <i class="icon fa fa-desktop fa-2x"></i>
                            <h5>Social media management</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula viverra.
                            </p>
                        </div>
                    </div>
                </div>


                <div class="choose-item col-lg-4 col-md-6 mx-auto p-0 mt-5">
                    <div class="choose">
                        <img src={image5} alt="Digital Marketing" />
                        <div class="text-center">
                            <i class="icon fa fa-diamond fa-2x"></i>
                            <h5>Digital marketing</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel aliquet quam.
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </section>


  
        </div>
    );
}


export default Mysection;