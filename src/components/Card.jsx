import React from "react";
import styled from "styled-components";

export const Card = ({ props }) => {
  return (
    <Container>
      <div className="imgbox">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="foto de algo"
        />
      </div>
      <div className="content">
        <span className="ball">oferta del dia</span>
        <span className="precio">$9518</span>
        <h2>
          $8519 <span>10% OFF</span>
        </h2>
        <p className="cuota">Mismo precio en 6 cuotas de $2719</p>
        <p className="envio">
          Envio gratis{" "}
          <span>
            {" "}
            <i>Full</i>
          </span>
        </p>
        <p>Bolso de mano</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 250px;
  height: 400px;
  margin: 0 auto;
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
  .content{
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2px;
    .ball{
        padding: 5px 10px;
        background: rgba(6, 8, 118,0.8);
        border-radius: 5px;
        text-transform: uppercase;
        color: #fff;
        font-weight: bold;
    }
    .precio{
        opacity: 0.8;
        font-size: 13px;
        text-decoration: line-through;
        margin: 2px 0;
    }
    h2{
        width: 100%;
        font-weight: 400;
        display: flex;
        align-items: center;
        gap: 20px;
        letter-spacing: 1px;
        span{
            font-size:13px;
            color: rgb(62, 108, 13);
        }
    }
  }
`;
