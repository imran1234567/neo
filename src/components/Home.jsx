import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faSearch,
  faHeart,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faEnvelope,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import a1 from "./images/a1.jpg";
import paypal from "./images/paypal.jpg";
import zip from "./images/zip.jpg";
import logo from "./images/logo.png";
import c1 from "./images/c1.jpg";
import c10 from "./images/c10.jpg";
import d1 from "./images/d1.jpg";
import d2 from "./images/d2.jpg";
import cat from "./images/cat.jpg";
import c6 from "./images/c6.jpg";
import c3 from "./images/c3.jpg";
import st from "./images/st.png";
import pr11 from "./images/pr11.jpg";
import a9 from "./images/a9.jpg";
import a10 from "./images/a10.jpg";
import a3 from "./images/a3.jpg";
import a4 from "./images/a4.jpg";
import a5 from "./images/a5.jpg";
import a6 from "./images/a6.jpg";
import b1 from "./images/b1.jpg";
import b5 from "./images/b5.jpg";
import b2 from "./images/b2.jpg";
import a7 from "./images/a7.jpg";
import a8 from "./images/a8.jpg";
import pr5 from "./images/pr5.jpg";
import pr6 from "./images/pr6.jpg";
import pr7 from "./images/pr7.jpg";
import pr8 from "./images/pr8.jpg";
import pr9 from "./images/pr9.jpg";
import pr10 from "./images/pr10.jpg";
import b3 from "./images/b3.jpg";
import b4 from "./images/b4.jpg";
import b6 from "./images/b6.jpg";
import b7 from "./images/b7.jpg";
import b8 from "./images/b8.jpg";
import b9 from "./images/b9.jpg";
import b10 from "./images/b10.jpg";
import image1 from "./images/image1.jpg";
import pr1 from "./images/pr1.jpg";
import pr2 from "./images/pr2.jpg";
import pr3 from "./images/pr3.jpg";
import c2 from "./images/c2.jpg";
import c4 from "./images/c4.jpg";
import c5 from "./images/c5.jpg";
import pr4 from "./images/pr4.jpg";
import c8 from "./images/c8.jpg";
import test from "./images/test.jpg";
import bg1 from "./images/bg1.jpg";
import pr12 from "./images/pr12.jpg";
import bg2 from "./images/bg2.jpg";
import Style from "./Style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import bootstrap from "./assets/css/bootstrap.css";
export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div>
        <header id="header">
          <div class="upper-header">
            <div class="container-fluid">
              <div class="upper-header-content">
                <ul class="upper-header-menu">
                  <li>
                    <Link to="/about" className="nav-link">
                      ABOUT US
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="nav-link">
                      CONTACT
                    </Link>
                  </li>
                  <li>
                    <Link to="/order" className="nav-link">
                      ORDER SUPPORT
                    </Link>
                  </li>
                  <li>
                    <Link to="/store" className="nav-link">
                      STORE LOCATOR
                    </Link>
                  </li>
                </ul>
                <h5>
                  FREE AUSTRALIA WIDE SHIPPING ON ORDERS ABOVE <span>$49!</span>
                </h5>
                <div class="call-us">
                  <h5>
                    We’re here to help! Call Us Now:{" "}
                    <a href="tel:(02) 9755 9999">(02) 9755 9999</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div class="header-mid">
            <div class="container-fluid">
              <div class="header-mid-content">
                <div class="logo">
                  <img src={logo} alt="logo" className="image-logo" />
                </div>
                <div class="mid-header-right">
                  <div id="searchbox" class="s-search">
                    <div class="input-group">
                      <div class="form-outline">
                        <input
                          type="search"
                          id="form1"
                          class="form-control"
                          placeholder="Search for a Product here..."
                        />
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
                      <Link to="/person">
                        <FontAwesomeIcon icon={faUser} />
                      </Link>
                    </li>
                    <li class="wishlist">
                      <Link to="/wishlist">
                        <FontAwesomeIcon icon={faHeart} />
                      </Link>
                      <span>0</span>
                    </li>
                    <li class="cart">
                      <Link to="/cart">
                        <FontAwesomeIcon icon={faShoppingCart} />
                      </Link>
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

          <div className="navigation-bar">
            <Navbar className="navigate" expand="md">
              <Container className="container-fluid">
                <Nav className="me-auto1" style={{ color: "white" }}>
                  <NavDropdown
                    title="GUITAR/BASS"
                    id="guitar-bass-dropdown"
                    className=".nav-dropdown-title"
                    color="white"
                  >
                    <div className="submenu">
                      <NavDropdown.Item
                        as={Link}
                        to="/guitar/guitar1"
                        activeClassName="active"
                      >
                        Effect Pedals
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/guitar/guitar2"
                        activeClassName="active"
                      >
                        Electric guitar
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/guitar/guitar3"
                        activeClassName="active"
                      >
                        Guitar Stands & Hangers
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/guitar/guitar4"
                        activeClassName="active"
                      >
                        Guitar Straps
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/guitar/guitar5"
                        activeClassName="active"
                      >
                        Guitar Wireless Systems
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/guitar/guitar6"
                        activeClassName="active"
                      >
                        Guitarist Stools
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/guitar/guitar7"
                        activeClassName="active"
                      >
                        Hard Cases & Gigs Bags
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/guitar/guitar8"
                        activeClassName="active"
                      >
                        Instrument Cables
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/guitar/guitar9"
                        activeClassName="active"
                      >
                        Lifestyle
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/guitar/guitar10"
                        activeClassName="active"
                      >
                        Pedal Boards
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/guitar/guitar11"
                        activeClassName="active"
                      >
                        Ukulele Stands- Bags & Cases
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/guitar/guitar12"
                        activeClassName="active"
                      >
                        Ukuleles
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/guitar/guitar13"
                        activeClassName="active"
                      >
                        Acoustic Guitars
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/guitar/guitar14"
                        activeClassName="active"
                      >
                        Classical Guitars
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/guitar/guitar15"
                        activeClassName="active"
                      >
                        Turners
                      </NavDropdown.Item>
                    </div>
                  </NavDropdown>

                  <NavDropdown
                    title="KEYBOARDS/PIANOS"
                    id="keyboards-pianos-dropdown"
                  >
                    <div className="submenu">
                      {/* Add submenu items for keyboards/pianos */}
                      <NavDropdown.Item
                        as={Link}
                        to="/keyboards/keyboard1"
                        activeClassName="active"
                      >
                        Guitar/Bass
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/keyboards/keyboard2"
                        activeClassName="active"
                      >
                        Keyboards
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/keyboards/keyboard3"
                        activeClassName="active"
                      >
                        Amps
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/keyboards/keyboard4"
                        activeClassName="active"
                      >
                        Live Sound
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/keyboards/keyboard5"
                        activeClassName="active"
                      >
                        Studio
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/keyboards/keyboard6"
                        activeClassName="active"
                      >
                        DJ
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/keyboards/keyboard7"
                        activeClassName="active"
                      >
                        Drums/Percussion
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/keyboards/keyboard8"
                        activeClassName="active"
                      >
                        Folk
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/keyboards/keyboard9"
                        activeClassName="active"
                      >
                        Orchestral/Bass & Woodwind
                      </NavDropdown.Item>
                    </div>
                  </NavDropdown>

                  <NavDropdown title="AMPS/EFFECTS" id="amps-effects-dropdown">
                    <div className="submenu">
                      {/* Add submenu items for amps/effects */}
                      <NavDropdown.Item
                        as={Link}
                        to="/amps/amp1"
                        activeClassName="active"
                      >
                        Drum Amps
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/amps/amp2"
                        activeClassName="active"
                      >
                        Keyboard Amps
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/amps/amp3"
                        activeClassName="active"
                      >
                        Bass Amps
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/amps/amp4"
                        activeClassName="active"
                      >
                        Guitar Amps
                      </NavDropdown.Item>
                    </div>
                  </NavDropdown>

                  <NavDropdown title="LIVE SOUND" id="live-sound">
                    <div className="submenu">
                      {/* Add submenu items for keyboards/pianos */}
                      <NavDropdown.Item
                        as={Link}
                        to="/sound/sound1"
                        activeClassName="active"
                      >
                        Active Speakers
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/sound/sound2"
                        activeClassName="active"
                      >
                        DI Boxes
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/sound/sound3"
                        activeClassName="active"
                      >
                        Instrument Microphones
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/sound/sound4"
                        activeClassName="active"
                      >
                        Passive Mixers
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/sound/sound5"
                        activeClassName="active"
                      >
                        Passive Speakers
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/sound/sound6"
                        activeClassName="active"
                      >
                        Portable P.A
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/sound/sound7"
                        activeClassName="active"
                      >
                        Power Amps
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/sound/sound8"
                        activeClassName="active"
                      >
                        Power Mixers
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/sound/sound9"
                        activeClassName="active"
                      >
                        Vocal Microphones
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/sound/sound10"
                        activeClassName="active"
                      >
                        Vocal Processors
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/sound/sound11"
                        activeClassName="active"
                      >
                        Microphone Stands
                      </NavDropdown.Item>
                    </div>
                  </NavDropdown>
                  <NavDropdown title="Studio" id="studio">
                    <div className="submenu">
                      {/* Add submenu items for keyboards/pianos */}
                      <NavDropdown.Item
                        as={Link}
                        to="/studio/studio1"
                        activeClassName="active"
                      >
                        Headphones
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/studio/studio1"
                        activeClassName="active"
                      >
                        Recording Microphones
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/studio/studio1"
                        activeClassName="active"
                      >
                        Studio Monitors
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/studio/studio1"
                        activeClassName="active"
                      >
                        Vocal Processors
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/studio/studio1"
                        activeClassName="active"
                      >
                        Studio Controllers
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/studio/studio1"
                        activeClassName="active"
                      >
                        Recording Gear
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/studio/studio1"
                        activeClassName="active"
                      >
                        Studio Accessories
                      </NavDropdown.Item>
                    </div>
                  </NavDropdown>
                  <NavDropdown title="DJ" id="DJ-PART">
                    <div className="submenu">
                      {/* Add submenu items for keyboards/pianos */}
                      <NavDropdown.Item
                        as={Link}
                        to="/dj/dj1"
                        activeClassName="active"
                      >
                        Headphones
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/dj/dj2"
                        activeClassName="active"
                      >
                        Lighting
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/dj/dj3"
                        activeClassName="active"
                      >
                        DJ Controllers
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/dj/dj4"
                        activeClassName="active"
                      >
                        DJ Gear
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/dj/dj5"
                        activeClassName="active"
                      >
                        DJ Accessories
                      </NavDropdown.Item>
                    </div>
                  </NavDropdown>
                  <NavDropdown title="Drums/Percussion" id="percussion">
                    <div className="submenu">
                      {/* Add submenu items for keyboards/pianos */}
                      <NavDropdown.Item
                        as={Link}
                        to="/percussion/percussion1"
                        activeClassName="active"
                      >
                        Cajons
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/percussion/percussion2"
                        activeClassName="active"
                      >
                        Congas & Bongos
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/percussion/percussion3"
                        activeClassName="active"
                      >
                        Cymbals
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/percussion/percussion4"
                        activeClassName="active"
                      >
                        Drum Accessories
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/percussion/percussion5"
                        activeClassName="active"
                      >
                        Electronic Drum Kits
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/percussion/percussion6"
                        activeClassName="active"
                      >
                        Junior Drum kits
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/percussion/percussion7"
                        activeClassName="active"
                      >
                        Percussion Pads & Drum Machine
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/percussion/percussion8"
                        activeClassName="active"
                      >
                        Timbales
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/percussion/percussion9"
                        activeClassName="active"
                      >
                        World Percussion
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/percussion/percussion10"
                        activeClassName="active"
                      >
                        Acoustic Drum Kits
                      </NavDropdown.Item>
                    </div>
                  </NavDropdown>
                  <NavDropdown title="Folk" id="percussion">
                    <div className="submenu">
                      {/* Add submenu items for keyboards/pianos */}
                      <NavDropdown.Item
                        as={Link}
                        to="/folk/folk1"
                        activeClassName="active"
                      >
                        Accordions
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/folk/folk2"
                        activeClassName="active"
                      >
                        Banjos
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/folk/folk3"
                        activeClassName="active"
                      >
                        Harmonicas
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/folk/folk4"
                        activeClassName="active"
                      >
                        Mandolins
                      </NavDropdown.Item>
                    </div>
                  </NavDropdown>
                  <NavDropdown
                    title="Orchestral/Brass & Woodwind"
                    id="orchestral"
                  >
                    <div className="submenu">
                      {/* Add submenu items for keyboards/pianos */}
                      <NavDropdown.Item
                        as={Link}
                        to="/woodwind/woodwind1"
                        activeClassName="active"
                      >
                        Accessories
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/woodwind/woodwind2"
                        activeClassName="active"
                      >
                        Cellos
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/woodwind/woodwind3"
                        activeClassName="active"
                      >
                        Clarinets
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/woodwind/woodwind4"
                        activeClassName="active"
                      >
                        Cornets
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/woodwind/woodwind5"
                        activeClassName="active"
                      >
                        Flutes
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/woodwind/woodwind6"
                        activeClassName="active"
                      >
                        Saxophones
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/woodwind/woodwind7"
                        activeClassName="active"
                      >
                        Trombones
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/woodwind/woodwind8"
                        activeClassName="active"
                      >
                        Trumpets
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/woodwind/woodwind9"
                        activeClassName="active"
                      >
                        Violins
                      </NavDropdown.Item>
                    </div>
                  </NavDropdown>
                </Nav>
              </Container>
            </Navbar>
          </div>
        </header>
        <div>
          <section>
            <Slider {...settings}>
              <div>
                <img src={c1} alt="Banner 1" />
              </div>
              <div>
                <img src={bg1} alt="Banner 2" />
              </div>
              <div>
                <img src={bg2} alt="Banner 3" />
              </div>
            </Slider>
          </section>

          <section class="categories">
            <div class="container-fluid">
              <div class="row categories-content">
                <div class="col-lg-3 col-md-3 col-12">
                  <div class="block">
                    <img src={c10} alt="c10" />
                    <div class="categories-text">
                      <h4>For Musicians</h4>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-12">
                  <div class="block">
                    <img src={d1} alt="d1" />
                    <div class="categories-text">
                      <h4>DJ / Production</h4>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-12">
                  <div class="block">
                    <img src={d2} alt="d2" />
                    <div class="categories-text">
                      <h4>Live Sound & Stage</h4>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-12">
                  <div class="block">
                    <img src={cat} alt="cat" />
                    <div class="categories-text">
                      <h4>Education</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="offers">
            <div class="container-fluid">
              <div class="offers-content row">
                <div class="col-lg-4 col-md-4 col-12">
                  <div class="offer-box of-1">
                    <div class="offer-image1">
                      <img src={paypal} alt="paypal" />
                    </div>
                    <div class="offer-text">
                      <h5>Play Your Way With PayPal Pay In 4</h5>
                      <p>
                        Divide your purchase into four interest-free instalments
                        with no late fees and just 25% down.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 col-12">
                  <div class="offer-box of-2">
                    <div class="offer-image2">
                      <img src={zip} alt="zip" />
                    </div>
                    <div class="offer-text">
                      <h5>Own It Now, up to 6 Months Interest Free*</h5>
                      <p>
                        Purchase your new gear with Zip Money and get up to 6
                        months to pay with zero interest.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 col-12">
                  <div class="offer-box of-3">
                    <div class="offer-image">
                      <img src={st} alt="st" />
                    </div>
                    <div class="offer-text">
                      <h5>Start Playing Today With Easy Rental</h5>
                      <p>
                        Simple application process & great terms. Return/upgrade
                        after six months or buy at any time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="new-arrival">
            <div class="container-fluid">
              <h2 class="sec-title">Top Deals & New Arrivals</h2>
              <div class="new-arrival-list">
                <div class="row new-arrival-content">
                  <div class="col-lg-6 col-md-6 col-12 av-box">
                    <div class="row h-100">
                      <div class="col-lg-6 col-md-6 col-12">
                        <div class="new-arrival-box">
                          <div class="arrival-image">
                            <img src={a1} alt="a1" />
                          </div>
                          <div class="arrival-text">
                            <h6>Alesis Strike Multi 9-Pad Percussion Pad</h6>
                            <h5>$1,195.00</h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-12">
                        <div class="new-arrival-box">
                          <div class="arrival-image">
                            <img src={pr11} alt="pr11" />
                          </div>
                          <div class="arrival-text">
                            <h6>
                              Ibanez AW54CE OPN Artwood Acoustic Electric Guitar
                            </h6>
                            <h5>$595.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12 av-image">
                    <div class="arrival-image">
                      <img src={a9} alt="a9" />
                    </div>
                  </div>
                </div>

                <div class="row new-arrival-content">
                  <div class="col-lg-6 col-md-6 col-12 av-box">
                    <div class="row h-100">
                      <div class="col-lg-6 col-md-6 col-12">
                        <div class="new-arrival-box">
                          <div class="arrival-image">
                            <img src={a10} alt="a10" />
                          </div>
                          <div class="arrival-text">
                            <h6>Alesis Strike Multi 9-Pad Percussion Pad</h6>
                            <h5>$1,195.00</h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-12">
                        <div class="new-arrival-box">
                          <div class="arrival-image">
                            <img src={a3} alt="a3" />
                          </div>
                          <div class="arrival-text">
                            <h6>
                              Ibanez AW54CE OPN Artwood Acoustic Electric Guitar
                            </h6>
                            <h5>$595.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12 av-image">
                    <div class="arrival-image">
                      <img src={a10} alt="a10" />
                    </div>
                  </div>
                </div>

                <div class="row new-arrival-content">
                  <div class="col-lg-6 col-md-6 col-12 av-box">
                    <div class="row h-100">
                      <div class="col-lg-6 col-md-6 col-12">
                        <div class="new-arrival-box">
                          <div class="arrival-image">
                            <img src={a3} alt="a3" />
                          </div>
                          <div class="arrival-text">
                            <h6>Alesis Strike Multi 9-Pad Percussion Pad</h6>
                            <h5>$1,195.00</h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-12">
                        <div class="new-arrival-box">
                          <div class="arrival-image">
                            <img src={b1} alt="b1" />
                          </div>
                          <div class="arrival-text">
                            <h6>
                              Ibanez AW54CE OPN Artwood Acoustic Electric Guitar
                            </h6>
                            <h5>$595.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12 av-image">
                    <div class="arrival-image">
                      <img src={b1} alt="b1" />
                    </div>
                  </div>
                </div>

                <div class="row new-arrival-content">
                  <div class="col-lg-6 col-md-6 col-12 av-box">
                    <div class="row h-100">
                      <div class="col-lg-6 col-md-6 col-12">
                        <div class="new-arrival-box">
                          <div class="arrival-image">
                            <img src={a7} alt="a7" />
                          </div>
                          <div class="arrival-text">
                            <h6>Alesis Strike Multi 9-Pad Percussion Pad</h6>
                            <h5>$1,195.00</h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-12">
                        <div class="new-arrival-box">
                          <div class="arrival-image">
                            <img src={a8} alt="a8" />
                          </div>
                          <div class="arrival-text">
                            <h6>
                              Ibanez AW54CE OPN Artwood Acoustic Electric Guitar
                            </h6>
                            <h5>$595.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12 av-image">
                    <div class="arrival-image2">
                      <img src={b2} alt="b2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="featured-product">
            <div class="container-fluid">
              <h2 class="sec-title">Featured Products</h2>
              <div class="featured-product-list row">
                <div class="col-lg-3 col-md-3 col-12">
                  <div class="product-box">
                    <div class="product-image">
                      <img src={pr5} alt="pr5" />
                    </div>
                    <div class="product-text">
                      <h6>
                        Ibanez AW54CE OPN Artwood Acoustic Electric Guitar
                      </h6>
                      <h5>$595.00</h5>
                      <div class="add-cart">
                        <button>add to cart</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-3 col-12">
                  <div class="product-box">
                    <div class="product-image">
                      <img src={pr6} alt="pr6" />
                    </div>
                    <div class="product-text">
                      <h6>
                        Ibanez AW54CE OPN Artwood Acoustic Electric Guitar
                      </h6>
                      <h5>$595.00</h5>
                      <div class="add-cart">
                        <button>add to cart</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-3 col-12">
                  <div class="product-box">
                    <div class="product-image">
                      <img src={pr7} alt="pr7" />
                    </div>
                    <div class="product-text">
                      <h6>
                        Ibanez AW54CE OPN Artwood Acoustic Electric Guitar
                      </h6>
                      <h5>$595.00</h5>
                      <div class="add-cart">
                        <button>add to cart</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-12">
                  <div class="product-box">
                    <div class="product-image">
                      <img src={pr8} alt="pr8" />
                    </div>
                    <div class="product-text">
                      <h6>
                        Ibanez AW54CE OPN Artwood Acoustic Electric Guitar
                      </h6>
                      <h5>$595.00</h5>
                      <div class="add-cart">
                        <button>add to cart</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-12">
                  <div class="product-box">
                    <div class="product-image">
                      <img src={pr9} alt="pr9" />
                    </div>
                    <div class="product-text">
                      <h6>
                        Ibanez AW54CE OPN Artwood Acoustic Electric Guitar
                      </h6>
                      <h5>$595.00</h5>
                      <div class="add-cart">
                        <button>add to cart</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-12">
                  <div class="product-box">
                    <div class="product-image">
                      <img src={pr10} alt="pr10" />
                    </div>
                    <div class="product-text">
                      <h6>
                        Ibanez AW54CE OPN Artwood Acoustic Electric Guitar
                      </h6>
                      <h5>$595.00</h5>
                      <div class="add-cart">
                        <button>add to cart</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-12">
                  <div class="product-box">
                    <div class="product-image">
                      <img src={pr11} alt="pr7" />
                    </div>
                    <div class="product-text">
                      <h6>
                        Ibanez AW54CE OPN Artwood Acoustic Electric Guitar
                      </h6>
                      <h5>$595.00</h5>
                      <div class="add-cart">
                        <button>add to cart</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-12">
                  <div class="product-box">
                    <div class="product-image">
                      <img src={pr12} alt="pr7" />
                    </div>
                    <div class="product-text">
                      <h6>
                        Ibanez AW54CE OPN Artwood Acoustic Electric Guitar
                      </h6>
                      <h5>$595.00</h5>
                      <div class="add-cart">
                        <button>add to cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="orange">
            <div class="container">
              <div class="orange-text">
                <h3>ORANGE CRUSH 20RT COMBO GUITAR AMPLIFIER</h3>
                <ul>
                  <li>Brand: Orange</li>
                  <li>Product Code: Crush 20RT</li>
                  <li>Availability: In Stock</li>
                </ul>
                <h4>$339.00</h4>
                <div class="add-cart">
                  <button class="cart-btn">add to cart</button>
                </div>
              </div>
            </div>
          </section>

          <section class="articals">
            <div class="container-fluid">
              <h2 class="sec-title">Articles &amp; Resources</h2>

              <div class="articals-list row">
                <div class="col-lg-3 col-md-3 col-12">
                  <div class="artical-box">
                    <img src={b3} alt="b3" />
                    <div class="artical-text">
                      <h5> 10 Reasons for Live in 2023 </h5>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-3 col-12">
                  <div class="artical-box">
                    <img src={b4} alt="b4" />
                    <div class="artical-text">
                      <h5> How to Record a Podcast With Multiple People </h5>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-3 col-12">
                  <div class="artical-box">
                    <img src={b5} alt="b5" />
                    <div class="artical-text">
                      <h5> What Synthesis Type Are You? </h5>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-3 col-12">
                  <div class="artical-box">
                    <img src={b6} alt="b6" />
                    <div class="artical-text">
                      <h5> How to Choose Electric Guitar Strings </h5>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-3 col-12">
                  <div class="artical-box">
                    <img src={b7} alt="b7" />
                    <div class="artical-text">
                      <h5> 10 Reasons for Ableton Live in 2023 </h5>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-3 col-12">
                  <div class="artical-box">
                    <img src={b8} alt="b8" />
                    <div class="artical-text">
                      <h5> How to Record a Podcast With Multiple People </h5>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-3 col-12">
                  <div class="artical-box">
                    <img src={b9} alt="b9" />
                    <div class="artical-text">
                      <h5> What Synthesis Type Are You? </h5>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-3 col-12">
                  <div class="artical-box">
                    <img src={b10} alt="b10" />
                    <div class="artical-text">
                      <h5> How to Choose Electric Guitar Strings </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="store">
            <div class="store-content">
              <div class="store-text">
                <h3>
                  Musicians Avenue remains a family owned store and continues to
                  provide good old fashioned customer service.
                </h3>
                <div class="store-btn">
                  <button>Store Locator</button>
                </div>
              </div>
            </div>
          </section>

          <section class="testimonial">
            <div class="container">
              <img src={test} alt="test" />
            </div>
          </section>

          <section class="process">
            <div class="container">
              <div class="row">
                <div class="col-lg-3 col-md-3 col-6">
                  <div class="process-box">
                    <div class="process-image">
                      <img src={pr1} alt="pr1" />
                    </div>
                    <div class="process-text">
                      <h4>Worldwide Shipping</h4>
                      <p>Enjoy free delivery on every order.</p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-3 col-6">
                  <div class="process-box">
                    <div class="process-image">
                      <img src={pr2} alt="pr2" />
                    </div>
                    <div class="process-text">
                      <h4>MONEY-BACK GUARANTEE</h4>
                      <p>We offer a 30-day money back guarantee.</p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-3 col-6">
                  <div class="process-box">
                    <div class="process-image">
                      <img src={pr3} alt="pr3" />
                    </div>
                    <div class="process-text">
                      <h4>HASSLE-FREE WARRANTY</h4>
                      <p>
                        If it isn’t love at first listen, returns are
                        hassle-free.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-3 col-6">
                  <div class="process-box">
                    <div class="process-image">
                      <img src={pr4} alt="pr4" />
                    </div>
                    <div class="process-text">
                      <h4>ONLINE CUSTOMER SERVICE</h4>
                      <p>Call our expert for help creating your system.</p>
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
                        <img src={logo} alt="logo" />
                      </div>
                      <p>
                        Musicians Avenue! Established in 1996, has evolved to
                        cater for all aspects of the music industry ranging from
                        P.A Systems, Studio Products and DJ Gear to Guitars,
                        Keyboards, Amplifiers, Drums and Percussion. Musicians
                        Avenue remains a family owned store and continues to
                        provide good old fashioned customer service.
                      </p>
                      <h5>
                        We also do repairs and maintenance on all musical
                        instruments.
                      </h5>
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
                        <li>
                          Monday <span>9:30am-5:30pm</span>
                        </li>
                        <li>
                          Tuesday<span>9:30am-5:30pm</span>
                        </li>
                        <li>
                          Wednesday <span>9:30am-5:30pm</span>
                        </li>
                        <li>
                          Thursday <span>9:30am-5:30pm</span>
                        </li>
                        <li>
                          Friday <span>9:30am-5:30pm</span>
                        </li>
                        <li>
                          Saturday <span>9:30am-5:30pm</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-xl-3 col-lg-6 col-md-6 col-12">
                    <div class="block address">
                      <h4>Contact Us</h4>
                      <ul>
                        <li class="map">
                          <Link to="/map">
                            <FontAwesomeIcon icon={faMapMarker} />
                          </Link>
                          63 Ware St, Fairfield NSW 2165
                        </li>
                        <li class="phone">
                          <Link to="/phone">
                            <FontAwesomeIcon icon={faPhone} />
                          </Link>
                          <Link to="tel:(02) 9755 9999">(02) 9755 9999</Link>
                        </li>
                        <li>
                          <div class="icon">
                            <FontAwesomeIcon
                              icon={faEnvelope}
                            ></FontAwesomeIcon>
                          </div>
                          <a href="mailto:musiciansavenue@bigpond.com">
                            musiciansavenue@bigpond.com
                          </a>
                        </li>
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
                                  <Link to="/zip">
                                    "Zip - Own it now,pay later
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/about">About Us</Link>
                                </li>
                                <li>
                                  <Link to="/delivery">
                                    Delivery Information
                                  </Link>
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
                                  <Link to="/person">Returns</Link>
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
                                  <Link to="/person">My Account</Link>
                                </li>
                                <li>
                                  <Link to="/order">Order History </Link>
                                </li>
                                <li>
                                  <Link to="/wishlist">Wish List</Link>
                                </li>
                                <li>
                                  <Link to="/new">News Letter</Link>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div class="col-lg-4 col-md-4 col-12">
                            <div class="block">
                              <h4>Sign up to our monthly newsletter</h4>
                              <form>
                                <div class="form-group">
                                  <input
                                    type="email"
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter Your Email ID here..."
                                  />
                                </div>
                                <button type="submit" class="btn btn-primary">
                                  Submit
                                </button>
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
                            <li>
                              <img src={c2} alt="c2" />
                            </li>
                            <li>
                              <img src={c3} alt="c3" />
                            </li>
                            <li>
                              <img src={c4} alt="c4" />
                            </li>
                            <li>
                              <img src={c5} alt="c5" />
                            </li>
                            <li>
                              <img src={c6} alt="c6" />
                            </li>
                            <li>
                              <img src={c8} alt="c8" />
                            </li>
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
      </div>
    </>
  );
}
