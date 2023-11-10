import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";

export const Footer = () => {
  return (
    <Container>
      <div className="container">
        <div className="media">
          <ul>
            <li>Mi cuenta</li>
            <li>Sobre el proyecto</li>
            <li>Ver mas</li>
          </ul>
        </div>
        <div className="social">
          <div className="title">
            <h4>Sigueme en mis redes</h4>
          </div>
          <div className="icons">
            <ul>
              <li className="in">
                <AiFillLinkedin></AiFillLinkedin>
              </li>
              <li className="web">
                <CgWebsite></CgWebsite>
              </li>
              <li className="git">
                <AiFillGithub></AiFillGithub>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copi">
        <h4>Proyecto de muestra creado por Cristian Vazquez </h4>
      </div>
    </Container>
  );
};

const Container = styled.footer`
  width: 100vw;
  height: 150px;
  background-color: #e3dc0a;
  .container {
    width: 100%;
    height: 110px;
    display: flex;
    padding: 10px;
    .media {
      width: 50%;
      height: 100%;
      ul {
        list-style: none;
        width: 20%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        li {
          opacity: 0.6;
          transition: all 0.2s ease;
          cursor: pointer;
          &:hover {
            opacity: 1;
          }
        }
      }
    }
    .social {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      .title {
        width: 100%;
        height: 35px;
        h4 {
          text-align: center;
          font-weight: normal;
        }
      }
      .icons {
        height: calc(100%-35px);
        ul {
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 35px;
          li {
            font-size: 30px;
            cursor: pointer;
            transition: all 0.3s ease;
            &:hover {
              transform: scale(1.1);
            }
          }
          .in {
            color: blue;
          }
          .git {
            color: #333;
          }
          .web {
            color: tomato;
          }
        }
      }
    }
  }
  .copi {
    width: 100%;
    height: calc(100% - 110px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
