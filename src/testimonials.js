import React from 'react';
import './main.css';
import './bootstrap.min.css';
import './font-awesome-4.7.0/css/font-awesome.min.css';
import './font-awesome-4.7.0/fonts/fontawesome-webfont.svg';
import './magnific-popup.css';
import './owl.theme.default.css';
import './owl.carousel.min.css';
import image12 from './components/img/testimonial/test-01.jpg';
import './components/js/main.js';



function Testimonials(){
    return(
        <div>

            <section class="test padding">
        <div class="container">
            <div class="row">

                
                <div class="test-title text-center">
                    <h2 class="heading-primary mb-5">What Our Clients Say</h2>
                    <p class="mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, doloremque minus.
                        Harum, voluptatum ad maiores in quaerat veritatis iste consequatur atque.Lorem ipsum dolor sit
                        amet consectetur adipisicing elit.</p>
                </div>
                

                <div class=" offset-md-2 col-md-8 col-1g-12 offset-md-2 mx-auto">
                    <div class="testimonials text-center">
                        <div class="owl-carousel owl-theme">

                
                             <div class="testimo">
                                <div class="client-area">
                                    <div class="img">
                                        <div class="author">
                                            <img src={image12} alt="testimonial" />
                                        </div>
                                    </div>
                                    <h6>Emily</h6>
                                    <span>Envato Customer</span>
                                </div>
                                <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis
                                    assumenda nulla ullam ad quibusdam voluptatum, exercitationem autem sequi
                                    excepturi. "</p>
                            </div>
                
                
                               <div class="testimo">
                                <div class="client-area">
                                    <div class="img">
                                        <div class="author">
                                            <img src="components/img/testimonial/test-02.jpg" alt="testimonial" />
                                        </div>
                                    </div>
                                    <h6>James Smith</h6>
                                    <span>Envato Customer</span>
                                </div>
                                <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis
                                    assumenda nulla ullam ad quibusdam voluptatum, exercitationem autem sequi
                                    excepturi. "</p>
                            </div>
                
                
                            <div class="testimo">
                                <div class="client-area">
                                    <div class="img">
                                        <div class="author">
                                            <img src="components/img/testimonial/test-03.jpg" alt="testimonial" />
                                        </div>
                                    </div>
                                    <h6>Sophia</h6>
                                    <span>Envato Customer</span>
                                </div>
                                <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis
                                    assumenda nulla ullam ad quibusdam voluptatum, exercitationem autem sequi
                                    excepturi. "</p>
                            </div>
                

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
}
export default Testimonials;