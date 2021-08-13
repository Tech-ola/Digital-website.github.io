import React from 'react'
import './main.css';
import './bootstrap.min.css';
import './font-awesome-4.7.0/css/font-awesome.min.css';
import './font-awesome-4.7.0/fonts/fontawesome-webfont.svg';
import './magnific-popup.css';
import './owl.theme.default.css';
import './owl.carousel.min.css';
import './components/js/main.js';

function Myskills(){
    return( <div>
        
    <section class="skills padding">
        <script></script>
        <div class="container">
            <div class="row">

                <div class="col-lg-6 mx-auto skills-left">
                    <h2 class="heading-secondary mb-5">Our<span>Skills</span></h2>
                    <div class="content">
                        <div class="skill">


                            <div class="progress-item">
                                <h6>Web Design</h6>
                                <div class="skills-progress">
                                    <span data-value="95%"></span>
                                </div>
                            </div>


                            <div class="progress-item">
                                <h6>Graphic Design</h6>
                                <div class="skills-progress">
                                    <span data-value="80%"></span>
                                </div>
                            </div>


                            <div class="progress-item">
                                <h6>Web Developement</h6>
                                <div class="skills-progress">
                                    <span data-value="90%"></span>
                                </div>
                            </div>

                            <div class="progress-item">
                                <h6>Photoshop</h6>
                                <div class="skills-progress">
                                    <span data-value="92%"></span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div class="col-lg-6 mx-auto skills-right">
                    <h2 class="heading-secondary mb-5">Our Mission and<span> Vision</span></h2>
                    <p>Our vision is to establish a standard and world class digital marketing agencies whose services and brand will not only be accepted in Nigeria, but also in other parts of the world.
                    Our mission is to provide professional and highly creative result oriented digital marketing services and other related advisory and consulting services that will assist businesses, individuals and non-profit organizations in promoting their brands and reaching out to a wide range of potential customers all over the globe.
                    </p>
                    <p>We want to build a digital marketing agency that can favorably compete with other leading brands in the digital marketing agencies industry.
                    </p>
                </div>


            </div>
        </div>
    </section>


    </div>);
}

export default Myskills;