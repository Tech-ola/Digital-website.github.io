import React from 'react';
import './main.css';
import './bootstrap.min.css';
import './font-awesome-4.7.0/css/font-awesome.min.css';
import './font-awesome-4.7.0/fonts/fontawesome-webfont.svg';
import './magnific-popup.css';
import './owl.theme.default.css';
import './owl.carousel.min.css';
import './components/js/main.js';

function Contact(){
    return(
        <div>
                <section class="contact padding" id="contact" data-scroll-index="7">
        <div class="container">


            <div class="text-center">
                <h2 class="heading-primary mb-5"><span> Get In Touch</span></h2>
                <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                    aperiam consectetur rem odit in natus.</p>
            </div>

            <div class="row text-center">
                <div class="col-lg-3 col-md-6 col-sm-8 mx-auto">
                    <div class="contact-info">
                        <i class="fa fa-map fa-fw"></i>
                        <h5><span>Address:</span></h5>
                        <p>Lagos, Nigeria</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-8 mx-auto">
                    <div class="contact-info">
                        <i class="fa fa-phone fa-fw"></i>
                        <h5><span>Mobile:</span></h5>
                        <p>+516-892-6997, <br/>+585-457-5267</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-8 mx-auto">
                    <div class="contact-info">
                        <i class="fa fa-envelope fa-fw"></i>
                        <h5><span>Email:</span></h5>
                        <p>info@example.com <br/>support@example.com</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-8 mx-auto">
                    <div class="contact-info">
                        <i class="fa fa-refresh fa-fw"></i>
                        <h5><span>Timing:</span></h5>
                        <p>Mon-Fri - 9:00 AM to 5:00 PM <br/>sat - 10:00 AM to 1:00 PM</p>
                    </div>
                </div>

            </div>
            
             <div class="row">
            
                <div class="contact-form offset-lg-2 col-lg-8 offset-lg-2 text-center">
                    <form class="form" id="contact-form" method="post" action="contact.php">
                        <div class="messages"></div>
                        <div class="controls">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input id="form_name" type="text" name="name" placeholder="Name *"
                                            required="required"/>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input id="form_email" type="email" name="email" placeholder="Email *"
                                            required="required"/>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input id="form_subject" type="text" name="subject" placeholder="Subject"/>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-group">
                                        <textarea id="form_message" name="message" placeholder="Message" rows="4"
                                            required="required"></textarea>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <button type="submit" class="button">Send Message</button>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
           
            </div></div>
            </section>
        </div>

    

        );
}
export default Contact;