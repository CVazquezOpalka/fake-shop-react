import React from "react";
import styled from "styled-components";

export const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  width: 100vw;
  min-height: calc(100vh - 60px);
  height: auto;
`;
