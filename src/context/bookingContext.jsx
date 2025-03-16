import React, { createContext, useState, useContext } from 'react';

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [bookings, setBookings] = useState([]);

  // Function to add a new booking
  const addBooking = (workspace) => {
    console.log("Adding booking:", workspace);
    setBookings((prev) => {
      const updatedBookings = [...prev, workspace];
      console.log("Updated bookings:", updatedBookings);
      return updatedBookings;
    });
  };

  // Function to remove a booking by ID
  const removeBooking = (id) => {
    setBookings((prev) => prev.filter((workspace) => workspace.id !== id));
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking, removeBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

// Custom hook to use the booking context
export function useBooking() {
  return useContext(BookingContext);
}


