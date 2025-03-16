// 



// import React, { useRef } from "react";
// import { useBooking } from "../context/bookingContext";
// import { useReactToPrint } from "react-to-print";

// function MyBookings() {
//   const { bookings, removeBooking } = useBooking();
//   const pdfRef = useRef();

//   // Remove duplicate bookings based on workspace ID
//   const uniqueBookings = Array.from(new Map(bookings.map(b => [b.id, b])).values());

//   // Function to generate and download PDF
//   const generatePDF = useReactToPrint({
//     content: () => pdfRef.current,
//     documentTitle: "My_Bookings",
//   });

//   return (
//     <div className="container mt-4">
//       <br /><br />
//       <h2 className="text-center mb-4">My Bookings</h2>

//       {uniqueBookings.length === 0 ? (
//         <p className="text-center">No bookings yet!</p>
//       ) : (
//         <div>
//           <button className="btn btn-primary mb-3" onClick={generatePDF}>
//             Download PDF
//           </button>

//           <div className="row" ref={pdfRef}>
//             {uniqueBookings.map((workspace) => (
//               <div className="col-md-3 mt-3" key={workspace.id}>
//                 <div className="card h-100">
//                   {workspace.image && (
//                     <img
//                       src={workspace.image}
//                       className="card-img-top"
//                       alt={workspace.name}
//                       style={{ height: "200px", objectFit: "cover" }}
//                     />
//                   )}
//                   <div className="card-body">
//                     <h5 className="card-title">{workspace.name}</h5>
//                     <p className="card-text">
//                       {workspace.location}
//                       <br />
//                       <strong>{workspace.pricePerDay}</strong>
//                     </p>
//                     <p className="card-text">
//                       <small className="text-muted">
//                         Rating: {workspace.rating} ⭐
//                       </small>
//                     </p>
//                     <button className="btn btn-danger mt-2" onClick={() => removeBooking(workspace.id)}>
//                       Cancel Booking
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default MyBookings;



import React from "react";
import { useBooking } from "../context/bookingContext";

function MyBookings() {
  const { bookings, removeBooking } = useBooking();

  // Remove duplicate bookings based on workspace ID
  const uniqueBookings = Array.from(new Map(bookings.map(b => [b.id, b])).values());

  return (
    <div className="container mt-4">
      <br /><br />
      <h2 className="text-center mb-4">My Bookings</h2>
      {uniqueBookings.length === 0 ? (
        <p className="text-center">No bookings yet!</p>
      ) : (
        <div className="row">
          {uniqueBookings.map((workspace) => (
            <div className="col-md-3 mt-3" key={workspace.id}>
              <div className="card h-100">
                {workspace.image && (
                  <img
                    src={workspace.image}
                    className="card-img-top"
                    alt={workspace.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{workspace.name}</h5>
                  <p className="card-text">
                    {workspace.location}
                    <br />
                    <strong>{workspace.pricePerDay}</strong>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Rating: {workspace.rating} ⭐
                    </small>
                  </p>
                  <button className="btn btn-danger mt-2" onClick={() => removeBooking(workspace.id)}>
                    Cancel Booking
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyBookings;



// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import data from "../data.json";
// import { useBooking } from "../context/bookingContext";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";

// function WorkspaceDetails({ isAuthenticated }) {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addBooking } = useBooking();
//   const workspace = data.find((item) => item.id === parseInt(id));

//   const [mainImage, setMainImage] = useState(workspace?.image);
//   const [showForm, setShowForm] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState("");
//   const [formData, setFormData] = useState({
//     name: "",
//     contact: "",
//     address: "",
//     checkIn: "",
//     checkOut: "",
//     paymentDetails: "",
//     expiryDate: "",
//     cvv: "",
//   });

//   const handleBooking = () => {
//     if (!isAuthenticated) {
//       localStorage.setItem("redirectPath", `/workspace/${id}`);
//       alert("Please log in to book this workspace.");
//       navigate("/login");
//       return;
//     }
//     setShowForm(true);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handlePaymentChange = (e) => {
//     setPaymentMethod(e.target.value);
//   };

//   const generatePDF = () => {
//     const doc = new jsPDF();
//     doc.text("Booking Confirmation", 20, 20);
//     doc.text(`Workspace: ${workspace.name}`, 20, 30);
//     doc.text(`Location: ${workspace.location}`, 20, 40);
//     doc.text(`Price per Day: ${workspace.pricePerDay}`, 20, 50);
//     doc.text(`Booked By: ${formData.name}`, 20, 60);
//     doc.text(`Contact: ${formData.contact}`, 20, 70);
//     doc.text(`Address: ${formData.address}`, 20, 80);
//     doc.text(`Check-in: ${formData.checkIn}`, 20, 90);
//     doc.text(`Check-out: ${formData.checkOut}`, 20, 100);
//     doc.text(`Payment Method: ${paymentMethod}`, 20, 110);

//     doc.save("Booking_Confirmation.pdf");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!paymentMethod) {
//       alert("Please select a payment method");
//       return;
//     }
//     addBooking({ ...workspace, formData, paymentMethod });
//     alert("Booking successful! Payment received.");
//     generatePDF();
//     setShowForm(false);
//   };

//   if (!workspace) {
//     return <h2 className="text-center mt-4">Workspace not found!</h2>;
//   }

//   return (
//     <div className="container mt-4">
//       <div className="row">
//         <div className="col-md-3">
//           <div className="d-flex flex-md-column flex-row gap-2 small-images-wrapper">
//             <img src={workspace.image1} alt={workspace.name} className="img-fluid small-img" onMouseOver={() => setMainImage(workspace.image1)} />
//             <img src={workspace.image2} alt={workspace.name} className="img-fluid small-img" onMouseOver={() => setMainImage(workspace.image2)} />
//             <img src={workspace.image3} alt={workspace.name} className="img-fluid small-img" onMouseOver={() => setMainImage(workspace.image3)} />
//             <img src={workspace.image} alt={workspace.name} className="img-fluid small-img" onMouseOver={() => setMainImage(workspace.image)} />
//           </div>
//         </div>

//         <div className="col-md-9">
//           <img src={mainImage} alt={workspace.name} className="img-fluid mb-4 main-img" />
//           <h2>{workspace.name}</h2>
//           <p><strong>Location:</strong> {workspace.location}</p>
//           <p><strong>Price per Day:</strong> {workspace.pricePerDay}</p>
//           <p><strong>Rating:</strong> {workspace.rating} ⭐</p>
//           <p><strong>Description:</strong> {workspace.description}</p>

//           {!showForm ? (
//             <button onClick={handleBooking} className="btn btn-success mt-3">
//               Book Now
//             </button>
//           ) : (
//             <form onSubmit={handleSubmit} className="mt-4">
//               <div className="mb-3">
//                 <label className="form-label">Name</label>
//                 <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Contact Number</label>
//                 <input type="text" className="form-control" name="contact" value={formData.contact} onChange={handleChange} required />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Address</label>
//                 <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} required />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Check-in Time</label>
//                 <input type="datetime-local" className="form-control" name="checkIn" value={formData.checkIn} onChange={handleChange} required />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Check-out Time</label>
//                 <input type="datetime-local" className="form-control" name="checkOut" value={formData.checkOut} onChange={handleChange} required />
//               </div>
              
//               <div className="mb-3">
//                 <label className="form-label">Payment Method</label>
//                 <select className="form-control" value={paymentMethod} onChange={handlePaymentChange} required>
//                   <option value="">Select Payment Method</option>
//                   <option value="Credit Card">Credit Card</option>
//                   <option value="GPay">Google Pay</option>
//                   <option value="PhonePe">PhonePe</option>
//                   <option value="Paytm">Paytm</option>
//                 </select>
//               </div>

//               {paymentMethod === "Credit Card" && (
//                 <>
//                   <div className="mb-3">
//                     <label className="form-label">Credit Card Number</label>
//                     <input type="text" className="form-control" name="paymentDetails" maxLength="16" placeholder="Enter 16-digit card number" onChange={handleChange} required />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">Expiry Date</label>
//                     <input type="month" className="form-control" name="expiryDate" onChange={handleChange} required />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">CVV</label>
//                     <input type="text" className="form-control" name="cvv" maxLength="3" placeholder="Enter CVV" onChange={handleChange} required />
//                   </div>
//                 </>
//               )}

//               {paymentMethod !== "Credit Card" && paymentMethod && (
//                 <p className="text-success">Proceed with {paymentMethod} payment.</p>
//               )}

//               <button type="submit" className="btn btn-primary">Submit Booking</button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default WorkspaceDetails;




// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import data from "../data.json";
// import { useBooking } from "../context/bookingContext";
// import jsPDF from "jspdf";

// function WorkspaceDetails({ isAuthenticated }) {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addBooking } = useBooking();
//   const workspace = data.find((item) => item.id === parseInt(id));

//   const [showForm, setShowForm] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState("");
//   const [formData, setFormData] = useState({
//     name: "",
//     contact: "",
//     address: "",
//     checkIn: "",
//     checkOut: "",
//   });

//   if (!workspace) {
//     return <h2 className="text-center mt-4">Workspace not found!</h2>;
//   }

//   const handleBooking = () => {
//     if (!isAuthenticated) {
//       localStorage.setItem("redirectPath", `/workspace/${id}`);
//       alert("Please log in to book this workspace.");
//       navigate("/login");
//       return;
//     }
//     setShowForm(true);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handlePaymentChange = (e) => {
//     setPaymentMethod(e.target.value);
//   };

//   const generatePDF = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(18);
//     doc.text("Booking Confirmation", 20, 20);

//     doc.setFontSize(14);
//     doc.text(`Workspace: ${workspace.name}`, 20, 30);
//     doc.text(`Location: ${workspace.location}`, 20, 40);
//     doc.text(`Price per Day: ${workspace.pricePerDay}`, 20, 50);
//     doc.text(`Booked By: ${formData.name}`, 20, 60);
//     doc.text(`Contact: ${formData.contact}`, 20, 70);
//     doc.text(`Address: ${formData.address}`, 20, 80);
//     doc.text(`Check-in: ${formData.checkIn}`, 20, 90);
//     doc.text(`Check-out: ${formData.checkOut}`, 20, 100);
//     doc.text(`Payment Method: ${paymentMethod}`, 20, 110);

//     doc.save(`Booking_Confirmation_${formData.name}.pdf`);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.contact || !formData.checkIn || !formData.checkOut || !paymentMethod) {
//       alert("Please fill all required fields.");
//       return;
//     }

//     addBooking({ ...workspace, formData, paymentMethod });
//     alert("Booking successful! Payment received.");
    
//     generatePDF();
//     setShowForm(false);
//   };

//   return (
//     <div className="container mt-4">
//       <h2>{workspace.name}</h2>
//       <p><strong>Location:</strong> {workspace.location}</p>
//       <p><strong>Price per Day:</strong> {workspace.pricePerDay}</p>
//       <p><strong>Description:</strong> {workspace.description}</p>

//       {!showForm ? (
//         <button onClick={handleBooking} className="btn btn-success mt-3">
//           Book Now
//         </button>
//       ) : (
//         <form onSubmit={handleSubmit} className="mt-4">
//           <div className="mb-3">
//             <label className="form-label">Name</label>
//             <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Contact Number</label>
//             <input type="text" className="form-control" name="contact" value={formData.contact} onChange={handleChange} required />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Address</label>
//             <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} required />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Check-in Time</label>
//             <input type="datetime-local" className="form-control" name="checkIn" value={formData.checkIn} onChange={handleChange} required />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Check-out Time</label>
//             <input type="datetime-local" className="form-control" name="checkOut" value={formData.checkOut} onChange={handleChange} required />
//           </div>
          
//           <div className="mb-3">
//             <label className="form-label">Payment Method</label>
//             <select className="form-control" value={paymentMethod} onChange={handlePaymentChange} required>
//               <option value="">Select Payment Method</option>
//               <option value="Credit Card">Credit Card</option>
//               <option value="GPay">Google Pay</option>
//               <option value="PhonePe">PhonePe</option>
//               <option value="Paytm">Paytm</option>
//             </select>
//           </div>

//           <button type="submit" className="btn btn-primary">Submit Booking</button>
//         </form>
//       )}
//     </div>
//   );
// }

// export default WorkspaceDetails;


