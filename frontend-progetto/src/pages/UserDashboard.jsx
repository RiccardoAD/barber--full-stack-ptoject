import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button, Table } from "react-bootstrap";
import "../styles/Dashboard.css";

const UserDashboard = () => {
  const [user, setUser] = useState({});
  const [bookings, setBookings] = useState([]);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [newName, setNewName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("/api/user")
      .then((response) => setUser(response.data))
      .catch((error) => console.error("Errore nel recupero dei dati dell'utente:", error));

    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/user/purchases");
      setBookings(response.data);
    } catch (error) {
      console.error("Errore nel recupero degli acquisti dell'utente:", error);
    }
  };

  const handleChangeName = () => {
    setLoading(true);
    setError("");

    axios
      .put("/api/user/update-name", { name: newName })
      .then((response) => {
        setLoading(false);
        alert("Name user changed successfully");
        setUser({ ...user, name: newName });
      })
      .catch((error) => {
        setLoading(false);
        setError("Errore nel cambiare il nome utente: " + error.message);
      });
  };


  const handleChangePassword = () => {
    if (newPassword !== confirmNewPassword) {
      setError("Le nuove password non corrispondono");
      return;
    }

    setLoading(true);
    setError("");

    axios
      .put("/api/user/update-password", { current_password: oldPassword, password: newPassword })
      .then((response) => {
        setLoading(false);
        alert("Password changed successfully");
      })
      .catch((error) => {
        setLoading(false);
        setError("Error changing password: " + error.message);
      });
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const modalStyles = {
    header: {
      backgroundColor: "#161a1e",
      color: "#fbfbfb",
    },
    body: {
      backgroundColor: "#161a1e",
      color: "#fbfbfb",
    },
    footer: {
      backgroundColor: "#161a1e",
      color: "#fbfbfb",
    },
    button: {
      backgroundColor: "#e58e27",
      color: "#161a1e",
      border: "none",
    },
  };

  return (
    <div className="container text-white py-5">
      <div className="row align-items-center user-detail p-5 border rounded shadow-sm">
      
          
  
        <div className="col-12 text-center" style={{ lineHeight: "30px" }}>
          <h2 className="mb-3"> Welcome, {user.name}!</h2>
          <h2> this is your DASHBOARD</h2>
          <p className="mb-2">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="mb-4">
            <strong>Ruolo:</strong> {user.role}
          </p>
          <button className="card-button" onClick={handleShowModal}>
            Change profile
          </button>
        </div>
      </div>

      <Table striped bordered hover variant="dark" className="my-5 ">
        <thead>
          <h1>Cronologia acquisti</h1>
          <tr>
            <th>Titolo</th>
            <th>Data e Ora</th>
            <th>Prezzo</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((bookings) => (
            <tr key={bookings.id}>
              <td>{bookings.order_items.map((item) => item.game.title).join(", ")}</td>
              <td>{new Date(bookings.created_at).toLocaleString()}</td>
              <td>{bookings.total_price}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton style={modalStyles.header}>
          <Modal.Title>Modifica i tuoi dati</Modal.Title>
        </Modal.Header>
        <Modal.Body style={modalStyles.body}>
          <div>
            <h3>Cambia nome utente</h3>
            <input
              type="text"
              placeholder="Nuovo nome utente"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="form-control mb-3"
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Button onClick={handleChangeName} disabled={loading} style={modalStyles.button}>
              {loading ? "Caricamento..." : "Cambia nome utente"}
            </Button>
          </div>
          
          <div className="mt-3">
            <h3>Cambia password</h3>
            <input
              type="password"
              placeholder="Vecchia password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="form-control mb-3"
            />
            <input
              type="password"
              placeholder="Nuova password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control mt-2"
            />
            <input
              type="password"
              placeholder="Conferma nuova password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              className="form-control mt-2 mb-3"
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Button onClick={handleChangePassword} disabled={loading} className="mt-2" style={modalStyles.button}>
              {loading ? "Caricamento..." : "Cambia password"}
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer style={modalStyles.footer}>
          <Button variant="secondary" onClick={handleCloseModal} style={modalStyles.button}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserDashboard;
