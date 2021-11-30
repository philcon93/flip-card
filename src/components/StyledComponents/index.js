import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: "mainContent" "mainContent" "secondaryContent";
  font-family: sans-serif;
  text-align: center;
  padding: 0;
  position: relative;
`;

export const MainContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 2em 0;
  grid-area: ${(props) => props.gridArea};
  background-image: url("${(props) => props.img}");
  background-position: center;
  background-size: cover;
  position: relative;
  color: #fff;
`;

export const HeadingOne = styled.h1`
  color: #fff;
  background-color: #da011a;
  display: inline-block;
  padding: 0.3em 1em;
  margin: 0 0 1em;
  text-transform: uppercase;
`;

export const HeadingTwo = styled.h1`
  text-transform: uppercase;
`;

export const SecondaryContent = styled.div`
  width: 100%;
  height: 100%;
  grid-area: ${(props) => props.gridArea};
  position: relative;
  background-color: #da011a;
  color: #fff;
`;
