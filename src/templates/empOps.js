import React from 'react'
import { Link, graphql } from 'gatsby'
import { RichText } from "prismic-reactjs"
import styled from "styled-components"

const EmpOp = ( {data} ) => {

    const empOpData = data.prismic.allEmployment_opportunitys.edges[0]

  return (
    <>
    <h1>{RichText.asText(empOpData.node.title)}</h1>
    <JobDescription>
      {RichText.render(empOpData.node.job_description)}
    </JobDescription>

    </>
  )
}

export default EmpOp


// {/* query using the UID */}
 export const query = graphql`
  query EmpOppQuery($uid: String) {
  prismic {
    allEmployment_opportunitys(uid: $uid) {
      edges {
        node {
            title
            job_description
          }
        }
      }
    }
  } 
 `

 const JobDescription = styled.div`
 
 `