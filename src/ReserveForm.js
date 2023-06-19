import React, {useReducer, useState, useEffect  } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "SET_TIMES":
      return action.times;
    default:
      return state;
  }
}

function initializeTimes() {
  return [  "17:00","18:00", "19:00", "20:00", "21:00", "22:00", ];
}

function ReserveForm() {
  
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [availableTimes, dispatch] = useReducer(reducer, [], initializeTimes);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [dateError, setDateError] = useState("");
  

  
  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    setDateError(""); // Reset the date error message
    const newTimes = initializeTimes(newDate);
    dispatch({ type: "SET_TIMES", times: newTimes });
  };
  

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };


  
  const handleGuestsChange = (e) => {
    setGuests(parseInt(e.target.value));
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isDateValid = !!date;
    
    const isFormValid = isDateValid;
    if (isFormValid) {
      setTimeout(() => {
        setBookingConfirmed(true);
      }, 1000);
    } else {
      setDateError("Please choose a date");
    }
  
  
  };

  

  return (
    <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={handleSubmit}>
    <label htmlFor="res-date">Choose date</label>
    <input type="date" id="res-date" value={date} onChange={handleDateChange} />
    {dateError && <p style={{ color: "red" }}>{dateError}</p>}

    {/* Display the date error message */}


      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={handleTimeChange}>
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={handleGuestsChange}
      />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={handleOccasionChange}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      
      <input type="submit" value="Make Your reservation" aria-label="On Click" disabled={!date}/>
      
    </form>
  );
}

export default ReserveForm;