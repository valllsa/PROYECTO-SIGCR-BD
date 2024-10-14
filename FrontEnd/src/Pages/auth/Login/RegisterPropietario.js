import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Logins.css";
import myImg from "../../../img/logo2.png";
import { useNavigate } from "react-router-dom";
import Fondo1 from "../../../img/fondo1.png"; /* Importación de la imagen de fondo */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

library.add(faCheck);

const RegisterPropietario = () => {
  const [propietario, setPropietario] = useState({
    Nombre: "",
    Apellido: "",
    NumeroDocumento: "",
    Teléfono: "",
    Correo: "",
    CodigoVivienda: "",
  });

  const [showAlert, setShowAlert] = useState(false);

  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  // const enviar = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // Solicitud GET para obtener los datos del usuario
  //     if (fileName === "No se ha seleccionado archivo") {
  //       setShowAlert(true);
  //     } else {
  //       setShowAlert(false);
  //       const response = await axios.post(`http://localhost:4000/Solicitudes`, {
  //         id: propietario.NumeroDocumento,
  //         Nombre: propietario.Nombre,
  //         Apellido: propietario.Apellido,
  //         NumeroDocumento: propietario.NumeroDocumento,
  //         Teléfono: propietario.Teléfono,
  //         Correo: propietario.Correo,
  //         CodigoVivienda: propietario.CodigoVivienda,
  //       });
  //       console.log(response.status);
  //       if (response.status === 201) {
  //         setStatus(201)
  //       }
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     alert("Ocurrió un error al intentar iniciar sesión");
  //   }
  // };

  const enviar = async (e) => {
    try {
      const response = await axios.get("http://localhost:5001/");
      return response;
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  const [fileName, setFileName] = useState("No se ha seleccionado archivo");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : "No se ha seleccionado archivo");
  };

  const handleButtonClick = () => {
    document.getElementById("inputGroupFile04").click();
  };

  const redirect = () => {
    navigate("/");
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `url(${Fondo1})`, // Imagen de fondo importada
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Ajustar a la altura completa de la ventana
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        filter: "brightness(90%)", // Oscurecer la imagen de fondo
      }}
    >
      {showAlert === true ? (
        <div
          className="alert alert-warning alert-dismissible fade show w-25 text-center"
          role="alert"
          style={{ marginInlineEnd: "35%" }}
        >
          Porfavor, seleccióne un archivo de verificación
        </div>
      ) : status === 201 ? (
        <div
          className="alert alert-success alert-dismissible fade show w-25"
          role="alert"
          style={{ marginInlineEnd: "35%" }}
        >
          <div className="d-flex flex-row align-items-center text-center">
            <div className="me-3">
              Solicitud enviada, espere la confirmación del administrador
            </div>
            <div>
              <button
                type="button"
                className="btn btn-success m-0"
                onClick={redirect}
              >
                <FontAwesomeIcon icon={faCheck} />
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <div className="login-box rounded-4 p-5 bg-white">
        <div className="d-flex flex-row w-100">
          <div className="me-5 w-50">
            <div className="login-logo d-flex justify-content-start">
              <img src={myImg} alt="Logo" className="logo" />
            </div>
            <p className="login-box-msg p-0 text-start fs-1">
              Enviar solicitud para creación de cuenta
            </p>
          </div>
          <div className="ms-5">
            <div className="card-body login-card-body">
              <form method="POST" onSubmit={enviar}>
                {/* Nombre y Apellido */}
                <div className="d-flex flex-row">
                  <div className="me-4 w-50">
                    <input
                      type="text"
                      className="input-group form-control"
                      required
                      placeholder="Nombre"
                      value={propietario.Nombre}
                      onChange={(e) =>
                        setPropietario((prevUsuario) => ({
                          ...prevUsuario,
                          Nombre: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="w-50">
                    <input
                      type="text"
                      className="input-group form-control"
                      required
                      placeholder="Apellido"
                      value={propietario.Apellido}
                      onChange={(e) =>
                        setPropietario((prevUsuario) => ({
                          ...prevUsuario,
                          Apellido: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <input
                    type="number"
                    className="input-group form-control"
                    required
                    placeholder="Número Documento"
                    value={propietario.NumeroDocumento}
                    onChange={(e) =>
                      setPropietario((prevUsuario) => ({
                        ...prevUsuario,
                        NumeroDocumento: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="number"
                    className="input-group form-control"
                    required
                    placeholder="Número Telefónico"
                    value={propietario.Teléfono}
                    onChange={(e) =>
                      setPropietario((prevUsuario) => ({
                        ...prevUsuario,
                        Teléfono: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="email"
                    className="input-group form-control"
                    required
                    placeholder="Correo Electrónico"
                    value={propietario.Correo}
                    onChange={(e) =>
                      setPropietario((prevUsuario) => ({
                        ...prevUsuario,
                        Correo: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="number"
                    className="input-group form-control"
                    required
                    placeholder="Código de Vivienda"
                    value={propietario.CodigoVivienda}
                    onChange={(e) =>
                      setPropietario((prevUsuario) => ({
                        ...prevUsuario,
                        CodigoVivienda: e.target.value,
                      }))
                    }
                  />
                </div>
                <div>
                  <label for="inputGroupFile04" className="icon-link-hover">
                    Adjuntar Foto del Contrato de Propiedad o Certificado de
                    Tradición y Libertad
                  </label>
                  <div className="d-flex flex-row align-items-center mb-2">
                    <div className="me-3">
                      <button
                        type="button"
                        className="btn btn-success m-0"
                        onClick={handleButtonClick}
                      >
                        Seleccionar Archivo
                        <input
                          type="file"
                          id="inputGroupFile04"
                          className="d-none"
                          onChange={handleFileChange}
                          aria-describedby="inputGroupFileAddon04"
                          aria-label="Upload"
                        />
                      </button>
                    </div>
                    <div>
                      <span id="file-name">{fileName}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    <button type="submit" className="btn btn-success btn-block">
                      Enviar solicitud
                    </button>
                  </div>
                </div>
              </form>
              <hr className="hr-line" />
              <p className=" mb-0">
                ¿Ya tienes una cuenta?{" "}
                <Link
                  to="/LoginPropietario"
                  className="text-center text-decoration-none fw-bold"
                >
                  Iniciar Sesión
                </Link>
              </p>
              <p className="mb-0">
                ¿Desea ingresar como{" "}
                <Link
                  to="/LoginPortero"
                  className="text-decoration-none fw-bold"
                >
                  Portero
                </Link>{" "}
                o{" "}
                <Link
                  to="/LoginAdministrador"
                  className="text-decoration-none fw-bold"
                >
                  Administrador
                </Link>
                ?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPropietario;
