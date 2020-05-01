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
                <Link to="/our-firm">Our Firm</Link>
              </li>
              <li>
                <Link to="/our-services">Our Services</Link>
              </li>
              <li>
                <Link to="/our-commitment">Our Commitment</Link>
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
                <Link to="/#employment-opportunities">
                  Employment Opportunities
                </Link>
              </li>
              <li>
                <Link to="/#submit-bids">Submit Bids</Link>
              </li>
              <li>
                <Link to="/#info">Info</Link>
              </li>
              <li>
                <Link to="/#msds">MSDS</Link>
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
              <a href="mailto:info@wieserbrothers.com">
                info@wieserbrothers.com
              </a>
            </p>

            <ul className="social-nav">
              <li>
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaYoutube />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram />
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

  @media ${device.mobileM} {
    max-width: 768px;
    
    li {
      padding: 0.2rem 0;
      font-size: 110%;
    }
  }
  @media ${device.tablet} {
    max-width: 978px;
    
    font-size: 14px;
    li {
      padding: 0 0;
      font-size: 95%;
    }
  }
  @media ${device.desktop} {
    
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

  .social-nav {
    display: flex;
    flex-direction: row;
    li {
      margin: 0 0.8rem 0 0;
    }
  }
`
