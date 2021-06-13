import React from 'react';
import hero from '../assets/img/hero.svg';


class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalConfirmed: null,
            totalDeath: null,
            totalRecovered: null,
            totalOther: null,
            city: [],
        };
    }

    render() {
       
  
        return (
           
            <div className="Hero-Block">
                  <div className="introduction"> 
              
                            <div className="intro-text"> 
                                    <h1>We help businesses to turn digital</h1>
                                    <h5>Best, Cheap & Bugdet friendly websites for all businesses.</h5>
                                  

<                               ul>
                            <li><i class="fa fa-lock" aria-hidden="true"></i>Fast and Secure Development with SSL</li>
                            <li><i class="fa fa-tablet" aria-hidden="true"></i>Mobile and Tablet friendly UI</li>
                            <li><i class="fa fa-globe" aria-hidden="true"></i>SEO Friendly Web Design</li>
                            <li><i class="fa fa-phone" aria-hidden="true"></i>24/7 fast and competent support</li>
                            
                              </ul> 

<br/>
                                    {/* <span>India <i className="fa fa-caret-down" aria-hidden="true"></i></span> */}
                                    <div className="contact-more"> 
                               <a href="https://www.mohfw.gov.in/"><button className="learn-more-link">Contact Us</button> </a> 
                                </div>  
                                <div className="footer-bar">

<a href="https://www.linkedin.com/in/deepakchauhan22/" className="linkedin"><i className="fa fa-linkedin" aria-hidden="true"></i></a> 
<a href="https://github.com/deepakchauhan22" className="github"><i className="fa fa-github" aria-hidden="true"></i></a> 
<a href="https://www.facebook.com/Glassofchampagn" className="facebook"><i className="fa fa-facebook"></i></a> 
<a href="https://www.instagram.com/glassofchampagn/" className="instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a> 
<a href="https://medium.com/@dee22" className="medium"><i className="fa fa-medium" aria-hidden="true"></i></a> 

</div>
            
                            </div>
                                <div className="intro-img">
                                    <div className = "Hero-Image">
                                    <img src={hero} width = "100%"  alt="covid"/>
                                    
                                    </div>
                                </div>
                  </div>
          </div>
          

            
        );
    }
}

export { Home }; 