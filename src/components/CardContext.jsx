import React from "react";
import styled from "styled-components";
import { Card } from "./Card";

export const CardContext = ({ list, loading }) => {
  return (
    <Container>
      {list && list.map((e) => <Card key={e.id} product={e}></Card>)}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  min-height: 450px;
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  row-gap: 40px;
`;
