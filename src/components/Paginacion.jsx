import React from "react";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const Paginacion = ({ page, totalPage, prev, next }) => {
  return (
    <Container>
      {page > 1 ? (
        <button onClick={prev}>
          <AiOutlineLeft></AiOutlineLeft> anterior
        </button>
      ) : (
        <button className="opacity" onClick={next}>
          siguiente<AiOutlineRight></AiOutlineRight>
        </button>
      )}
      <h4>
        <span className="cuadrado">{page}</span> de <span>{totalPage}</span>
      </h4>
      {page < totalPage ? (
        <button onClick={next}>
          siguiente<AiOutlineRight></AiOutlineRight>
        </button>
      ) : (
        <button className="opacity" onClick={next}>
          siguiente <AiOutlineRight></AiOutlineRight>
        </button>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  .opacity {
    visibility: hidden;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 2px 4px;
    border: none;
    background: none;
    color: #111;
    text-align: center;
    font-size: 16px;
    color: #3483fa;
    font-weight: 400;
    opacity: 0.8;
    transition: all 0.2s ease;
    cursor: pointer;
    &:hover {
      opacity: 1;
      background: none;
    }
  }
  h4 {
    .cuadrado {
      padding: 7px;
      border: 1px solid grey;
      border-radius: 3px;
    }
  }
`;
