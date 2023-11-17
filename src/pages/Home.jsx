import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CardContext } from "../components/CardContext";
import { Paginacion } from "../components/Paginacion";
import {filterProduct } from "../redux/actions/product.actions";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.isLoading);
  const filter = useSelector((state) => state.product.filterProducts);
  const [page, setPage] = useState(1);
  /* Scroll al inicio */
  const onScroll = () =>
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  /* funcion de paginacion */
  const itemPerPage = 8;
  const totalPages = filter.length
    ? Math.ceil(filter.length / itemPerPage)
    : Math.ceil(product.length / itemPerPage);
  const pagination = (array) => {
    const starIndex = (page - 1) * itemPerPage;
    const endIndex = starIndex + itemPerPage;
    if (array.length) return array.slice(starIndex, endIndex);
  };
  const onPrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  const onNextPage = () => {
    if (page < totalPages) {
      setPage((nextPage) => nextPage + 1);
    }
  };

  let productPages = filter.length ? pagination(filter) : pagination(product);
  /* useEffect */
  useEffect(() => {
  
    onScroll();
  }, [page]);

  return (
    <Container>
      <Navbar>
        <ul>
          <li
            onClick={() => {
              dispatch(filterProduct(""));
              setPage(1);
            }}
          >
            <NavLink>Todos los productos</NavLink>
          </li>
          <li
            onClick={() => {
              dispatch(filterProduct("electronics"));
              setPage(1);
            }}
          >
            <NavLink>Electronicos</NavLink>
          </li>
          <li
            onClick={() => {
              dispatch(filterProduct("jewelery"));
              setPage(1);
            }}
          >
            <NavLink>Joyeria</NavLink>
          </li>
          <li
            onClick={() => {
              dispatch(filterProduct("men's clothing"));
              setPage(1);
            }}
          >
            <NavLink>Ropa para Hombres</NavLink>
          </li>
          <li
            onClick={() => {
              dispatch(filterProduct("women's clothing"));
              setPage(1);
            }}
          >
            <NavLink>Ropa para mujer</NavLink>
          </li>
        </ul>
      </Navbar>
      {loading ? (
        <h1>Cargandoo</h1>
      ) : (
        <>
          <CardContext loading={loading} list={productPages}></CardContext>
          <Paginacion
            page={page}
            totalPage={totalPages}
            next={onNextPage}
            prev={onPrevPage}
          ></Paginacion>
        </>
      )}
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
      font-size: 14px;
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
