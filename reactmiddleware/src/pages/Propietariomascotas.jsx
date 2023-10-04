import React, { useEffect, useState } from "react";
import { useModal } from "../hooks/useModal";
import Formpropietariomascotas from "./Form/Formpropietariomascotas";
import { Padre } from "../styles/global";


const Propietariomascotas = () => {
  const [propietarioactual, setPropietarioactual] = useState({});
  const { openModal, closeModal } = useModal(
    Object.keys(propietarioactual).length > 0 ? "Editar propietario" : "Agregar propietario",
    <Formpropietariomascotas
      propietarioactual={propietarioactual}
      setPropietarioactual={setPropietarioactual}
      mostrarpropietariomascotas={mostrarpropietariomascotas}

      //enviamos el close modal y este cierra la ventana 
      closeModal={() => {
        closeModal();
      }}
    />
  );
  const [promascotas, setpromascotas] = useState([]);

  //funcion mostrar
  async function mostrarpropietariomascotas() {
    const response = await fetch("http://127.0.0.1:8000/api/Propietario_mascotas", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    //middleware .json (ordena los datos y lo pone en solo formato)
    //normaliza los datos que trae la petición o api fetch 
    const respuesta = await response?.json(); 
    setpromascotas(respuesta);
  }

  //funcion eliminar 
  async function eliminarPropietario_mascotas(id) {
    const response = await fetch("http://127.0.0.1:8000/api/Propietario_mascotas/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    if (response.ok) {
      mostrarpropietariomascotas();
    }
  }

  function editarPropietario(id) {
    const selectedPropietario = promascotas.find((r) => r.id === id);
    setPropietarioactual(selectedPropietario);
  }

  useEffect(() => {
    mostrarpropietariomascotas();
  }, []);
  return (
    <Padre>
      <div>
        <h1>PROPIETARIO MASCOTAS</h1>
        <p> Cantidad de registros {promascotas.length}</p>
        <button onClick={openModal}> agregar</button>
      </div>
      <section>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>ci</th>
              <th>nombres</th>
              <th>apellidos</th>
              <th>genero</th>
              <th>direccion</th>
              <th>telefono</th>
              <th>telf_movil</th>
              <th>correo</th>

              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {promascotas.map((v) => (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.ci}</td>
                <td>{v.nombres}</td>
                <td>{v.apellidos}</td>
                <td>{v.genero}</td>
                <td>{v.direccion}</td>
                <td>{v.telefono}</td>
                <td>{v.telf_movil}</td>
                <td>{v.correo}</td>
                <td>
                  <button onClick={() => editarPropietario(v.id)}>
                    {Object.keys(propietarioactual).length > 0 ? "Actualizar" : "Agregar"}
                  </button>
                  <button onClick={() => eliminarPropietario_mascotas(v.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Padre>
  );
};


export default Propietariomascotas
