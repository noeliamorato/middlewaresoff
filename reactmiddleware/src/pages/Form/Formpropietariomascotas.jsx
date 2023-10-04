
import React, { useState, useEffect } from 'react';
import { Input } from '../../styles/agregar';

const Formpropietariomascotas = ({
  propietarioactual,
  setPropietarioactual,
  mostrarpropietariomascotas,
  closeModal }) => {

  const [ci, setCi] = useState(propietarioactual?.ci || "");
  const [nombres, setNombres] = useState(propietarioactual?.nombres || "");
  const [apellidos, setApellidos] = useState(propietarioactual?.apellidos || "");
  const [genero, setGenero] = useState(propietarioactual?.genero || "");
  const [direccion, setDireccion] = useState(propietarioactual?.direccion || "");
  const [telefono, setTelefono] = useState(propietarioactual?.telefono || "");
  const [telf_movil, setTelf_movil] = useState(propietarioactual?.telf_movil || "");
  const [correo, setCorreo] = useState(propietarioactual?.correo || "");

  useEffect(() => {
    if (Object.keys(propietarioactual).length > 0) {
      setCi(propietarioactual.ci);
      setNombres(propietarioactual.nombres);
      setApellidos(propietarioactual.apellidos);
      setGenero(propietarioactual.genero);
      setDireccion(propietarioactual.direccion);
      setTelefono(propietarioactual.telefono);
      setTelf_movil(propietarioactual.telf_movil);
      setCorreo(propietarioactual.correo);
    }
    return () => {
      setPropietarioactual({});
    };
  }, [propietarioactual]);

  const enviar = async (e) => {
    e.preventDefault();

    if (Object.keys(propietarioactual).length > 0) {
      const response = await fetch(`http://127.0.0.1:8000/api/Propietario_mascotas/${propietarioactual.id}`, {
        method: "PUT",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          id: propietarioactual.id,
          ci: ci,
          nombres: nombres,
          apellidos: apellidos,
          genero: genero,
          direccion: direccion,
          telefono: telefono,
          telf_movil: telf_movil,
          correo: correo, 
        }),
      });
      if (response.ok) {
        mostrarpropietariomascotas();
        setCi("");
        setApellidos("");
        setCorreo("");
        setDireccion("");
        setGenero("");
        setNombres("");
        setTelefono("");
        setTelf_movil("");
        closeModal();
      }
    } else {
      const response = await fetch("http://127.0.0.1:8000/api/Propietario_mascotas", {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          ci: ci,
          nombres: nombres,
          apellidos: apellidos,
          genero: genero,
          direccion: direccion,
          telefono: telefono,
          telf_movil: telf_movil,
          correo: correo,
        }),
      });
      if (response.ok) {
        mostrarpropietariomascotas();
        setCi("");
        setApellidos("");
        setCorreo("");
        setDireccion("");
        setGenero("");
        setNombres("");
        setTelefono("");
        setTelf_movil("");
        closeModal();
      }
    }
  };
  return (
    <div>
      <form>
        <div>


          <div>
            <label htmlFor="">ci</label>
            <Input
              type="number"
              value={ci}
              onChange={(e) => setCi(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">nombres</label>
            <Input
              type="text"
              value={nombres}
              onChange={(e) => setNombres(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">apellidos</label>
            <Input
              type="text"
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">género</label>
            <Input
              type="text"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="">dirección</label>
            <Input
              type="text"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">teléfono</label>
            <Input
              type="number"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">teléfono móvil</label>
            <Input
              type="number"
              value={telf_movil}
              onChange={(e) => setTelf_movil(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">correo</label>
            <Input
              type="text"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>
        </div>
        <button onClick={enviar}>
          {Object.keys(propietarioactual).length > 0 ? "Actualizar" : "Agregar"}
        </button>
      </form>
    </div>
  )
}

export default Formpropietariomascotas