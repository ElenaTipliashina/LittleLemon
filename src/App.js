import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ReservePage from './ReservePage';
import ReserveForm from './ReserveForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConfirmedBooking from "./ConfirmedBooking";

function App() {
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleBookingConfirmation = () => {
    setBookingConfirmed(true);
  };

  return (
    <Router>
      <Header/>
      <Routes>
      <Route
        path="/reserve"
        element={
          bookingConfirmed ? (
            <ConfirmedBooking />
          ) : (
            <ReserveForm onBookingConfirmation={handleBookingConfirmation} />
          )
        }
      />
      <Route path="/confirm" element={<ConfirmedBooking />} />
      <Route path="/" element={<Main />} />
      </Routes>
     <Footer />
  </Router>
  );
}

export default App;







