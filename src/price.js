import React from 'react';
import './main.css';
import './bootstrap.min.css';
import './font-awesome-4.7.0/css/font-awesome.min.css';
import './font-awesome-4.7.0/fonts/fontawesome-webfont.svg';
import './magnific-popup.css';
import './owl.theme.default.css';
import './owl.carousel.min.css';
import './components/js/main.js';


 function Pricing(){
     return(
         <div>
             <section class="price padding" id="price" data-scroll-index="5">
        <div class="container">


            <div class="text-center">
                <h2 class="heading-primary mb-5">Pricing Table</h2>
                <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nisi soluta, maxime
                    doloribus numquam autem adipisci. Id, nisi! Quo, sequi aut? Nulla excepturi iure sit.</p>
            </div>


            <div class="pricing-tables text-center">
                <div class="row">


                    <div class="col-lg-3 col-md-6 col-sm-10 mx-auto">
                        <div class="item mb-md50">
                            <div class="type">
                                <h4>Basic</h4>
                            </div>

                            <div class="value">
                                <h3><span>$</span>2</h3>
                                <span class="per">/ Month</span>
                            </div>

                       
                            <div class="features">
                                <ul>
                                    <li>2 GB Disk Space</li>
                                    <li>1 Domain Names</li>
                                    <li>2 Email Address</li>
                                    <li>Enhanced Security</li>
                                    <li>Unlimited Support</li>
                                </ul>
                            </div>

                            <div class="order">
                                <a href="#0" class="button btn-hover btn-fill">
                                    <span>Order Now</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-10 mx-auto">
                        <div class="item mb-md50">
                            <div class="type">
                                <h4>Standard</h4>
                            </div>

                            <div class="value">
                                <h3><span>$</span>10</h3>
                                <span class="per">/ Month</span>
                            </div>

                            <div class="features">
                                <ul>
                                    <li>8 GB Disk Space</li>
                                    <li>10 Domain Names</li>
                                    <li>4 Email Address</li>
                                    <li>Enhanced Security</li>
                                    <li>Unlimited Support</li>
                                </ul>
                            </div>

                            <div class="order">
                                <a href="#0" class="button btn-hover btn-fill">
                                    <span>Order Now</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    

                    <div class="col-lg-3 col-md-6 col-sm-10 mx-auto">
                        <div class="item active mb-md50">

                            <div class="type">
                                <h4>Premium</h4>
                            </div>

                            <div class="value">
                                <h3><span>$</span>30</h3>
                                <span class="per">/ Month</span>
                            </div>

                            <div class="features">
                                <ul>
                                    <li>20 GB Disk Space</li>
                                    <li>15 Domain Names</li>
                                    <li>10 Email Address</li>
                                    <li>Enhanced Security</li>
                                    <li>Unlimited Support</li>
                                </ul>
                            </div>

                            <div class="order">
                                <a href="#0" class="button btn-hover btn-fill">
                                    <span>Order Now</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    

                    <div class="col-lg-3 col-md-6 col-sm-10 mx-auto">
                        <div class="item">
                            <div class="type">
                                <h4>Platinum</h4>
                            </div>

                            <div class="value">
                                <h3><span>$</span>80</h3>
                                <span class="per">/ Month</span>
                            </div>

                            <div class="features">
                                <ul>
                                    <li>50 GB Disk Space</li>
                                    <li>30 Domain Names</li>
                                    <li>20 Email Address</li>
                                    <li>Enhanced Security</li>
                                    <li>Unlimited Support</li>
                                </ul>
                            </div>

                            <div class="order">
                                <a href="#0" class="button btn-hover btn-fill">
                                    <span>Order Now</span>
                                </a>
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
 export default Pricing;