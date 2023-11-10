import React from "react";
import styled from "styled-components";
import LogoShop from "../assets/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const Navbar = () => {
  return (
    <Container>
      <div className="nav_container">
        <Logo>
          <img src={LogoShop} alt="Logo del FakeShop" />
        </Logo>
        <Nav>
          <ul>
            <li>
              Categorias
              <div className="float"></div>
            </li>
            <li>Creá tu Cuenta</li>
            <li>Ingresá</li>
            <li>Mis compras</li>
            <li>
              <AiOutlineShoppingCart></AiOutlineShoppingCart>
            </li>
          </ul>
        </Nav>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 90px;
  background-color: #e3dc0a;
  position: relative;
  .nav_container {
    width: 1250px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    padding: 10px;
    width: 100%;
    object-fit: contain;
  }
`;

const Nav = styled.nav`
  width: 650px;
  height: 100%;
  ul {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    li {
      position: relative;
      padding: 5px 10px;
      color: #111;
      font-weight: 500;
      opacity: 0.6;
      transition: all 0.2s ease;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
      svg{
        font-size: 25px;
      }
      .float {
        position: absolute;
        top: 40px;
        left: -30px;
        background: red;
        width: 150px;
        transition: heigth 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
      }
    }
  }
`;
