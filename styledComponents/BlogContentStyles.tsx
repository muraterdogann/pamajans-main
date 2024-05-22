import styled from 'styled-components';

export const BlogContentWrapper = styled.div`
  flex-grow: 1;
`;

export const BlogTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 5%;
  text-align:center;
  color: #000;
  line-height: 1.25em;
`;

export const WPBlockHeading = styled.h2`
font-weight: 600;
font-size: 20px;
color: rgb(16, 24, 40);
line-height: 1.4em;
margin-bottom: 0.8em;
margin-top: 2.4em;
letter-spacing: normal !important;
`;

export const WPBlockParagraph = styled.p`
font-style: normal;
font-weight: 400;
font-size: 18px;
color: rgb(62, 66, 75);
display: block;
margin-bottom: 10px;
margin-top: 10px;
letter-spacing: normal !important;
`;

export const WPBlockImage = styled.figure`
margin: 5% auto;

  Image {
    height: auto;
    max-width: 100%;
    border-radius: 8px;
    loading: eager;
  }
`;

export const WPBlockButton = styled.div`

`;

export const WPBlockList = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
flex-direction: column;
`;

export const WPBlockListItem = styled.div`
font-style: normal;
font-weight: 400;
font-size: 18px;
color: rgb(62, 66, 75);
display: block;
margin-bottom: 10px;
margin-top: 10px;
letter-spacing: normal !important;
`;
