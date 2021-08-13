import React from 'react';
import './main.css';
import './bootstrap.min.css';
import './font-awesome-4.7.0/css/font-awesome.min.css';
import './font-awesome-4.7.0/fonts/fontawesome-webfont.svg';
import './magnific-popup.css';
import './owl.theme.default.css';
import './owl.carousel.min.css';
import image7 from './components/img/team/team-02.jpg';
import image8 from './components/img/team/team-01.jpg';
import image9 from './components/img/team/team-03.jpg';
import './components/js/main.js';



function Team(){
    return(
        <div>
            <section class="team padding" id="team" data-scroll-index="4">
        <div class="container">

            
            <div class="text-center">
                <h2 class="heading-primary mb-5">Our Team </h2>
                <p class="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam magnam nihil dolores
                    maxime aspernatur saepe.</p>
            </div>
            

            <div class="row mt-30">

            
                <div class="col-lg-4 col-md-6 col-sm-6 mx-auto">
                    <div class="team-info">
                        <img src={image7} alt="team" />
                        <div class="view-content">
                            <h3 class="title">Sophia</h3>
                            <ul class="icon">
                                <li><a href="#0"><i class="fa fa-facebook fa-fw"></i></a></li>
                                <li><a href="#0"><i class="fa fa-twitter fa-fw"></i></a></li>
                                <li><a href="#0"><i class="fa fa-instagram fa-fw"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            

                <div class="col-lg-4 col-md-6 col-sm-6 mx-auto">
                    <div class="team-info">
                        <img src={image8} alt="team" />
                        <div class="view-content">
                            <h3 class="title">Alex Smith</h3>
                            <ul class="icon">
                                <li><a href="#0"><i class="fa fa-facebook fa-fw"></i></a></li>
                                <li><a href="#0"><i class="fa fa-twitter fa-fw"></i></a></li>
                                <li><a href="#0"><i class="fa fa-instagram fa-fw"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            

                <div class="col-lg-4 col-md-6 col-sm-6 mx-auto">
                    <div class="team-info">
                        <img src={image9} alt="team" />
                        <div class="view-content">
                            <h3 class="title">Emily</h3>
                            <ul class="icon">
                                <li><a href="#0"><i class="fa fa-facebook fa-fw"></i></a></li>
                                <li><a href="#0"><i class="fa fa-twitter fa-fw"></i></a></li>
                                <li><a href="#0"><i class="fa fa-instagram fa-fw"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
        </div>
    );
}


export default Team;