import React from 'react';
import './main.css';
import './bootstrap.min.css';
import './font-awesome-4.7.0/css/font-awesome.min.css';
import './font-awesome-4.7.0/fonts/fontawesome-webfont.svg';
import './magnific-popup.css';
import './owl.theme.default.css';
import './owl.carousel.min.css';
import image10 from './components/img/portfolio/portfolio-01.jpg';
import image11 from './components/img/portfolio/portfolio-02.jpg';
import './components/js/main.js';




function Portfolio(){
    return(
        <div>
            
            <section class="portfolio padding" id="portfolio" data-scroll-index="3">
        <div class="container-fluid">

               <div class="port-title text-center">
                <h2 class="heading-primary mb-5">Recent Works</h2>
                <p class="mb-5">We provide high standard digital marketing services.</p>
            </div>
            

            
            <nav>
                <ul class="simplefilter filter-port">
                    <li class="active button" data-filter="all">All</li>
                    <li class="button" data-filter="1">Brand</li>
                    <li class="button" data-filter="2">Photoshop</li>
                    <li class="button" data-filter="3">Web Design</li>
                    <li class="button" data-filter="4">Graphics</li>
                </ul>
            </nav>
            

            <div class="row">
            
                <div class="filtr-container">

            
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 filtr-item" data-category="1">
                        <div class="port-caption">
            
                            <img src={image10} alt="portfolio-01" />
            
                            <div class="overlay">
                                <div class="view-more">
                                    <a class="modal-image" href={"./img/portfolio/portfolio-01.jpg"}>
                                        <i class="fa fa-search fa-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

            
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 filtr-item" data-category="3">
                        <div class="port-caption">
            
                            <img src={image11} alt="portfolio-02" />
            
                            <div class="overlay">
                                <div class="view-more">
                                    <a class="modal-image" href="img/portfolio/portfolio-02.jpg">
                                        <i class="fa fa-search fa-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

            
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 filtr-item" data-category="1">
                        <div class="port-caption">
            
                            <img src="img/portfolio/portfolio-03.jpg" alt="portfolio-03" />
            
                            <div class="overlay">
                                <div class="view-more">
                                    <a class="modal-image" href="img/portfolio/portfolio-03.jpg">
                                        <i class="fa fa-search fa-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

            
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 filtr-item" data-category="2">
                        <div class="port-caption">
            
                            <img src="img/portfolio/portfolio-04.jpg" alt="portfolio-04" />
            
                            <div class="overlay">
                                <div class="view-more">
                                    <a class="modal-image" href="img/portfolio/portfolio-04.jpg">
                                        <i class="fa fa-search fa-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

            
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 filtr-item" data-category="3">
                        <div class="port-caption">
            
                            <img src="img/portfolio/portfolio-05.jpg" alt="portfolio-05" />
            
                            <div class="overlay">
                                <div class="view-more">
                                    <a class="modal-image" href="img/portfolio/portfolio-05.jpg">
                                        <i class="fa fa-search fa-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

            
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 filtr-item" data-category={4}>
                        <div class="port-caption text-center">
            
                            <img src="img/portfolio/portfolio-06.jpg" alt="portfolio-06" />
            
                            <div class="overlay">
                                <div class="view-more">
                                    <a class="modal-image" href="img/portfolio/portfolio-06.jpg">
                                        <i class="fa fa-search fa-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <a href="#0" class="button btn-hover btn-fill mt-5">Explore More &rarr;</a>


            </div>
        </div>
    </section>
    

        </div>
        
    );
}

export default Portfolio;