import React from "react";
import styled from "styled-components";
import { CardContext } from "../components/CardContext";

export default function Home() {
  return (
    <Container>
      <Navbar>
        <ul>
          <li>Todos los productos</li>
          <li>Electronicos</li>
          <li>Joyeria</li>
          <li>Ropa para Hombres</li>
          <li>Ropa para mujer</li>
        </ul>
      </Navbar>
      <CardContext></CardContext>
    </Container>
  );
}

const Container = styled.div`
  width: 1250px;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
`;

const Navbar = styled.div`
  width: 100%;
  height: 35px;
  background: yellow;
  border-radius: 20px;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    list-style: none;

    li {
      position: relative;
      cursor: pointer;
      font-size: 18px;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 1px;
      opacity: 0.6;
      transition: all 0.2s ease;
      &:hover {
        opacity: 1;
      }
      &::after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        display: block;
        width: 0%;
        height: 1px;
        background: #111;
        transition: width 0.3s ease;
      }
      &:hover::after {
        width: 100%;
        opacity: 1;
      }
    }
  }
`;
