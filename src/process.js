import React from 'react';
import './main.css';
import './bootstrap.min.css';
import './font-awesome-4.7.0/css/font-awesome.min.css';
import './font-awesome-4.7.0/fonts/fontawesome-webfont.svg';
import './magnific-popup.css';
import './owl.theme.default.css';
import './owl.carousel.min.css';
import './components/js/main.js';



function Process(){
    return(
        <div>
            <section class="process">
        <div class="container">

            <div class="row">
                <div class="text-center col-lg-12">
                    <h2 class="heading-primary mb-5">Work Process</h2>
                    <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, numquam aut tenetur
                        fugiat cumque nostrum adipisci.</p>
                </div>
            </div>


            <div class="row">
                <div class="col-lg-3 col-md-6 mx-auto">
                    <div class="p-list mb-md50">
                        <span class="icon"><i class="fa fa-exclamation"></i></span>
                        <h6 class="mb-3 mt-5">Discussion</h6>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 mx-auto">
                    <div class="p-list mb-md50">
                        <span class="icon"><i class="fa fa-refresh"></i> </span>
                        <h6 class="mb-3 mt-5">Strategy</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>


                <div class="col-lg-3 col-md-6 mx-auto">
                    <div class="p-list">
                        <span class="icon"><i class="fa fa-code"></i></span>
                        <h6 class="mb-3 mt-5">Testing</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>


                <div class="col-lg-3 col-md-6 mx-auto">
                    <div class="p-list mb-sm50">
                        <span class="icon"><i class="fa fa-hourglass-start"></i></span>
                        <h6 class="mb-3 mt-5">Reporting</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>


            </div>
        </div>
    </section>
        </div>
    );
}

export default Process;