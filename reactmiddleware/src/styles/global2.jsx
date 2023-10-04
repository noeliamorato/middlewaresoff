import styled from "styled-components";

export const Tablas = styled.article`
  width: 90%;
  height: 100%;
  margin: 2.5em auto;

  & > div {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column; /* Cambio: Cambiar flex-direction a column */
    gap: 1em;
    align-items: center;

    & h1 {
      color: #225859;
    }

    & p {
      font-size: 0.9em;
    }

    & button {
      height: 2em;
      width: 6em;
      border: none;
      font-size: 0.7em;
      background-color: #5555;
      border-radius: 5px;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.5s ease;

      &:hover {
        background-color: #225859;
        color: #fff;
      }
    }
  }

  & table {
    margin: 1em auto;
    width: 100%; /* Cambio: Cambiar el ancho a 100% */
    background-color: rgb(255, 255, 255);
    height: auto;
    border-collapse: collapse;
    position: relative;

    & th {
      font-size: 1em;
      font-weight: 100;
      padding: 1.2em 0;
    }

    & tr {
      border: solid 1px #0002;
      &:nth-child(2n) {
        background-color: #225859aa;
        color: #fff;
      }
      &:hover {
        background-color: #225859;
        color: #fff;
        transform: scale(1.08);
        transition: all 0.5s ease;
        box-shadow: 0 0px 8px 4px #0005;
        & > td {
          color: #fff;
        }
        & button {
          color: #fff;
        }
      }
    }

    & td {
      color: #225859;
      font-weight: lighter;
      font-size: 0.8em;
      padding: 0.8em 0;
      text-align: center;
      border-collapse: collapse;
      &:nth-child(1) {
        padding: 0 1.5em;
      }
    }

    & thead {
  color: #225859;
  padding: 1.2em 0;
  border-radius: 1em;
  background-color: transparent;
  color: #069266;
  font-weight: 100;
  transform: scale(1);
  transition: all 0.5s ease;
  box-shadow: 0 0px 8px 4px #0005;
}& thead {
      color: #225859;
      padding: 1.2em 0;

      & > tr {
        border-radius: 1em;
        &:hover {
          transform: scale(1);
          background-color: transparent;
          color: #069266;
          font-weight: 100;
        }
      }
    }

    & tbody {
      display: block;
      max-height: 200px; /* Altura máxima para desplazarse */
      overflow-y: auto;
    }

    & tr {
      display: table;
      width: 100%;
      table-layout: fixed;
    }

    & tbody button {
      background-color: transparent;
      border: none;
      margin: 0 0.5em;
      color: #069266;
      cursor: pointer;
    }
  }
`;

