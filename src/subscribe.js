import React from 'react';
import './main.css';
import './bootstrap.min.css';
import './font-awesome-4.7.0/css/font-awesome.min.css';
import './font-awesome-4.7.0/fonts/fontawesome-webfont.svg';
import './magnific-popup.css';
import './owl.theme.default.css';
import './owl.carousel.min.css';
import './components/js/main.js';



function Suscribe(){
    return(
        <div>
            <section class="subscribe text-center">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="subs-container">
                        <h2 class="heading-tertiary mb-3">Subscribe Now</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Id nobis
                            quas sunt suscipit aliquid.</p>
                        <form class="form mt-3">
                            <div class="form-check mb-3"> <label class="form-check-label"> <input type="checkbox"
                                        name="checkbox"/> <small>Yes, I would like to receive communications by email.</small></label>
                            </div>
                            <div class="input-group">
                                <input name="email" type="email" class="form-control" placeholder="Enter your email"
                                    required/>
                                <button class="btn" type="submit"><i class="fa fa-paper-plane"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
        
        
    
    )
}

export default Suscribe;