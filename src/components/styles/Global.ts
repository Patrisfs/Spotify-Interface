import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    background-color:#000000;
    font-family: sans-serif;
    color: #ffff;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerCard = styled.main`
background-color:#121212;
`;
