import React from "react";
import styled from "styled-components";

export default function Signup() {
  return (
    <Container>
      <div className="content">
        <Box>
          <h1>Ingresá tu e-mail, o usuario de fakeStore</h1>
          <hr />
        </Box>
        <Form>
          <form action="">
            <div className="inputField">
              <label htmlFor="">Nombre de usuario o e-maíl</label>
              <input type="text" placeholder="ingrese su usuario o email..." />
            </div>
            <div className="inputField">
              <label htmlFor="">Contaseña</label>
              <input
                type="password"
                name=""
                id=""
                placeholder="ingrese su contraseña.."
              />
            </div>
            <div className="buttons">
              <button>Ingresa</button>
              <button>¿Olvidaste tu contraseña?</button>
            </div>
          </form>
        </Form>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 635px;
  height: auto;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 40px;
  .content {
    width: 70%;
    height: 450px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: center;
  }
`;
const Box = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  h1 {
    width: 90%;
    margin: 20px auto;
    text-align: justify;
  }
  hr {
    width: 80%;
    margin: 0 auto;
  }
`;
const Form = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  form {
    width: 90%;
    height: 210px;
    margin: 30px auto;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    .inputField {
      width: 100%;
      height: 60px;
      padding: 0 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      label {
        font-size: 14px;
        margin-bottom: 4px;
      }
      input {
        width: 100%;
        height: 35px;
        padding-left: 10px;
        border-radius: 3px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        &:focus {
          border-color: #3483fa;
          outline:0;
        }
      }
    }
    .buttons {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      button {
        width: 200px;
        height: 100%;
        cursor: pointer;
        display: inline-block;
        border: none;
        background-color: #3483fa;
        color: #fff;
        border-radius: 5px;
      }
    }
  }
`;
