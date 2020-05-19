import React from 'react'
import ConditionalLayout from "../../components/ConditionalLayout"
import Logo from "../../components/Navbar/Logo"
import styled from "styled-components"

const CovidPage = () => (
  <ConditionalLayout>
    <ModalPopup>
      <h1>Wieser Brothers COVID-19 Update</h1>
      <p>
        As we continue to monitor the Coronavirus (COVID-19) and its rippling
        impact on our country, we want to ensure our clients, employees,
        subcontractors and suppliers that our 25+ year commitment to the
        industry remains stronger than ever. We are not shutting down our
        jobsites if work can be safely performed according to the CDC
        guidelines.
      </p>

      <p>
        During this time of uncertainty, Wieser Brothers is commited to deliver
        the construction services you depend on with the{" "}
        <strong>
          highest level of safety and efficiency and with minimal disruption.
        </strong>{" "}
        We will communicate any additional adjustment to our business
        operations.
      </p>

      <p>
        Please know that, as always, the health and safety of our employees,
        subcontractors, suppliers and their families is our highest priority,
        and we will remain diligent in our efforts to help prevent the spread of
        this illness.
      </p>

      <p>
        Sincerely,
        <br />
        Jeff Wieser &amp; Brian Wieser
      </p>

      <Logo alt="Wieser Brothers Logo" />
    </ModalPopup>
  </ConditionalLayout>
)

export default CovidPage

const ModalPopup = styled.div`
  padding:2rem;
 

`
