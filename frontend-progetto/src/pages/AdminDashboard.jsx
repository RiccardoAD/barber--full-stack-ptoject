import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import "../styles/Dashboard.css";

const AdminDashboard = () => {
  const [bookings, setbookings] = useState([]);
  const [users, setUsers] = useState([]);
  const [loadingBookings, setLoadingBookings] = useState(false);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [error, setError] = useState("");
  const [bookingSearchTerm, setBookingSearchTerm] = useState("");
  const [userSearchTerm, setUserSearchTerm] = useState("");
  const [indexBooking, setindexBooking] = useState(1);
  const [indexUsers, setIndexUsers] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    setLoadingBookings(true);
    axios
      .get("http://localhost:8000/api/bookings")
      .then((response) => {
        setbookings(response.data);
        setLoadingBookings(false);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
        setError("Error fetching bookings");
        setLoadingBookings(false);
      });
  }, []);

  useEffect(() => {
    setLoadingUsers(true);
    axios
      .get("http://localhost:8000/api/users")
      .then((response) => {
        setUsers(response.data);
        setLoadingUsers(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setError("Error fetching users");
        setLoadingUsers(false);
      });
  }, []);


  const handleBookingDelete = (bookingId) => {
    axios
      .delete(`http://localhost:8000/api/bookings/${bookingId}`)
      .then((response) => {
        setbookings(bookings.filter((booking) => booking.id !== bookingId));
      })
      .catch((error) => {
        console.error("Error deleting booking:", error);
        setError("Error deleting booking");
      });
  };

  const handleUserDelete = (userId) => {
    axios
      .delete(`http://localhost:8000/api/users/${userId}`)
      .then((response) => {
        setUsers(users.filter((user) => user.id !== userId));
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
        setError("Error deleting user");
      });
  };

 
  const expandTablebooking = () => {
    setindexBooking(indexBooking + 1);
  };

  const expandTableUser = () => {
    setIndexUsers(indexUsers + 1);
  };
  const filteredBookings = bookings.filter(
    (booking) => booking.title && booking.title.toLowerCase().includes(bookingSearchTerm.toLowerCase())
  );



  const filteredUsers = users.filter(
    (user) => user.name && user.name.toLowerCase().includes(userSearchTerm.toLowerCase())
  );

  return (
    <div className="container text-white p-5">
      <h1 className="text-center">Admin Dashboard</h1>

      <h2>books</h2>
      <div className="input-group mb-3">
      <input
          type="text"
          className="form-control"
          placeholder="Cerca per titolo del gioco"
          value={bookingSearchTerm}
          onChange={(e) => setBookingSearchTerm(e.target.value)}
        />
      </div>

      <div className="table-responsive mb-5">
        <Table striped bordered hover variant="dark" className="mb-4 text-center">
          <thead>
            <tr>
              <th>service</th>
              <th>cost</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {loadingBookings ? (
              <tr>
                <td colSpan="3">Loading...</td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="3">Error fetching bookings</td>
              </tr>
            ) : filteredBookings.length === 0 ? (
              <tr>
                <td colSpan="3"> no bookings found</td>
              </tr>
            ) : (
              filteredBookings.slice(0, 2 * indexBooking).map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.title}</td>
                  <td>{booking.categories.map((category) => category.name).join(", ")}</td>
                  <td style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
                    <button className="card-button1" onClick={() => handleBookingDelete(booking.id)}>
                      Elimina
                    </button>
                  </td>
                </tr>
              ))
            )}
            <div>
              {filteredBookings.length > 2 * indexBooking && (
                <button onClick={() => expandTablebooking()}> Espandi tabella </button>
              )}
            </div>
          </tbody>
        </Table>
      </div>
      <h2>Users</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Cerca per nome utente"
          value={userSearchTerm}
          onChange={(e) => setUserSearchTerm(e.target.value)}
        />
      </div>

      <div className="table-responsive">
        <Table striped bordered hover variant="dark" className="mb-4 text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>books</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loadingUsers ? (
              <tr>
                <td colSpan="4">Loading...</td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="4">Error fetching users</td>
              </tr>
            ) : filteredUsers.length === 0 ? (
              <tr>
                <td colSpan="4">Nessun utente trovato</td>
              </tr>
            ) : (
              filteredUsers.slice(0, 2 * indexUsers).map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.orders_count}</td>
                  <td>
                    <button className="card-button1" onClick={() => handleUserDelete(user.id)}>
                      Elimina
                    </button>
                    {/* Aggiungi qui il pulsante per modificare l'utente */}
                  </td>
                </tr>
              ))
            )}
            <div>
              {filteredUsers.length > 2 * indexUsers && (
                <button onClick={() => expandTableUser()}> Espandi tabella </button>
              )}
            </div>
          </tbody>
        </Table>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}
     
    </div>
  );
};

export default AdminDashboard;
