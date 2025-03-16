

// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import data from "../data.json";
// import { useBooking } from "../context/bookingContext";
// import "./worksp.css"; // Import custom CSS for responsiveness

// function WorkspaceDetails({ isAuthenticated }) {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addBooking } = useBooking();
//   const workspace = data.find((item) => item.id === parseInt(id));

//   // State to manage the main image
//   const [mainImage, setMainImage] = useState(workspace?.image);

//   const handleBooking = () => {
//     if (!isAuthenticated) {
//       // Save the workspace ID for redirect after login
//       localStorage.setItem("redirectPath", `/workspace/${id}`);
//       alert("Please log in to book this workspace.");
//       navigate("/login");
//       return;
//     }

//     // Proceed with booking for authenticated users
//     if (workspace) {
//       addBooking(workspace); // Add the workspace to bookings
//       alert("Booking successful!");
//     } else {
//       alert("Error: Workspace not found!");
//     }
//   };

//   if (!workspace) {
//     return <h2 className="text-center mt-4">Workspace not found!</h2>;
//   }

//   return (
//     // <div className="container mt-4">
//     //   <div className="row">
//     //     {/* Small images section */}
//     //     <div className="col-md-3 small-images-container">
//     //       <div className="d-flex flex-column gap-2">
//     //         <img
//     //           src={workspace.image1}
//     //           alt="workspace"
//     //           className="img-fluid small-img"
//     //           onMouseOver={() => setMainImage(workspace.image1)}
//     //         />
//     //         <img
//     //           src={workspace.image2}
//     //           alt="workspace"
//     //           className="img-fluid small-img"
//     //           onMouseOver={() => setMainImage(workspace.image2)}
//     //         />
//     //         <img
//     //           src={workspace.image3}
//     //           alt="workspace"
//     //           className="img-fluid small-img"
//     //           onMouseOver={() => setMainImage(workspace.image3)}
//     //         />
//     //         <img
//     //           src={workspace.image}
//     //           alt="workspace"
//     //           className="img-fluid small-img"
//     //           onMouseOver={() => setMainImage(workspace.image)}
//     //         />
//     //       </div>
//     //     </div>

//     //     {/* Main image and workspace details */}
//     //     <div className="col-md-9">
//     //       <img
//     //         src={mainImage}
//     //         alt={workspace.name}
//     //         className="img-fluid main-img"
//     //       />
//     //       <h2>{workspace.name}</h2>
//     //       <p>
//     //         <strong>Location:</strong> {workspace.location}
//     //       </p>
//     //       <p>
//     //         <strong>Price per Day:</strong> {workspace.pricePerDay}
//     //       </p>
//     //       <p>
//     //         <strong>Rating:</strong> {workspace.rating} ⭐
//     //       </p>
//     //       <p>
//     //         <strong>Description:</strong> {workspace.description}
//     //       </p>
//     //       <button onClick={handleBooking} className="btn btn-success mt-3">
//     //         Book Now
//     //       </button>
//     //     </div>
//     //   </div>
//     // </div>
//     <div className="container mt-4">
//   <div className="row">
//     {/* Small images section */}
//     <div className="col-md-3">
//       <div className="d-flex flex-md-column flex-row gap-2 small-images-wrapper">
//         <img
//           src={workspace.image1}
//           alt={workspace.name}
//           className="img-fluid small-img"
//           onMouseOver={() => setMainImage(workspace.image1)}
//         />
//         <img
//           src={workspace.image2}
//           alt={workspace.name}
//           className="img-fluid small-img"
//           onMouseOver={() => setMainImage(workspace.image2)}
//         />
//         <img
//           src={workspace.image3}
//           alt={workspace.name}
//           className="img-fluid small-img"
//           onMouseOver={() => setMainImage(workspace.image3)}
//         />
//         <img
//           src={workspace.image}
//           alt={workspace.name}
//           className="img-fluid small-img"
//           onMouseOver={() => setMainImage(workspace.image)}
//         />
//       </div>
//     </div>

//     {/* Main image and workspace details */}
//     <div className="col-md-9">
//       <img
//         src={mainImage}
//         alt={workspace.name}
//         className="img-fluid mb-4 main-img"
//       />
//       <h2>{workspace.name}</h2>
//       <p>
//         <strong>Location:</strong> {workspace.location}
//       </p>
//       <p>
//         <strong>Price per Day:</strong> {workspace.pricePerDay}
//       </p>
//       <p>
//         <strong>Rating:</strong> {workspace.rating} ⭐
//       </p>
//       <p>
//         <strong>Description:</strong> {workspace.description}
//       </p>
//       <button onClick={handleBooking} className="btn btn-success mt-3">
//         Book Now
//       </button>
//     </div>
//   </div>
// </div>

//   );
// }

// export default WorkspaceDetails;

// -------------------------------------------------------------- old code with application



// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import data from "../data.json";
// import { useBooking } from "../context/bookingContext";

// function WorkspaceDetails({ isAuthenticated }) {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addBooking } = useBooking();
//   const workspace = data.find((item) => item.id === parseInt(id));

//   const [mainImage, setMainImage] = useState(workspace?.image);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     contact: "",
//     address: "",
//     checkIn: "",
//     checkOut: "",
//   });

//   const handleBooking = () => {
//     if (!isAuthenticated) {
//       localStorage.setItem("redirectPath", `/workspace/${id}`);
//       alert("Please log in to book this workspace.");
//       navigate("/login");
//       return;
//     }

//     // Show the booking form instead of direct booking
//     setShowForm(true);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addBooking({ ...workspace, formData });
//     alert("Booking successful!");
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
//               <button type="submit" className="btn btn-primary">Submit Booking</button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default WorkspaceDetails;

// with apllication form



// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import data from "../data.json";
// import { useBooking } from "../context/bookingContext";

// function WorkspaceDetails({ isAuthenticated }) {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addBooking } = useBooking();
//   const workspace = data.find((item) => item.id === parseInt(id));

//   const [mainImage, setMainImage] = useState(workspace?.image);
//   const [showForm, setShowForm] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState("");
//   const [upiCode, setUpiCode] = useState("");
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
//     const method = e.target.value;
//     setPaymentMethod(method);
//     if (method !== "Credit Card") {
//       setUpiCode(Math.floor(100000 + Math.random() * 900000));
//     } else {
//       setUpiCode("");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!paymentMethod) {
//       alert("Please select a payment method");
//       return;
//     }
//     addBooking({ ...workspace, formData, paymentMethod });
//     alert("Booking successful! Payment received.");
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
//             {[workspace.image1, workspace.image2, workspace.image3, workspace.image].map((img, index) => (
//               <img key={index} src={img} alt={workspace.name} className="img-fluid small-img" onMouseOver={() => setMainImage(img)} />
//             ))}
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
//             <button onClick={handleBooking} className="btn btn-success mt-3">Book Now</button>
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
//                     <label className="form-label">Card Number</label>
//                     <input type="text" className="form-control" name="paymentDetails" maxLength="16" placeholder="Enter 16-digit card number" onChange={handleChange} required />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">Expiry Date</label>
//                     <input type="month" className="form-control" name="expiryDate" onChange={handleChange} required />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">CVV</label>
//                     <input type="text" className="form-control" name="cvv" maxLength="3" placeholder="Enter 3-digit CVV" onChange={handleChange} required />
//                   </div>
//                 </>
//               )}
              
//               {paymentMethod !== "Credit Card" && paymentMethod && (
//                 <p className="text-success">Your {paymentMethod} payment code: <strong>{upiCode}</strong></p>
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

// function WorkspaceDetails({ isAuthenticated }) {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addBooking } = useBooking();
//   const workspace = data.find((item) => item.id === parseInt(id));

//   const [mainImage, setMainImage] = useState(workspace?.image);
//   const [showForm, setShowForm] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState("");
//   const [upiCode, setUpiCode] = useState("");
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
//     const method = e.target.value;
//     setPaymentMethod(method);
//     if (method !== "Credit Card") {
//       setUpiCode(Math.floor(100000 + Math.random() * 900000));
//     } else {
//       setUpiCode("");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!paymentMethod) {
//       alert("Please select a payment method");
//       return;
//     }
//     addBooking({ ...workspace, formData, paymentMethod });
//     alert("Booking successful! Payment received.");
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
//             {[workspace.image1, workspace.image2, workspace.image3, workspace.image].map((img, index) => (
//               <img key={index} src={img} alt={workspace.name} className="img-fluid small-img" onMouseOver={() => setMainImage(img)} />
//             ))}
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
//             <button onClick={handleBooking} className="btn btn-success mt-3">Book Now</button>
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
//                     <label className="form-label">Card Number</label>
//                     <input type="text" className="form-control" name="paymentDetails" maxLength="16" placeholder="Enter 16-digit card number" onChange={handleChange} required />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">Expiry Date</label>
//                     <input type="month" className="form-control" name="expiryDate" onChange={handleChange} required />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">CVV</label>
//                     <input type="text" className="form-control" name="cvv" maxLength="3" placeholder="Enter 3-digit CVV" onChange={handleChange} required />
//                   </div>
//                 </>
//               )}
              
//               {showForm && paymentMethod !== "Credit Card" && paymentMethod && (
//                 <div className="mb-3">
//                   <p className="text-success">Your {paymentMethod} payment code: <strong>{upiCode}</strong></p>
//                 </div>
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
//     cardNumber: "",
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
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handlePaymentChange = (e) => {
//     setPaymentMethod(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!paymentMethod) {
//       alert("Please select a payment method");
//       return;
//     }

//     if (paymentMethod === "Credit Card") {
//       if (formData.cardNumber.length !== 16 || formData.cvv.length !== 3) {
//         alert("Invalid card details. Please check the number and CVV.");
//         return;
//       }
//     }

//     addBooking({ ...workspace, formData, paymentMethod });
//     alert("Booking successful! Payment received.");
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
//                     <input
//                       type="text"
//                       className="form-control"
//                       name="cardNumber"
//                       maxLength="16"
//                       placeholder="Enter 16-digit card number"
//                       value={formData.cardNumber}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">Expiry Date</label>
//                     <input
//                       type="month"
//                       className="form-control"
//                       name="expiryDate"
//                       value={formData.expiryDate}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">CVV</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       name="cvv"
//                       maxLength="3"
//                       placeholder="Enter 3-digit CVV"
//                       value={formData.cvv}
//                       onChange={handleChange}
//                       required
//                     />
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
//     checkIn: "",
//     checkOut: "",
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
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!paymentMethod) {
//       alert("Please select a payment method");
//       return;
//     }
//     addBooking({ ...workspace, formData, paymentMethod });
//     alert("Booking successful! Payment received.");
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
//             {[workspace.image1, workspace.image2, workspace.image3, workspace.image].map((img, index) => (
//               <img key={index} src={img} alt={workspace.name} className="img-fluid small-img" onMouseOver={() => setMainImage(img)} />
//             ))}
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
//                 <label className="form-label">Check-in</label>
//                 <input type="datetime-local" className="form-control" name="checkIn" value={formData.checkIn} onChange={handleChange} required />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Check-out</label>
//                 <input type="datetime-local" className="form-control" name="checkOut" value={formData.checkOut} onChange={handleChange} required />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Payment Method</label>
//                 <select className="form-control" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required>
//                   <option value="">Select Payment Method</option>
//                   <option value="Credit Card">Credit Card</option>
//                   <option value="GPay">Google Pay</option>
//                   <option value="PhonePe">PhonePe</option>
//                   <option value="Paytm">Paytm</option>
//                 </select>
//               </div>
//               <button type="submit" className="btn btn-primary">Submit Booking</button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default WorkspaceDetails;




import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import data from "../data.json";
import { useBooking } from "../context/bookingContext";

function WorkspaceDetails({ isAuthenticated }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addBooking } = useBooking();
  const workspace = data.find((item) => item.id === parseInt(id));

  const [mainImage, setMainImage] = useState(workspace?.image);
  const [showForm, setShowForm] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    checkIn: "",
    checkOut: "",
  });

  const handleBooking = () => {
    if (!isAuthenticated) {
      localStorage.setItem("redirectPath", `/workspace/${id}`);
      alert("Please log in to book this workspace.");
      navigate("/login");
      return;
    }
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const generateRandomID = () => {
    return Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit random ID
  };

  const generatePDF = (bookingDetails) => {
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.text("Workspace Booking Confirmation", 20, 20);

    doc.setFont("helvetica", "normal");
    doc.text(`Booking ID: ${bookingDetails.bookingID}`, 20, 30);
    doc.text(`Name: ${bookingDetails.name}`, 20, 40);
    doc.text(`Contact: ${bookingDetails.contact}`, 20, 50);
    doc.text(`Workspace: ${bookingDetails.workspaceName}`, 20, 60);
    doc.text(`Location: ${bookingDetails.location}`, 20, 70);
    doc.text(`Check-in: ${bookingDetails.checkIn}`, 20, 80);
    doc.text(`Check-out: ${bookingDetails.checkOut}`, 20, 90);
    doc.text(`Price per Day: ${bookingDetails.pricePerDay}`, 20, 100);
    doc.text(`Payment Method: ${bookingDetails.paymentMethod}`, 20, 110);

    doc.save(`Booking_${bookingDetails.bookingID}.pdf`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    const bookingID = generateRandomID();
    const bookingDetails = {
      bookingID,
      ...formData,
      workspaceName: workspace.name,
      location: workspace.location,
      pricePerDay: workspace.pricePerDay,
      paymentMethod,
    };

    addBooking({ ...workspace, formData, paymentMethod, bookingID });
    alert("Booking successful! Payment received.");

    generatePDF(bookingDetails);
    setShowForm(false);
  };

  if (!workspace) {
    return <h2 className="text-center mt-4">Workspace not found!</h2>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          <div className="d-flex flex-md-column flex-row gap-2 small-images-wrapper">
            {[workspace.image1, workspace.image2, workspace.image3, workspace.image].map((img, index) => (
              <img key={index} src={img} alt={workspace.name} className="img-fluid small-img" onMouseOver={() => setMainImage(img)} />
            ))}
          </div>
        </div>

        <div className="col-md-9">
          <img src={mainImage} alt={workspace.name} className="img-fluid mb-4 main-img" />
          <h2>{workspace.name}</h2>
          <p><strong>Location:</strong> {workspace.location}</p>
          <p><strong>Price per Day:</strong> ₹{workspace.pricePerDay}</p>
          <p><strong>Rating:</strong> {workspace.rating} ⭐</p>
          <p><strong>Description:</strong> {workspace.description}</p>

          {!showForm ? (
            <button onClick={handleBooking} className="btn btn-success mt-3">
              Book Now
            </button>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Contact Number</label>
                <input type="text" className="form-control" name="contact" value={formData.contact} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Check-in</label>
                <input type="datetime-local" className="form-control" name="checkIn" value={formData.checkIn} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Check-out</label>
                <input type="datetime-local" className="form-control" name="checkOut" value={formData.checkOut} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Payment Method</label>
                <select className="form-control" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required>
                  <option value="">Select Payment Method</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="GPay">Google Pay</option>
                  <option value="PhonePe">PhonePe</option>
                  <option value="Paytm">Paytm</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">Submit Booking</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkspaceDetails;
