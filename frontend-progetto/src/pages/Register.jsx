import { Container } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { LOGIN } from "../redux/actions";
import { Triangle } from "react-loader-spinner"; // Importa il componente Triangle
import "../styles/LoginRegister.css";

const Register = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false); // Stato per gestire il caricamento


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [errors, setErrors] = useState({});

  const updateInputValue = (ev) => {
    setFormData((oldFormData) => ({
      ...oldFormData,
      [ev.target.name]: ev.target.value,
    }));
  };

  const submitRegister = (ev) => {
    ev.preventDefault();
    setIsLoading(true); // Imposta isLoading a true durante la registrazione

    axios
      .get("/sanctum/csrf-cookie")
      .then(() => {
        const body = new FormData();
        body.append("name", formData.name);
        body.append("email", formData.email);
        body.append("password", formData.password);
        body.append("password_confirmation", formData.password_confirmation);
        return axios.post("/register", body);
      })
      .then(() => axios.get("/api/user"))
      .then((res) => {
        dispatch({
          type: LOGIN,
          payload: res.data,
        });
      })
      .catch((error) => {
        if (error.response && error.response.data.errors) {
          setErrors(error.response.data.errors);
        } else {
          console.error("Registration failed:", error.message);
        }
      })
      .finally(() => {
        setIsLoading(false); // Imposta isLoading a false dopo il completamento della registrazione (successo o fallimento)
      });
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      {isLoading && ( // Mostra lo spinner quando isLoading è true
        <div
          className="loading-spinner"
          style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        >
          <Triangle visible={true} height={100} width={100} color="#e58e27" ariaLabel="triangle-loading" />
        </div>
      )}

      <form onSubmit={submitRegister} noValidate className="myFormRegister">
        <h1 className="text-center">REGISTER</h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={updateInputValue}
            value={formData.name}
          />
          {errors.name && <div className="text-danger">{errors.name[0]}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={updateInputValue}
            value={formData.email}
          />
          {errors.email && <div className="text-danger">{errors.email[0]}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={updateInputValue}
            value={formData.password}
          />
          {errors.password && <div className="text-danger">{errors.password[0]}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="password_confirmation" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password_confirmation"
            name="password_confirmation"
            onChange={updateInputValue}
            value={formData.password_confirmation}
          />
          {errors.password_confirmation && <div className="text-danger">{errors.password_confirmation[0]}</div>}
        </div>
       
          <label htmlFor="profile_img" className="form-label">
            Profile Image
          </label>
          
        <button type="submit" className="card-button1 w-100">
          Register
        </button>
      </form>
    </Container>
  );
};

export default Register;
