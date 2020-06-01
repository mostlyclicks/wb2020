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
                <Link to="/firm">Firm</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/commitment">Commitment</Link>
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
                <a href="http://planroom.wieserbrothers.com/" 
                target="_blank"
                rel="noopener noreferrer"
                >Plan Room</a>
              </li>
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
                <a href="https://msdsmanagement.msdsonline.com/0e7c89d7-0615-4059-8eec-baa966b2c76e/ebinder/?nas=True" target="_blank"
                  rel="noopener noreferrer">MSDS</a>
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
              <li>
                <a href="https://identity.team.viewpoint.com/account/login?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dmyviewpoint-portal-production%26redirect_uri%3Dhttps%253A%252F%252Fteam.viewpoint.com%252Fsignin-oidc%26response_type%3Dcode%2520id_token%26scope%3Dopenid%2520profile%2520email%2520roles%2520microservice%2520offline_access%26response_mode%3Dform_post%26nonce%3D637249843466696082.YWNiZmJmOGQtYmEzZS00NDNhLWJkYmQtMWI4ZWQ4MGYwN2QwYjgyZDRkMDItYWRlMC00NjZjLTkxZDktYTFiNWVlNDcyYTU1%26acr_values%3Dmetrics%253AeyJscHQiOiI2MzcyNDk4NDM0NjY2OTY4ODQifQ%253D%253D%26state%3DCfDJ8HmUSfCiWOVAv7zeL4EwEITrOqsvhgPUevNxH-RaDgdU9gUenZpK8bGvio4IWgNTgFxTt0SWKjiR9we4JXRybT4wIcxmmc8PYryaBWTuVlHhN0vEiGi1ZRHfKc5NQqsggMMNHrz7rI-M25qDg-TzCBem6tWkJh3slZZsrUV-Tp--sYs6R-Dpk5UZuFSFoJgE1UY88G6rNJDgnCuVS5CdklFs_5ZuIm5t0LA7m1-kC3_4ZMR4edxbrZor6Y_usdyC6ggaYjgmjTLCZGb-6sxdXhwp7H_PgxXM5zS9YH10rsZ4V4Xa-Fki7K_9Datjn74YEfxUumncTBEckfN54Yk--1c" rel="noopener noreferrer" target="_blank">Subcontractors</a>
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
