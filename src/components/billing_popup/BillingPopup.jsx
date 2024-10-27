import React, { useState } from "react";
import "./BillingPopup.css";
import crypto from 'crypto-js';

const BillingPopup = ({ appointmentDetails, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const { date, court, selectedSlots } = appointmentDetails;
  const chargePerSlot = 800;
  const totalAmount = selectedSlots.length * chargePerSlot;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Billing submitted");
  };


const md5 = (value) => crypto.MD5(value).toString();


const generateHash = (merchant_id, order_id, amount, currency, merchant_secret) => {
  const merchantSecretHash = md5(merchant_secret).toUpperCase();
  const hashString = merchant_id + order_id + amount + currency + merchantSecretHash;
  return md5(hashString).toUpperCase();
};

const handlePay = () => {

  const paymentDetails = {
    merchant_id: "1228323", 
    order_id: "ItemNo12345",
    amount: "2400.00",
    currency: "LKR",
    merchant_secret: "MTU5Mzk0MjgzMDQxMzAxMzEyMDUxODAwNTE5NTEyMzM5MzY2MDM3NQ=="
  };


  const hash = generateHash(
    paymentDetails.merchant_id,
    paymentDetails.order_id,
    paymentDetails.amount,
    paymentDetails.currency,
    paymentDetails.merchant_secret
  );

  
  const payment = {
    sandbox: true, 
    merchant_id: paymentDetails.merchant_id,
    return_url: "http://127.0.0.1:5173/",
    cancel_url: undefined,
    notify_url: "http://127.0.0.1:5173/",
    order_id: paymentDetails.order_id,
    items: "Door bell wireless",
    amount: paymentDetails.amount,
    currency: paymentDetails.currency,
    hash: hash, 
    first_name: "Saman",
    last_name: "Perera",
    email: "samanp@gmail.com",
    phone: "0771234567",
    address: "No.1, Galle Road",
    city: "Colombo",
    country: "Sri Lanka",
    delivery_address: "No. 46, Galle road, Kalutara South",
    delivery_city: "Kalutara",
    delivery_country: "Sri Lanka",
    custom_1: "",
    custom_2: ""
  };


  window.payhere.startPayment(payment);
};


  return (
    <div className="billing-popup">
      <div className="popup-content">
        <div className="billing-form">
          <h2>Billing Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                <strong>Name :</strong>
              </label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>
                <strong>Email :</strong>
              </label>
              <input type="email" required />
            </div>
            <div className="form-group">
              <label>
                <strong>Phone :</strong>
              </label>
              <input type="tel" required />
            </div>
          </form>
        </div>

        <div className="appointment-summary">
          <h2>Session Summary</h2>
          <div className="summary-details">
            <p>
              <span><strong>Date :</strong> {date}</span>
            </p>
            <p>
              <span><strong>Court :</strong>  {court} </span>
            </p>
            <p>
              <strong>Selected Slots:</strong>
            </p>
            
            <div style={{ overflowY: "scroll", maxHeight: "60px" }}>
              <ul>
                {selectedSlots.map((slot, index) => (
                  <li key={index}>{slot}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="charges">
            <p>
              <span>
                <strong>Charge per Slot:</strong> Rs. {chargePerSlot}{" "}
              </span>
            </p>
            <p>
              <span>
                <strong>Slot Count:</strong> {selectedSlots.length}
              </span>
            </p>
            <p>
              <span>
                <strong>Total Amount:</strong>Rs. {totalAmount}
              </span>
            </p>
          </div>
          <div className="submit-button">
            <button type="submit" onClick={handlePay}>Pay Now</button>
          </div>
        </div>
      </div>
      <button className="close-popup" onClick={onClose}>
        X
      </button>
    </div>
  );
};

export default BillingPopup;
