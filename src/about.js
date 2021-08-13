import React from 'react';
import './main.css';
import './bootstrap.min.css';
import './font-awesome-4.7.0/css/font-awesome.min.css';
import './font-awesome-4.7.0/fonts/fontawesome-webfont.svg';
import './magnific-popup.css';
import './owl.theme.default.css';
import './owl.carousel.min.css';
import image6 from './components/img/about.jpg';
import './components/js/main.js';


function Myabout(){
    return(
        <div>
    <section class="about padding" id="about" data-scroll-index="1">
        <div class="container">
            <div class="row">

            <div class="col-lg-6 mt-lg-5">
                    <div class="img-background"></div>
                    <img src={image6} class="about-img" alt="About"/>
                </div>
         
         
         
                 <div class="col-lg-6 mt-md-5 mt-sm-5 mt-0 about-content">
                    <h2 class="heading-primary mb-5">
                        About Us
                    </h2>
                    <h3 class="heading-tertiary mt-3 mb-4">
                        Who We Are
                    </h3>
                    <p class="mb-3">
                        To grow your business in today’s digital world, you need effective digital marking strategy and promotion with relevant content that speak the language of your audience. This is not enough, you need the right people, those who can find, connect, retain and turn your prospect into loyal customer. To put all this in place, this is what we do here; we have the right people for the job, those who can put your business directly in front of customers who need it. Whether you are a new brand or established, we can help you grow your business with our digital marketing skills. </p>
                    <p class="mb-5">
                        Digital marketing agency stand as a unique alternative to traditional marketing and provide memorable services to our client. We are committed to grow your business with the power of digital marketing, social media management, PPC, content strategy, Paid Search (SEM), Paid Social campaign and Web Design & Development.  </p>
                    <a href="#0" class="button btn-hover btn-fill mt-5">Read More &rarr;</a>

         
                    <div class="counts">

                        <div class="row">
         
                            <div class="col-lg-4 col-md-4 col-sm-4 mx-auto">
                                <div class="counter text-center">
                                    <div class="counting-icon">
                                        <i class="fa fa-rocket fa-2x"></i>
                                    </div>
         
                                    <span class="count" data-from="0" data-to="500">10</span>
         
                                    <h4>Completed Projects</h4>
                                </div>
                            </div>
         

                            <div class="col-lg-4 col-md-4 col-sm-4 mx-auto">
                                <div class="counter text-center">
                                    <div class="counting-icon">
                                        <i class="fa fa-trophy fa-2x"></i>
                                    </div>
         
                                    <span class="count" data-from="0" data-to="250">20</span>
         
                                    <h4>Digital design Awards</h4>
                                </div>
                            </div>
         

                            <div class="col-lg-4 col-md-4 col-sm-4 mx-auto">
                                <div class="counter text-center">
                                    <div class="counting-icon">
                                        <i class="fa fa-users fa-2x"></i>
                                    </div>
         
                                    <span class="count" data-from="0" data-to="980">50</span>
         
                                    <h4>Satisfied Customers</h4>
                                </div>
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

export default Myabout;