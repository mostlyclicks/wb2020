import React from 'react'
import styled from "styled-components"
import { Link } from 'gatsby'
// import Mission from './mission'
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa"
import { device } from "./media-queries"


// COMPONENT –––––––––––––––––––––– //

const Footer = () => {
  return (
    <FooterSection>
      <FooterWrapper>
        <StyledFooter>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/firm">Our Firm</Link>
              </li>
              <li>
                <Link to="/services">Our Services</Link>
              </li>
              <li>
                <Link to="/commitment">Our Commitment</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/news-events">News & Events</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link to="/firm/careers">Careers</Link>
              </li>
              <li>
                <a href="mailto:bids@wieserbrothers.com">Submit Bids</a>
              </li>
              <li>
                <a href="mailto:info@wieserbrothers.com">Info</a>
              </li>
              <li>
                <a href="http://www.wieserbrothers.com/redirects">MSDS</a>
              </li>
              <li>
                <a
                  href="https://www.employeenavigator.com/benefits/Account/Login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Employee Login
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p>
              200 Twilite Street
              <br />
              La Crescent, MN 55947
              <br />
              507.895.8903
              <br />
              Fax: 507.895.8438
              <br />
              <a id="email" href="mailto:info@wieserbrothers.com">
                info@wieserbrothers.com
              </a>
            </p>

            <ul className="social-nav">
              <li>
                <a
                  href="https://www.facebook.com/wieserbrothersgeneralcontractor/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={28} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/wieser-brothers-inc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={28} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCPpguLAYPYYh2FMS80KRk9w"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube size={28} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/wieser_brothers/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={28} />
                </a>
              </li>
            </ul>
          </div>
        </StyledFooter>
      </FooterWrapper>
    </FooterSection>
  )
}

export default Footer




// STYLES ––––––––––––––––––––––––– //

const FooterSection = styled.section`
  background-color:var(--darkGray);
`

const FooterWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  color:rgba(255,255,255,.7);
  
  a {
    
    color:rgba(255,255,255,.7);
  }

  @media ${device.tablet} {
    max-width: 768px;
    
    li {
      padding: 0.2rem 0;
      font-size: 110%;
    }
  }
  @media ${device.laptop} {
    max-width: 960px;
    
    font-size: 14px;
    li {
      padding: 0 0;
      font-size: 95%;
    }
  }
  @media ${device.laptopL} {
    
    max-width: 1200px;
  }
`

const StyledFooter = styled.footer`
  min-height: 50px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  div {
    flex: 1 0 auto;
    margin: 0.5rem 0.5rem;
    margin-bottom: 2rem;
    p {
      margin-top: 0;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    margin: 4px;
    line-height: 22px;
    padding: 4px;
    text-decoration: none;

    

    &:hover {
      transition: .6s;
      background-color: var(--orange);
      color:#fff;
    }
  }
   a#email {
      margin:0;
      padding:0;
    }

  .social-nav {
    display: flex;
    flex-direction: row;
    a {
      color:var(--orange);
    }
    li {
      margin: 0 0.8rem 0 0;
    }
  }
`
