import React from 'react'
import qrImage from "../assets/qr.jpeg";

const QRCode = () => {

    const handlePayment = () => {
    alert("Payment received! We will contact you soon.");
  };
  return (
     <section className="qr-section">
      <div className="qr-card">
        <h1>Complete Your Payment</h1>
        <p>Scan the QR code below to proceed with your payment</p>

        <div className="qr-image">
           <img src={qrImage} alt="QR Code" />
        </div>

        <div className="qr-details">
          <p><strong>UPI ID:</strong> 6378320108-2@ybl</p>
          <p><strong>Name:</strong> RAJESH</p>
        </div>

        <button className="done-btn" onClick={handlePayment}>
          I Have Paid
        </button>
      </div>
    </section>
  )
}

export default QRCode