import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from 'react-bootstrap/Navbar';
import {Nav, Container} from 'react-bootstrap';  
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faMapMarker,   faPhone} from '@fortawesome/free-solid-svg-icons';
import { faSearch, faHeart, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import logo from "./images/logo.png";
import c10 from "./images/c10.jpg";
import d1 from "./images/d1.jpg";
import d2 from "./images/d2.jpg";
import cat from "./images/cat.jpg";
import c2 from "./images/c2.jpg";
import c3 from "./images/c3.jpg";
import c4 from "./images/c4.jpg";
import c5 from "./images/c5.jpg";
import c6 from "./images/c6.jpg";
import c8 from "./images/c8.jpg";
import st from "./images/st.png";
import paypal from "./images/paypal.jpg";
import zip from "./images/zip.jpg";
export default function About(){
    return(
        <div className="about-me">
  <header id="header">
      <div class="upper-header">
      <div class="container-fluid">
          <div class="upper-header-content">
              <ul class="upper-header-menu">
                  <li>
                  <Link to="/about" className="nav-link">ABOUT US</Link>
                  </li>
                  <li>
                  <Link to="/contact" className="nav-link">CONTACT</Link>
                  </li>
                  <li>
                  <Link to="/order" className="nav-link">ORDER SUPPORT</Link>
                  </li>
                  <li>
                  <Link to="/store" className="nav-link">STORE LOCATOR</Link>
                  </li>
              </ul>
              <h5>FREE AUSTRALIA WIDE SHIPPING ON ORDERS ABOVE <span>$49!</span></h5>
              <div class="call-us">
                <h5>We’re here to help! Call Us Now:  <a href="tel:(02) 9755 9999">(02) 9755 9999</a></h5>
              </div>
          </div>
      </div>
      </div>
      <div class="header-mid">
          <div class="container-fluid">
              <div class="header-mid-content">
                  <div class="logo">
                  <img src={logo} alt='logo' className="image-logo" />
                  </div>
                  <div class="mid-header-right">
                  <div id="searchbox" class="s-search">
                      <div class="input-group">
                          <div class="form-outline">
                            <input type="search" id="form1" class="form-control" placeholder="Search for a Product here..." />
                          </div>
                          <button type="button" class="btn">
                          <Link to="/person">
                      <FontAwesomeIcon icon={faSearch} />
                    </Link>
                          </button>
                        </div>
                  </div>
                  <ul class="header-right-icon">
            
                    <li class="h-search">
                      <li>
                      <Link to="/person">
                      <FontAwesomeIcon icon={faSearch} />
                    </Link>
                      </li>
                  </li>
                      <li class="user">
                      <Link to="/person"><FontAwesomeIcon icon={faUser} /></Link>
                      </li>
                      <li class="wishlist">
                        
                    <Link to="/wishlist"><FontAwesomeIcon icon={faHeart} /></Link>
                          <span>0</span>
                      </li>
                      <li class="cart">
                      <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
                          <span>0</span>
                      </li>
                      <li class="cart-total">
                    <h5>$0.00</h5>
                      </li>
                  </ul>
                  </div>
              </div>
          </div>
      </div>


    <div className='navigation-bar'>
   
      <Navbar className="navigate" expand="md">
      <Container className="container-fluid">
        <Nav className="me-auto1" style={{ color: "white" }}>
          <NavDropdown title="GUITAR/BASS" id="guitar-bass-dropdown">
            <div className="submenu">
              <NavDropdown.Item as={Link} to="/guitar/guitar1" activeClassName="active">
                Effect Pedals
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/guitar/guitar2" activeClassName="active">
                Electric guitar
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/guitar/guitar3" activeClassName="active">
                Guitar Stands & Hangers
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/guitar/guitar4" activeClassName="active">
                Guitar Straps
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/guitar/guitar5" activeClassName="active">
                Guitar Wireless Systems
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/guitar/guitar6" activeClassName="active">
                Guitarist Stools
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/guitar/guitar7" activeClassName="active">
                Hard Cases & Gigs Bags
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/guitar/guitar8" activeClassName="active">
                Instrument Cables 
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/guitar/guitar9" activeClassName="active">
                Lifestyle
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/guitar/guitar10" activeClassName="active">
                Pedal Boards
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/guitar/guitar11" activeClassName="active">
                Ukulele Stands- Bags & Cases 
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/guitar/guitar12" activeClassName="active">
              Ukuleles
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/guitar/guitar13" activeClassName="active">
              Acoustic Guitars
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/guitar/guitar14" activeClassName="active">
              Classical Guitars
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/guitar/guitar15" activeClassName="active">
              Turners
              </NavDropdown.Item>
              
            </div>
          </NavDropdown>

          <NavDropdown title="KEYBOARDS/PIANOS" id="keyboards-pianos-dropdown">
            <div className="submenu">
              {/* Add submenu items for keyboards/pianos */}
              <NavDropdown.Item as={Link} to="/keyboards/keyboard1" activeClassName="active">
                Guitar/Bass 
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/keyboards/keyboard2" activeClassName="active">
                Keyboards
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/keyboards/keyboard3" activeClassName="active">
                Amps
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/keyboards/keyboard4" activeClassName="active">
                Live Sound
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/keyboards/keyboard5" activeClassName="active">
                Studio
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/keyboards/keyboard6" activeClassName="active">
                DJ
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/keyboards/keyboard7" activeClassName="active">
                Drums/Percussion 
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/keyboards/keyboard8" activeClassName="active">
                Folk
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/keyboards/keyboard9" activeClassName="active">
                Orchestral/Bass & Woodwind
              </NavDropdown.Item>
            </div>
          </NavDropdown>

          <NavDropdown title="AMPS/EFFECTS" id="amps-effects-dropdown">
            <div className="submenu">
              {/* Add submenu items for amps/effects */}
              <NavDropdown.Item as={Link} to="/amps/amp1" activeClassName="active">
                Drum Amps
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/amps/amp2" activeClassName="active">
                Keyboard Amps
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/amps/amp3" activeClassName="active">
                Bass Amps
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/amps/amp4" activeClassName="active">
                Guitar Amps
              </NavDropdown.Item>
            </div>
          </NavDropdown>

          <NavDropdown title="LIVE SOUND" id="live-sound">
            <div className="submenu">
              {/* Add submenu items for keyboards/pianos */}
              <NavDropdown.Item as={Link} to="/sound/sound1" activeClassName="active">
                Active Speakers
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sound/sound2" activeClassName="active">
                DI Boxes
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sound/sound3" activeClassName="active">
                Instrument Microphones
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sound/sound4" activeClassName="active">
                Passive Mixers
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sound/sound5" activeClassName="active">
                Passive Speakers
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sound/sound6" activeClassName="active">
                Portable P.A
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sound/sound7" activeClassName="active">
                Power Amps 
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sound/sound8" activeClassName="active">
                Power Mixers
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sound/sound9" activeClassName="active">
                Vocal Microphones 
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sound/sound10" activeClassName="active">
                Vocal Processors
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sound/sound11" activeClassName="active">
                Microphone Stands 
              </NavDropdown.Item>
        
            </div>
          </NavDropdown>
          <NavDropdown title="Studio" id="studio">
            <div className="submenu">
              {/* Add submenu items for keyboards/pianos */}
              <NavDropdown.Item as={Link} to="/studio/studio1" activeClassName="active">
                Headphones
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/studio/studio1" activeClassName="active">
                Recording Microphones
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/studio/studio1" activeClassName="active">
                Studio Monitors
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/studio/studio1" activeClassName="active">
                Vocal Processors
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/studio/studio1" activeClassName="active">
                Studio Controllers
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/studio/studio1" activeClassName="active">
                Recording Gear
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/studio/studio1" activeClassName="active">
                Studio Accessories
              </NavDropdown.Item>
            </div>
          </NavDropdown>
          <NavDropdown title="DJ" id="DJ-PART">
            <div className="submenu">
              {/* Add submenu items for keyboards/pianos */}
              <NavDropdown.Item as={Link} to="/dj/dj1" activeClassName="active">
                Headphones
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dj/dj2" activeClassName="active">
                Lighting
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dj/dj3" activeClassName="active">
                DJ Controllers
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dj/dj4" activeClassName="active">
                DJ Gear
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dj/dj5" activeClassName="active">
                DJ Accessories
              </NavDropdown.Item>
            </div>
          </NavDropdown>
          <NavDropdown title="Drums/Percussion" id="percussion">
            <div className="submenu">
              {/* Add submenu items for keyboards/pianos */}
              <NavDropdown.Item as={Link} to="/percussion/percussion1" activeClassName="active">
                Cajons
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/percussion/percussion2" activeClassName="active">
                Congas & Bongos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/percussion/percussion3" activeClassName="active">
                Cymbals
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/percussion/percussion4" activeClassName="active">
                Drum Accessories
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/percussion/percussion5" activeClassName="active">
                Electronic Drum Kits
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/percussion/percussion6" activeClassName="active">
                Junior Drum kits
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/percussion/percussion7" activeClassName="active">
                Percussion Pads & Drum Machine
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/percussion/percussion8" activeClassName="active">
                Timbales
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/percussion/percussion9" activeClassName="active">
                World Percussion
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/percussion/percussion10" activeClassName="active">
                Acoustic Drum Kits
              </NavDropdown.Item>
            </div>
          </NavDropdown>
          <NavDropdown title="Folk" id="percussion">
            <div className="submenu">
              {/* Add submenu items for keyboards/pianos */}
              <NavDropdown.Item as={Link} to="/folk/folk1" activeClassName="active">
                Accordions
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/folk/folk2" activeClassName="active">
                Banjos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/folk/folk3" activeClassName="active">
                Harmonicas
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/folk/folk4" activeClassName="active">
                Mandolins
              </NavDropdown.Item>
              </div>
          </NavDropdown>
          <NavDropdown title="Orchestral/Brass & Woodwind" id="orchestral">
            <div className="submenu">
              {/* Add submenu items for keyboards/pianos */}
              <NavDropdown.Item as={Link} to="/woodwind/woodwind1" activeClassName="active">
                Accessories
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/woodwind/woodwind2" activeClassName="active">
                Cellos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/woodwind/woodwind3" activeClassName="active">
                Clarinets
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/woodwind/woodwind4" activeClassName="active">
                Cornets
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/woodwind/woodwind5" activeClassName="active">
                Flutes
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/woodwind/woodwind6" activeClassName="active">
                Saxophones
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/woodwind/woodwind7" activeClassName="active">
                Trombones
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/woodwind/woodwind8" activeClassName="active">
                Trumpets
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/woodwind/woodwind9" activeClassName="active">
                Violins
              </NavDropdown.Item>
              </div>
          </NavDropdown>
        </Nav>
      </Container>
      </Navbar>
    
    </div>
    </header>
      





          <section class="about-article py-5">
              <div class="container-fluid">
                  <div class="about-article-content">
                          <h2 class="mb-4 sec-title">The Musicians Avenue Story</h2>
                          <p>Musicians Avenue! Established in 1996, has evolved to cater for all aspects of the music industry ranging from P.A Systems, Studio Products and DJ Gear to Guitars, Keyboards, Amplifiers, Drums and Percussion. Musicians Avenue remains a family owned store and continues to provide good old fashioned customer service.</p>
                          <h6>We also do repairs and maintenance on all musical instruments.</h6>
                  </div>
                  
                  <div class="row justify-content-center mb-5">
                      <div class="col-xxl-6 col-xl-7 col-lg-8 col-md-10 col-sm-12 col-12 text-center">
                          <video width="100%" controls autoplay muted loop>
                              <source src="https://www.shutterstock.com/shutterstock/videos/2893999/preview/stock-footage-building-a-house-animation-from-a-house-in-d.mp4" type="video/mp4" />
                              Your browser does not support HTML video.
                          </video>
                      </div>
                  </div>
              </div>
          </section>
          <section class="categories">

            <div class="container-fluid">
              <div class="row categories-content">
              <div class="col-lg-3 col-md-3 col-12">
                <div class="block">
                  <img src={c10} alt='c10' />
                  <div class="categories-text">
                      <h4>For Musicians</h4>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-12">
                <div class="block">
                  <img src={d1} alt='d1' />
                  <div class="categories-text">
                      <h4>DJ / Production</h4>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-12">
                <div class="block">
                  <img src={d2} alt='d2'/>
                  <div class="categories-text">
                      <h4>Live Sound & Stage</h4>
                  </div>
              </div>
            </div>
              <div class="col-lg-3 col-md-3 col-12">
                <div class="block">
                  <img src={cat} alt='cat'/>
                  <div class="categories-text">
                      <h4>Education</h4>
                  </div>
              </div>
            </div>
                </div>
            </div>
            <div class="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 av-box">
                        <div class="px-lg-4 py-lg-5 py-4">
                            <h3 class="mb-4 h3-sec-title">Our Mission</h3>
                            <p><strong>Mauris et interdum felis. Nulla tempor fermen tum arcu, a vulputate est rhoncus nec.</strong></p> 
                            <p>Donec augue arcu, efficitur nec tellus vitae, fermentum semper quam. Proin vel est a sapien ullamcorper vestibulum. Donec in dui ac dui commodo cursus vulputate id augue. Integer tempor vitae lectus nec pellentesque. Quisque vitae commodo erat. Maecenas suscipit, justo viverra facilisis fermentum, eros dolor dignissim lacus, ut dignissim.</p>
                        </div>
                    </div>
                  <div class="row align-items-center">
                    <div class="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12 av-image">
                        <img src="assets/images/img2.jpg" alt="" />
                    </div>
                    <div class="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 av-box">
                        <div class="px-lg-4 py-lg-5 py-4">
                            <h3 class="mb-4 h3-sec-title">Our Vision</h3>
                            <p><strong>Mauris et interdum felis. Nulla tempor fermen tum arcu, a vulputate est rhoncus nec.</strong></p> 
                            <p>Donec augue arcu, efficitur nec tellus vitae, fermentum semper quam. Proin vel est a sapien ullamcorper vestibulum. Donec in dui ac dui commodo cursus vulputate id augue. Integer tempor vitae lectus nec pellentesque. Quisque vitae commodo erat. Maecenas suscipit, justo viverra facilisis fermentum, eros dolor dignissim lacus, ut dignissim.</p>
                        </div>
                    </div>
                  </div>
  
              </section>
<section class="offers">
<div class="container-fluid">
        <div class="offers-content row">
    
            <div class="col-lg-4 col-md-4 col-12">
              <div class="offer-box of-1">
            <div class="offer-image">
             <img src={paypal} alt='paypal'/>
            </div>
            <div class="offer-text">
              <h5>Play Your Way With PayPal Pay In 4</h5>
              <p>Divide your purchase into four interest-free instalments with no late fees and just 25% down.</p>
            </div>
            </div>
          </div>

            <div class="col-lg-4 col-md-4 col-12">
              <div class="offer-box of-2">
              <div class="offer-image">
               <img src={zip} alt='zip'/>
              </div>
              <div class="offer-text">
                <h5>Own It Now, up to 6 Months Interest Free*</h5>
                <p>Purchase your new gear with Zip Money and get up to 6 months to pay with zero interest.</p>
              </div>
              </div>
            </div>

              <div class="col-lg-4 col-md-4 col-12">
                <div class="offer-box of-3">
                <div class="offer-image">
                 <img src={st} alt='st'/>
                </div>
                <div class="offer-text">
                  <h5>Start Playing Today With Easy Rental</h5>
                  <p>Simple application process & great terms. Return/upgrade after six months or buy at any time.</p>
                </div>
              </div>
   
        </div>
    </div>
    </div>
    </section>
<footer>
  <div class="upper-footer">
    <div class="container-fluid">
      <div class="row">

        <div class="col-xl-4 col-lg-6 col-md-6 col-12">
          <div class="logo-text">
          <div class="image">
            <img src={logo} alt='logo'/>
          </div>
          <p>Musicians Avenue! Established in 1996, has evolved to cater for all aspects of the music industry ranging from P.A Systems, Studio Products and DJ Gear to Guitars, Keyboards, Amplifiers, Drums and Percussion. Musicians Avenue remains a family owned store and continues to provide good old fashioned customer service. 
          </p>
          <h5>We also do repairs and maintenance on all musical instruments.</h5>
        </div>
      </div>

      <div class="col-xl-2 col-lg-6 col-md-6 col-sm-5 col-12">
        <div class="block">
        <h4>Shop Now</h4>
        <ul>
          <li>
          <Link to="/guitar">Guitar/Bass</Link>
          </li>
          <li>
            <Link to="/keyboards">Keyboards/Pianos</Link>
          </li>
          <li>
            <Link to="/amps">Amps/Effects</Link>
          </li>
          <li>
            <Link to="/live-sound">Live Sound</Link>
          </li>
          <li>
            <Link to="/recording-studio">Recording Studio</Link>
          </li>
          <li>
            <Link to="/dj-lighting">Dj/Lighting</Link>
          </li>
          <li>
            <Link to="/drums-percussion">Drums/Percussion </Link>
          </li>
          <li>
            <Link to="/orchestral">Orchestral</Link>
          </li>
          <li>
            <Link to="/accessories">Accessories</Link>
          </li>
          <li>
            <Link to="/shop-by-brand">Shop By Brand</Link>
          </li>
        </ul> 
      </div>
    </div>

    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-7 col-12">
      <div class="block time">
        <h4>Store Hours</h4>
    <ul>
      <li>Monday <span>9:30am-5:30pm</span></li>
      <li>Tuesday<span>9:30am-5:30pm</span></li>
      <li>Wednesday <span>9:30am-5:30pm</span></li>
      <li>Thursday <span>9:30am-5:30pm</span></li>
      <li>Friday <span>9:30am-5:30pm</span></li>
      <li>Saturday <span>9:30am-5:30pm</span></li>
    </ul>
    </div>
  </div>

    <div class="col-xl-3 col-lg-6 col-md-6 col-12">
      <div class="block address">
        <h4>Contact Us</h4>
          <ul>
            <li class="map">
            <Link to="/map"><FontAwesomeIcon icon={faMapMarker} /></Link>63 Ware St, Fairfield NSW 2165</li>
            <li class="phone"><Link to="/phone">
          <FontAwesomeIcon icon={faPhone} /></Link><Link to="tel:(02) 9755 9999">(02) 9755 9999</Link></li>
            <li><div class="icon"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></div><a href="mailto:musiciansavenue@bigpond.com">musiciansavenue@bigpond.com</a></li>
      
          </ul>
          <ul class="social-icon">
            <li class="facebook">
            <Link to="/facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
            </li>
            <li class="twitter">
            <Link to="/twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
            </li>
            <li class="linkedin">
            <Link to="/linkedin">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
            </li>
            <li class="youtube">
            <Link to="/youtube">
          <FontAwesomeIcon icon={faYoutube} />
        </Link>
            </li>
          </ul>
    </div>
  </div>
   

  <div class="footer-mid">
    <div class="container-fluid">
      <div class="footer-mid-content">
      <div class="row">
    <div class="col">
      <div class="block">
      <h4>Information</h4>
      <ul>
        <li>
          <Link to="/zip">"Zip - Own it now,pay later</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/delivery">Delivery Information</Link>
        </li>
        <li>
          <Link to="/policy">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/terms">Terms & Conditions</Link>
        </li>
   
      </ul> 
    </div>
  </div>

  <div class="col">
    <div class="block">
    <h4>Customer Services</h4>
    <ul>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>
        <Link to="/returns">Returns</Link>
      </li>
      <li>
        <Link to="/map">Site Map</Link>
      </li>
    </ul> 
  </div>
</div>

<div class="col">
  <div class="block">
  <h4>Extras</h4>
  <ul>
    <li>
      <Link to="/brands">Brands</Link>
    </li>
    <li>
      <Link to="/gift">Gift Vouchers</Link>
    </li>
    <li>
      <Link to="/affiliate">Affiliates</Link>
    </li>
    <li>
      <Link to="/special">Specials</Link>
    </li>
  </ul> 
</div>
</div>

<div class="col">
  <div class="block">
  <h4>My Account</h4>
  <ul>
    <li>
      <Link to="/account">My Account</Link>
    </li>
    <li>
      <Link to="/gift">Gift Vouchers</Link>
    </li>
    <li>
      <Link to="/affiliate">Affiliates</Link>
    </li>
    <li>
      <Link to="/specials">Specials</Link>
    </li>
  </ul> 
</div>
</div>

<div class="col-lg-4 col-md-4 col-12">
  <div class="block">
  <h4>Sign up to our monthly newsletter</h4>
  <form>
    <div class="form-group">
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email ID here..." />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
</div>
</div>
    </div>
  </div>
  </div>

  <div class="bottom-footer">
    <div class="container-fluid">
     <div class="row align-items-center">
      <div class="col-lg-6 col-md-6 col-12">
        <p>Musicians Avenue @ 2023. All Rights Reserved.</p>
      </div>
      <div class="col-lg-6 col-md-6 col-12">
        <ul>
          <li><img src={c2} alt='c2' /></li>
          <li><img src={c3} alt='c3' /></li>
          <li><img src={c4} alt='c4' /></li>
          <li><img src={c5} alt='c5'/></li>
          <li><img src={c6} alt='c6'/></li>
          <li><img src={c8} alt='c8'/></li>
        </ul>
      </div>
     </div>

    </div>
  </div>
  </div>
</div>
</div>
</footer>
</div>    
   
    )
}