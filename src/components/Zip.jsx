import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import {
  faSearch,
  faHeart,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import logo from "./images/logo.png";
import c2 from "./images/c2.jpg";
import c3 from "./images/c3.jpg";
import c4 from "./images/c4.jpg";
import c5 from "./images/c5.jpg";
import c6 from "./images/c6.jpg";
import c8 from "./images/c8.jpg";
import zip1 from "./images/zip1.png";
import zip2 from "./images/zip2.png";
import zippay from "./images/zippay.png";
import money from "./images/money.png";
import zippaylight from "./images/zippaylight.svg";
export default function Zip() {
  return (
    <>
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
                <NavDropdown title="GUITAR/BASS" id="guitar-bass-dropdown">
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
      <div className="zip-main">
        <h4>ZIP - OWN IT NOW,PAY LATER</h4>
        <label>
          <img src={zip1} alt="zip1" />
        </label>
        <br></br>
        <br></br>
        <label>
          <img src={zip2} alt="zip2" />
        </label>
        <br></br>
        <br></br>

        <div className="zip">
          <div className="container-fluid">
            <div className="row zip-content">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="zip-pay">
                  <label>
                    <img src={zippaylight} alt="zippay" />
                  </label>
                  <br></br>
                  <br></br>
                  <h6>Up to $1,000</h6>
                  <h5>Interest free always</h5>
                  <button className="btn-sign">Sign Up</button>
                  <i class="fas fa-yen-sign"></i>
                  <i class="fa-solid fa-shield-halved"></i>
                  <ul className="check-list" type="arrow">
                    <li>$350–$1,000 credit limit</li>
                    <li>Interest free always</li>
                    <li>
                      $7.95 monthly account fee
                      <small>
                        {" "}
                        Waived if you pay your statement closing balance in full
                        by the due date.
                      </small>
                    </li>
                    <li>No establishment fee</li>
                    <li>Repay from $10/week</li>
                    <li>Use your account everywhere Visa is accepted^</li>
                    <li>
                      Earn exclusive cashback offers when you shop eligible
                      offers¹
                    </li>
                  </ul>
                  <div className="learn-more">
                    <Link to="/learn">Learn more</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="zip-pay">
                  <label>
                    <img src={zippaylight} alt="money" />
                  </label>
                  <br></br>
                  <br></br>
                  <h6>Up to $6,000</h6>
                  <h5>From 3 months interest free*</h5>
                  <button className="btn-sign">Sign Up</button>
                  <ul type="arrow" className="check-list">
                    <li>$1,000–$6,000 </li>
                    <li>credit limit</li>
                    <li>
                      3 - 12 months interest free* Up to 12 months interest free
                      terms available at select Zip partners
                    </li>
                    <li>$7.95 monthly account fee Waived if nothing owing</li>
                    <li>One-off establishment fee may apply</li>
                    <li>
                      Repay from $10/week or 3% of the outstanding balance
                      (whichever is greater)
                    </li>
                    <li>
                      We automatically split purchases over $300 into equal
                      instalments to help you avoid interest charges^
                    </li>
                  </ul>
                  <div className="learn-more">
                    <Link to="/learn">Learn more</Link>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4>Frequently Asked Questions</h4>
              <select className="option-zip">
                <option>
                  Is Zip is perfect for everyday? <br></br>
                  <br></br>
                  Zip is perfect for everyday purchases and offers the ability
                  to transact just about<br></br> everywhere, so you can manage
                  all your expenses in one place and repay on a schedule that
                  suits you.<br></br>
                  To shop instore, Zip Pay users can tap to pay at checkout.^ To
                  get started with tap to pay,<br></br>
                  simply navigate to the Zip app and click on the pay tab in the
                  bottom menu. <br></br>
                  From there, you can follow the prompts to set up your card and
                  add it to your Apple Pay or Google Pay wallet. To shop online,
                  use the Zip mobile app and generate a single-use card at{" "}
                  <br></br>
                  the checkout anywhere Visa is accepted.
                </option>
              </select>
              <br></br>
              <br></br>
              <select className="option-zip">
                <option>
                  Where can i shop with Zip? <br></br>
                  <br></br>
                  See the full list where you can shop with Zip:
                  https://zip.co/au/shop Shop everywhere online where Visa is
                  accepted with Zip's single-use card feature on the Zip mobile
                  app.^ Or shop anywhere instore you see Zip at checkout - we're
                  partnered with 40,000+ retail stores. Additionally, you can
                  use your Zip account to pay BPAY bills and buy gift cards for
                  food, fuel and subscriptions.
                </option>
              </select>
              <br></br>
              <br></br>
              <select className="option-zip">
                <option>
                  How do repayments works?<br></br>
                  <br></br>
                  Repayments are automatically direct debited from the payment
                  method that you added when you created the account. You can
                  change the payment method at any time and the frequency of
                  your payments to weekly, fortnightly or monthly as long as
                  you're covering the minimum monthly repayments. Choose what
                  works best for you.
                </option>
              </select>
              <br></br>
              <br></br>
              <select className="option-zip">
                <option>
                  What are the Fees? With Zip Pay a $7.95 monthly account fee
                  applies, we will waive the fee if you pay your statement
                  closing balance in full, by the due date. With Zip Money a
                  $7.95 monthly account fee applies which is waived if you have
                  nothing owing.
                </option>
              </select>
              <br></br>
              <br></br>
              <select className="option-zip">
                <option>
                  How do refunds works? If you return goods to a retailer and
                  they agree to a refund, your Zip account will be credited with
                  the agreed refund amount. The funds will then be put towards
                  your owing balance or depending on the refund amount your
                  account may be placed in credit.
                </option>
              </select>
              <br></br>
              <br></br>
              <select className="option-zip">
                <option>
                  Is Zip is a buy now,pay later like afterpay,klarna,humm and
                  latitude Yes! Zip allows you to shop just about everywhere,
                  online and instore. We give you the flexibility to set your
                  repayment schedule to suit your lifestyle - choose weekly,
                  fortnightly, or monthly. You can also pay your bills, buy gift
                  cards and earn rewards when you use the Zip app.
                </option>
              </select>
              <br></br>
              <br></br>
              <br></br>
              <h6>
                Zip Pay - Minimum monthly repayments are required. A monthly
                account fee of $7.95 applies and is subject to change. Pay your
                closing balance in full by the due date each month and we’ll
                waive the fee. Available to approved applicants only and subject
                to completion of satisfactory credit check. Other charges may be
                payable. T&Cs apply. *Zip Money - Interest free term subject to
                minimum spend and promotional partner offer. Available to
                approved applicants only and subject to completion of
                satisfactory credit check. Instalment plan splits eligible
                purchases of $300 and above into equal repayments within the
                interest free period. The repayment advertised will repay the
                transaction balance within the interest free period. A monthly
                account fee of $7.95 will also apply and a one-off establishment
                fee may apply for new customers. Minimum monthly payments are
                required -paying only the minimum monthly repayment may not
                necessarily repay a purchase within the interest free period.
                Any balance outstanding at the expiry of the interest free
                period will be charged at the applicable variable rate. The
                applicable standard variable rate is 25.9% per annum, as at 1
                May 2023. Interest, fees and charges are subject to change.
                Terms & conditions apply and are available on application. See
                your contract for further details. Credit provided by ZipMoney
                Payments Pty Ltd (ABN 58 164 440 993), Australian Credit Licence
                Number 441878.
              </h6>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      </div>
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
                    Musicians Avenue! Established in 1996, has evolved to cater
                    for all aspects of the music industry ranging from P.A
                    Systems, Studio Products and DJ Gear to Guitars, Keyboards,
                    Amplifiers, Drums and Percussion. Musicians Avenue remains a
                    family owned store and continues to provide good old
                    fashioned customer service.
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
                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
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
    </>
  );
}
