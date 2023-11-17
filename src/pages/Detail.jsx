import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiTwotoneThunderbolt } from "react-icons/ai";
import { TbReload } from "react-icons/tb";
import { BsShieldCheck, BsTrophy } from "react-icons/bs";
import { useParams } from "react-router-dom";
import Swiper from "../components/Swiper";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/actions/product.actions";

function Detail() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const isLoading = useSelector((state) => state.product.isLoading);
  const { id } = useParams();
  const categoryItem = product.category
 
  /* Funcion para el swiper */

  /* funcion de oferta */
  const reducePrice = () => {
    return parseFloat(product.price - product.price * 0.1)
      .toString()
      .slice(0, 6);
  };
  /* funcion de fecha de entrega */
  function obtenerFechaEntrega() {
    let fechaActual = new Date();
    let mes = fechaActual.toString().split(" ")[1];
    let fechaEntrega = Number(fechaActual.toString().split(" ")[2]) + 7;
    let diasAdicionales = Number(fechaActual.toString().split(" ")[2]) + 12;
    return `entre el ${fechaEntrega} y ${diasAdicionales} ${mes} `;
  }
  /* scroll al inicio */
  const onScroll = () =>
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  /* useEffect  */
  useEffect(() => {
    dispatch(fetchProduct(id));
    onScroll();
  }, [id]);
  /* Condicional de carga */
  if (isLoading) {
    return <h1>Cargando producto</h1>;
  } else
    return (
      /* Renderizado del producto con sus atributos */
      <>
        <Container>
          <div className="title-banner">
            <p>
              <span className="interes">Cosas que podrian interesarte: </span>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              ullam?
            </p>
            <p className="links">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              sequi obcaecati error quasi facere quo iste maxime, vitae expedita
              magnam?
            </p>
          </div>
          <div className="box">
            <div className="slider">
              <div className="img-mini-box">
                <img src={product.image} alt="" />
              </div>
            </div>
            <div className="image">
              <img src={product.image} alt="" />
            </div>
            <div className="content">
              <div className="icon">
                <AiOutlineHeart></AiOutlineHeart>
              </div>
              <h3 className="badge">Nuevo | +10mil vendidos</h3>
              <h1 className="title-content">{product.title}</h1>
              <div className="rating">el rating mas pro</div>
              <span className="tarjeta">ahora 12</span>
              <div className="prices">
                <h3 className="rebaja">{product.price}</h3>
                <h1 className="price">
                  ${reducePrice()} <span className="green">10% OFF</span>
                </h1>
                <h3 className="medios">Ver todos los medio de pago</h3>
                <div className="tarjeta">oferta del día</div>
              </div>
              <div className="overviews">
                <h2>Lo que tienes que saber de este producto</h2>
                <p>{product.description}</p>
              </div>
            </div>
            <div className="cart">
              <div className="content-box-cart">
                <div className="box-title">
                  <h2 className="entrega">
                    Llega gratis <span>{obtenerFechaEntrega()}</span>
                  </h2>
                  <p className="promocion">Stock disponible</p>
                  <p className="almacen">
                    Alamcenado y enviado por{" "}
                    <span>
                      <AiTwotoneThunderbolt /> Fake Full
                    </span>
                  </p>
                </div>
                <div className="botones">
                  <button className="buy">Comprar ahora</button>
                  <button className="add">Agregar al carrito</button>
                </div>
                <div className="aplicaciones">
                  <ul>
                    <li>
                      <p className="formfield">
                        {" "}
                        <TbReload /> Devolucion gratis.
                      </p>
                      <span className="field">
                        Tenés 30 dias desde que lo recibis
                      </span>
                    </li>
                    <li>
                      <p className="formfield">
                        <BsShieldCheck /> Compra Portegida
                      </p>
                      <span className="field">
                        Recibi el producto que esperabas o te devolvemos tu
                        dinero
                      </span>
                    </li>
                    <li>
                      <p className="formfield">
                        <BsTrophy /> Store Points
                      </p>
                      <span className="field">
                        con tu compra sumas 1700 StorePoints
                      </span>
                    </li>
                    <li>
                      <span className="field">
                        12 meses de garantia de fabrica
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Salto>
          <hr />
        </Salto>
        <ProductosSimilares>
          <div className="box-content">
            <h1 className="title-content">Productos relacionados</h1>
            <div className="slider-content">
              <Swiper category={categoryItem}/>
            </div>
          </div>
        </ProductosSimilares>
      </>
    );
}

export default Detail;

const Container = styled.main`
  width: 100%;
  min-height: 91.3vh;
  height: auto;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.1);
  .title-banner {
    width: 1200px;
    height: 70px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;

    .interes {
      font-weight: bold;
    }
    .links {
      color: #3483fa;
      font-size: 13px;
    }
  }
  .box {
    width: 1200px;
    min-height: 450px;
    height: auto;
    background-color: #fff;
    margin: 20px auto;
    overflow: hidden;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 90px 350px 350px auto;
    gap: 10px;
    .slider .image .content .cart {
      width: 100%;
      height: auto;
    }
    .slider {
      margin: 10px 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
      .img-mini-box {
        cursor: pointer;
        width: 60px;
        height: 60px;
        margin: 5px auto;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 60%;
          object-fit: contain;
        }
      }
    }
    .image {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 50%;
      }
    }
    .content {
      position: relative;
      .icon {
        position: absolute;
        top: 20px;
        right: 40px;
        stroke-width: 1.5;
        font-size: 24px;
        color: #3483fa;
        cursor: pointer;
      }
      .badge {
        margin-top: 30px;
        margin-bottom: 10px;
        color: rgba(0, 0, 0, 0.55);
        font-size: 14px;
        font-weight: 400;
        white-space: pre-wrap;
      }
      .title-content {
        flex: auto;
        color: rgba(0, 0, 0, 0.9);
        font-size: 22px;
        margin-bottom: 8px;
        font-weight: bold;
        line-height: 1.18;
        word-break: break-word;
      }
      .rating {
        color: #3483fa;
        font-size: 16px;
      }
      .tarjeta {
        display: inline-block;
        margin: 8px 0;
        font-size: 13px;
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        background-color: #3483fa;
        padding: 4px 6px;
        border-radius: 3px;
      }
      .prices {
        width: 100%;
        height: 120px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        .rebaja {
          color: rgba(0, 0, 0, 0.55);
          text-decoration: line-through;
          font-size: 16px;
          font-weight: 400;
        }
        .price {
          font-size: 36px;
          font-weight: 300;
          line-height: 1;
          letter-spacing: normal;
          color: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          gap: 10px;
          .green {
            color: #00a650;
            font-size: 22px;
          }
        }
        .medios {
          color: #3483fa;
          font-size: 16px;
          font-weight: normal;
        }
        .tarjeta {
          width: 120px;
        }
      }
      .overviews {
        width: 100%;
        height: auto;
        margin-top: 5px;
        h2 {
          display: block;
          font-size: 19px;
          margin-block-start: 0.43em;
          margin-block-end: 0.43em;
        }
        p {
          text-align: justify;
        }
      }
    }
    .cart {
      padding: 5px 10px;
      width: 100%;
      min-height: 450px;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      .content-box-cart {
        padding: 10px;
        width: 95%;
        height: 95%;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        .box-title {
          margin: 0 auto;
          width: 95%;
          height: 100px;
          .entrega {
            font-size: 16px;
            line-height: 1.2;
            margin-bottom: 2px;
            color: #00a650;
            margin: 10px 0;
            span {
              color: #111;
              font-weight: normal;
            }
          }
          .promocion {
            font-size: 16px;
            font-weight: 600;
            color: rgba(0, 0, 0, 0.9);
            margin-bottom: 4px;
          }
          .almacen {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 4px;
            font-size: 16px;
            line-height: 1.2;
            span {
              display: flex;
              color: #00a650;
            }
            svg {
              font-size: 26px;
            }
          }
        }
      }
      .botones {
        margin: 0 auto;
        width: 95%;
        height: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        button {
          width: 100%;
          height: 40px;
          font-size: 16px;
          font-weight: bold;
          color: #fff;
          border-color: transparent;
          border-radius: 5px;
          cursor: pointer;
        }
        .buy {
          background-color: #3483fa;
          transition: all 0.2s ease;
          &:hover {
            background-color: #1858b8;
          }
        }
        .add {
          background-color: #85b0f0;
          transition: all 0.2s ease;
          &:hover {
            background-color: #5c8fdb;
          }
        }
      }
      .aplicaciones {
        margin: 0 auto;
        width: 95%;
        height: calc(100% - 180px);
        ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: flex-start;
          justify-content: center;
          li {
            width: 100%;
            padding: 5px;
            .formfield {
              color: #3483fa;
              font-size: 14px;
              font-weight: 400;
              cursor: pointer;
            }
            .field {
              font-size: 14px;
              font-weight: 400;
              text-align: justify;
              color: rgba(0, 0, 0, 0.65);
              text-align: justify;
            }
          }
        }
      }
    }
  }
`;
const Salto = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  hr {
    width: 1200px;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.55);
  }
`;
const ProductosSimilares = styled.div`
  padding: 30px 0px;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 550px;
  .box-content {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    .title-content {
      font-size: 22px;
      font-weight: normal;
    }
    .slider-content {
      width: 100%;
      height: 450px;
    }
  }
`;
