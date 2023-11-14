import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = ({ product }) => {
  return (
    <Container>
      <Link to={`/product/${product.id}`}>
        <div className="imgbox">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="content">
          <span className="ball">oferta del día</span>
          <span className="precio">$9518</span>
          <h2>
            ${product.price} <span>10% OFF</span>
          </h2>
          <p className="cuota">
            Mismo precio en 6 cuotas de{" "}
            {(product.price / 6).toString().slice(0, 5)}
          </p>
          <p className="envio">
            Envio gratis{" "}
            <span>
              {" "}
              <i>Full</i>
            </span>
          </p>
          <p className="producto">{product.title.slice(0, 26)}</p>
        </div>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  width: 250px;
  height: 400px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.2s ease;
  &:hover {
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  }
  .imgbox {
    width: 100%;
    height: 210px;
    padding: 20px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    img {
      width: 70%;
      height: 100%;
    }
  }
  .content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 3px;
    .ball {
      padding: 2px 4px;
      background: #3483fa;
      border-radius: 3px;
      text-transform: uppercase;
      color: #fff;
      font-weight: 600;
      font-size: 12px;
    }
    .precio {
      opacity: 0.8;
      font-size: 13px;
      text-decoration: line-through;
      margin: 2px 0;
    }
    h2 {
      width: 100%;
      font-weight: 400;
      display: flex;
      align-items: center;
      gap: 10px;
      letter-spacing: 1px;
      span {
        font-size: 13px;
        color: #00a650;
      }
    }
    .cuota {
      text-align: start;
      font-size: 13px;
      color: #00a650;
      letter-spacing: 1px;
    }
    .envio {
      text-align: start;
      font-size: 13px;
      color: #00a650;
      letter-spacing: 1px;
      font-weight: bold;
    }
    .producto {
      text-align: start;
      font-size: 13px;
      letter-spacing: 1px;
      font-weight: bold;
    }
  }
`;
