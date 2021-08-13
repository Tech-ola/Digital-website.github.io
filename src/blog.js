import React from 'react';
import './main.css';
import './bootstrap.min.css';
import './font-awesome-4.7.0/css/font-awesome.min.css';
import './font-awesome-4.7.0/fonts/fontawesome-webfont.svg';
import './magnific-popup.css';
import './owl.theme.default.css';
import './owl.carousel.min.css';
import './components/js/main.js';



function Blog(){
    return(
        <div>
            <section class="blog padding" id="blog" data-scroll-index="6">
        <div class="container">
            <div class="row">


                <div class="text-center">
                    <h2 class="heading-primary mb-5">Our Blog</h2>
                    <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
                        dolores! Iure perspiciatis, minus modi ratione est maiores. Perferendis, porro aperiam.</p>
                </div>


                <div class="blog-list col-lg-4 col-md-6 col-sm-10 mx-auto">
                    <div class="blog-img">
                        <div class="post-date">
                            <span class="date">20</span>
                            <span class="month">feb</span>
                        </div>
                        <img src="./img/hero-03.jpg" alt="blog" />
                    </div>
                    <div class="blog-item">
                        <div class="post-title">
                            <a href="#0">
                                <h3>5 Best Responsive Web Design Practices</h3>
                            </a>
                        </div>
                        <div class="post-content mb-5">
                            <p class="mb-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit minima placeat aut
                                obcaecati iusto qui.
                            </p>
                            <a href="#0" class="button">Read More<i class="fa fa-long-arrow-right"></i></a>
                        </div>
                        <div class="post-meta mt-5">
                            <ul>
                                <li>
                                    <i class="fa fa-tags"></i>
                                    <span>Web Design</span>
                                </li>
                                <li>
                                    <i class="fa fa-book"></i>
                                    <span>7 mins read</span>
                                </li>
                                <li>
                                    <i class="fa fa-comment"></i>
                                    <a href="#0">4</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div class="blog-list col-lg-4 col-md-6 col-sm-10 mx-auto">
                    <div class="blog-img">
                        <div class="post-date">
                            <span class="date">13</span>
                            <span class="month">jul</span>
                        </div>
                        <img src="./img/hero-04.jpg" alt="blog" />
                    </div>
                    <div class="blog-item">

                        <div class="post-title">
                            <a href="#0">
                                <h3> The Most Important Rule in UX Design </h3>
                            </a>
                        </div>
                        <div class="post-content mb-5">
                            <p class="mb-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maxime in consectetur.
                            </p>
                            <a href="#0" class="button">Read More<i class="fa fa-long-arrow-right"></i></a>
                        </div>

                        <div class="post-meta mt-5">
                            <ul>
                                <li>
                                    <i class="fa fa-tags"></i>
                                    <span>User Experience</span>
                                </li>
                                <li>
                                    <i class="fa fa-book"></i>
                                    <span>3 mins read</span>
                                </li>
                                <li>
                                    <i class="fa fa-comment"></i>
                                    <a href="#0">8</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div class="blog-list col-lg-4 col-md-6 col-sm-10 mx-auto">
                    <div class="blog-img">
                        <div class="post-date">
                            <span class="date">22</span>
                            <span class="month">apr</span>
                        </div>
                        <img src="./img/hero-02.jpg" alt="blog" />
                    </div>
                    <div class="blog-item">

                        <div class="post-title">
                            <a href="#0">
                                <h3>5 Business Trends Set to Rule the Industry</h3>
                            </a>
                        </div>
                        <div class="post-content mb-5">
                            <p class="mb-5">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi repudiandae itaque
                                enim architecto.
                            </p>
                            <a href="#0" class="button">Read More<i class="fa fa-long-arrow-right"></i></a>
                        </div>

                        <div class="post-meta mt-5">
                            <ul>
                                <li>
                                    <i class="fa fa-tags"></i>
                                    <span>Business & Tech</span>
                                </li>
                                <li>
                                    <i class="fa fa-book"></i>
                                    <span>5 mins read</span>
                                </li>
                                <li>
                                    <i class="fa fa-comment"></i>
                                    <a href="#0">7</a>
                                </li>
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

export default Blog;