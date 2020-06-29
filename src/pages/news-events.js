import React, { useEffect, useRef } from 'react';
import { Link, graphql } from "gatsby"
import { getCursorFromDocumentIndex } from 'gatsby-source-prismic-graphql';
import Moment from "react-moment"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"
import Layout from "../components/layout"
import { device } from "../components/media-queries"
import RandomTestimonial from "../components/testimonials"
import bgImg from "../images/news-events-header.jpg"
import bgImg2 from "../images/trust-partnership-excellence.png"



const NewsEvents = props => {
  const limit = 9;
  const didMountRef = useRef(false);
  const [page, setPage] = React.useState(-1);
  const [data, setData] = React.useState(props.data.prismic);
  // const newsEvents = data.prismic.allNews_and_eventss.edges
  console.log(page)

  // if (!data) {
  //   return <div>no data</div>;
  // }

  const onPreviousClick = () => {
    setPage(page - limit)
    console.log(page)
  };
  const onNextClick = () => setPage(page + limit);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }

    props.prismic
      .load({ variables: { after: getCursorFromDocumentIndex(page) } })
      .then(res => setData(res.data));
  }, [page]);
  

  return (
    <Layout>
    <NewsWrapper>
      <L2MainImage>
        <L2Title>
          <h1>News & Events</h1>
        </L2Title>
      </L2MainImage>
      <MainContent>
       
        <NewsList>
            {data.allNews_and_eventss.edges.map(article => {
            return (
              <Item>
                <Link to={`/news-events/${article.node._meta.uid}`}>
                  <ItemImg
                    style={{
                      backgroundImage:
                        "url(" + article.node.thumbnail.url + ")"
                    }}
                  ></ItemImg>
                  <ItemArticle>
                    <small>
                      <Moment format="MMMM D, YYYY">
                        {article.node.date_published}
                      </Moment>
                    </small>
                    <h3>{RichText.asText(article.node.title)}</h3>
                  </ItemArticle>
                </Link>
              </Item>
            )
          })}
            
        </NewsList>
          

          
        <L2Navigation>
            
          <RandomTestimonial />
        </L2Navigation>
          <PaginationNav>
            <button disabled={page <= 0} onClick={onPreviousClick}>
              &larr;Newer Articles
              </button>
            <button disabled={!data.allNews_and_eventss.pageInfo.hasNextPage} onClick={onNextClick}>
              Older Articles&rarr;
              </button>
          </PaginationNav>
      </MainContent>
      </NewsWrapper>
    </Layout>
  )
}

export default NewsEvents


// get list of all news-events

export const query = graphql`
  query ($limit: Int = 9, $last: Int, $after: String, $before: String)
  {
    prismic {
      allNews_and_eventss(first: $limit, last: $last, after: $after, before: $before, sortBy: date_published_DESC) {
        pageInfo {
          startCursor
          hasNextPage
          hasPreviousPage
          endCursor
        }
        edges {
          node {
            title
            _meta {
              uid
            }
            thumbnail
            date_published
          }
        }
        
      }
    }
  }
`

const PaginationNav = styled.div`
  
  display:flex;
  justify-content:space-between;
  margin-right:20px;
  padding:3rem;
  
  button {
    font-family:'Open Sans';
    border-radius:10px;
    border:none;
    padding:1rem;
    font-size:16px;
    &:hover {background-color:;#fff;}

    
  }
`

const NewsWrapper = styled.div`
  
  background-image:url(${bgImg2});
  background-repeat:no-repeat;
  background-position-x:100%;
  background-position-y:500px;
  background-size:40%;

`
const L2MainImage = styled.section`
  background-image:url(${bgImg});
  display:flex;
  justify-content:flex-start;
  align-items:flex-end;
  height:500px;
  width:100%;
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  margin-top:-200px;
`

const L2Title = styled.div`
width:100%;
  h1 {
    display:inline-block;
    margin-bottom:-30px;
    margin-left:auto;
    margin-right:auto;
    color:#ffffff;
    font-size:28px;
    font-family:'IBM Plex Serif';
    background-color: var(--darkGray);
    padding:2rem 3rem;
    box-shadow:5px 5px 10px rgba(0,0,0,.2);
    border-top:6px solid var(--orange);
  }
@media ${device.tablet} {
  max-width:768px;
  margin:0 auto;
}
@media ${device.laptop} {
  max-width:960px;
  margin:0 auto;
}
@media ${device.laptopL} {
  max-width:1200px;
  margin:0 auto;
}
`


const MainContent = styled.section`
    width:100%;
    margin:80px auto;
    display:grid;
    grid-template-columns:1fr;

    

    @media ${device.tablet} {
      grid-template-columns:2fr 1fr;
      max-width:768px;
    } 
    @media ${device.laptop} {
      grid-template-columns:3fr 1fr;
      max-width:960px;
    }
    @media ${device.laptopL} {
      max-width:1200px;
    }  
`

const NewsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;


  @media ${device.tablet} {
    max-width: 768px;
    grid-template-columns: 1fr 1fr;
    margin-right: 20px;
  }
  @media ${device.laptop} {
    max-width: 960px;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media ${device.laptopL} {
    max-width: 1200px;
  }
`

const L2Navigation = styled.aside`
  padding-top:120px;
`

const Item = styled.div`
  display: flex;
  background-color: #f3f3f3;
  a {
    text-decoration: none;
  }
  &:hover {
    top: -2px;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  }
  color: #444;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  min-height: 100%;
  position: relative;
  top: 0;
  transition: all 0.1s ease-in;
  @media {device.tablet} {
    // max-height:400px;
  }
`

const ItemArticle = styled.article`
  
    padding: 20px;
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  
  h3 {
    font-family:'IBM Plex Serif';
    flex:1;
  }
  h5 {
    justify-content:flex-end;
  }
`

const ItemImg = styled.div`
  padding-bottom: 90%;
  background-size: cover;
  background-position: center center;
  @media {device.tablet} {
    padding-bottom:50%;
    
  }
`

