import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from 'react-bootstrap/Navbar';
import {Nav, Container} from 'react-bootstrap';  
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import { faSearch, faHeart, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from "./images/logo.png";
export default function Order(){
    return(
        <div>
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
    
    </div>
    
   
    )
}