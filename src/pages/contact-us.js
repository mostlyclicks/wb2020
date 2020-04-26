import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { device } from "../components/media-queries"


const ContactUs = () => (
  <Layout>
    <StyledContactHeader>
      <h1>Contact Us</h1>
    </StyledContactHeader>

    <StyledFormContainer>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        action="/thank-you"
      >
        <ul>
          <li>
            <label>Your Name:</label>
            <input type="text" name="name" />
          </li>
          <li>
            <label>Your Email:</label>
            <input type="email" name="email" />
          </li>
          <li>
            <label>Business name:</label>
            <input type="text" name="business-name" />
          </li>
          <li>
            <label>Phone:</label>
            <input type="text" name="phone" />
          </li>
          <li>
            <label>Address 1:</label>
            <input type="text" name="address-1" />
          </li>
          <li>
            <label>Address 2:</label>
            <input type="text" name="address-2" />
          </li>
          <li>
            <label>City:</label>
            <input type="text" name="city" />
          </li>
          <li>
            <label>State:</label>
            <input type="text" name="state" />
          </li>
          <li>
            <label>Zip:</label>
            <input type="text" name="zip" />
          </li>
          <li>
            <label>Fax:</label>
            <input type="text" name="fax" />
          </li>
          <li>
            <label>Project date:</label>
            <input type="text" name="project-date" />
          </li>
          <li>
            <label>Project Type: </label>
            <select name="project-type[]">
              <option value="commercial">Commercial</option>
              <option value="agricultural">Agricultural</option>
              <option value="institutional">Institutional</option>
              <option value="concrete">Concrete</option>
              <option value="residential">Residential</option>
              <option value="other">Other</option>
            </select>
          </li>
          <li id="message">
            <label>Message:</label>
            <textarea name="message" rows="8"></textarea>
          </li>
          <li>
            <label></label>
            <button type="submit">Send</button>
          </li>
        </ul>
      </form>
      <aside>
      
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.519463895166!2d-91.28855499999996!3d43.824326000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f9542a6316ae1b%3A0x2bd832d82b2b2afc!2sWieser+Brothers+Gen+Contractor+Inc!5e0!3m2!1sen!2sus!4v1408118542618"
          width="100%"
          height="350"
          frameborder="0"
          
        ></iframe>
      </aside>
    </StyledFormContainer>
  </Layout>
)

export default ContactUs

const StyledFormWrapper = styled.section`

`

const StyledContactHeader = styled.section`
  
  margin:0px auto;
  @media ${device.tablet} {
    max-width: 768px;
  }
  @media ${device.laptop} {
    max-width: 960px;
  }
  @media ${device.laptopL} {
    max-width: 1200px;
  }
`


const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;


  form {
    
    display: flex;
    width: 100%;
    ul {
      width: 100%;
      list-style: none;
      margin-left: 0;
      padding-left: 0;

      li {
        display: flex;
        justify-content: flex-between;
        align-items: center;
        margin: 1rem 0.5rem;

        label {
          width: 160px;
          text-align: right;
          font-size: 14px;
        }
        input,
        textarea,
        select,
        button {
          padding: 0.35rem;
          font-size: 18px;
          margin-left: 0.5rem;
          flex-grow: 1 1 auto;
          width: 100%;
          // border: 1px solid green;
        }
        button {
          border-radius: 5px;
          color: #ffffff;
          background-color: var(--wbGreenDark);
        }
        #message label {
          display: flex;
          align-self: flex-start;
        }
      }
    }
  }

  aside {
    margin-top:33px;
    width: 100%;
  }

  @media ${device.tablet} {
    flex-direction: column;
    margin: 0 auto;
    max-width: 768px;
    form,
    aside {
      width: 100%;
      flex-wrap: nowrap;
    }
  }

  @media ${device.laptop} {
    flex-direction: row;
    max-width: 960px;
    aside {
      margin-left:20px;
    }
  }
  @media ${device.laptopL} {
    max-width: 1200px;
  }
`

