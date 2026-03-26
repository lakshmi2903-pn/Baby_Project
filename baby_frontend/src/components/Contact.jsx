import React, { useState } from "react";
import { Phone, Mail, Truck, RefreshCcw, X, Send } from "lucide-react"; // Added X and Send icons

const ContactPage = () => {
  // 1. ADD STATE FOR CHAT VISIBILITY
  const [showChat, setShowChat] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    queries: "",
  });

  const faqs = [
    {
      q: "Where are the offices of BabyZone located?",
      a: "Currently our office is located in Madurai while the orders are shipped from our Warehouses located across India.",
    },
    {
      q: "How do I know my order has been confirmed?",
      a: "After checking out during the payment process, you will get a confirmation that your payment has been processed successfully...",
    },
    {
      q: "Are there any other hidden charges like Octroi or Entry tax?",
      a: "You will get the final price during check out. Our prices are all inclusive and you need not pay anything extra.",
    },
    {
      q: "How long will it take to receive my orders?",
      a: "For off-areas serviced by reputed couriers, the delivery time would be within 2 to 4 business days after dispatch (business days exclude Sundays and other holidays). However items weighing over 2 kilos may take a couple of days longer to reach. For other areas the products will be shipped through Indian Postal Service and may take 1-2 weeks depending on the location.",
    },
    {
      q: "Will my GST amount be refunded on Order Cancellation and Returns?",
      a: "Yes, GST amount collected will be returned to customer's source method at the time of Cancellation and Returns.",
    },
  ];

  return (
    <div className="contact-page-wrapper">
      <style>
        {`
          .contact-page-wrapper {
            padding: 40px 20px;
            background-color: #fff;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            position: relative;
          }
          .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            max-width: 1100px;
            margin: 0 auto;
          }
          .reach-us-section { position: relative; }
          .reach-us-section h2, .form-section h2 {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 20px;
            color: #333;
          }
          .info-box { border: 2px solid #000; border-radius: 12px; padding: 20px; margin-bottom: 20px; }
          .info-item { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; font-weight: 500; }
          .action-button {
            width: 100%; border: 2px solid #000; background: white; border-radius: 12px;
            padding: 15px; margin-bottom: 15px; font-weight: 700; display: flex;
            justify-content: center; align-items: center; gap: 10px; cursor: pointer;
          }
          .live-chat-btn {
            background-color: #FFD700; border: none; padding: 10px 30px;
            border-radius: 8px; font-weight: 700; cursor: pointer;
          }
          
          /* CHAT POPUP STYLES */
          .chat-window {
            position: absolute;
            top: 0;
            left: 0;
            width: 350px;
            background: white;
            border: 2px solid #000;
            border-radius: 15px;
            z-index: 10;
            padding: 20px;
            box-shadow: 5px 5px 15px rgba(0,0,0,0.1);
          }
          .chat-header { display: flex; justify-content: flex-end; margin-bottom: 10px; }
          .encryption-text { font-size: 12px; text-align: center; color: #666; margin-bottom: 40px; }
          .chat-body { text-align: center; color: #ccc; margin-bottom: 40px; font-size: 14px; }
          .suggested-msg {
            border: 1px solid #ccc; border-radius: 20px; padding: 5px 15px;
            width: fit-content; font-size: 12px; margin-bottom: 15px;
          }
          .chat-input-area {
            display: flex; align-items: center; border: 1px solid #000;
            border-radius: 25px; padding: 5px 15px;
          }
          .chat-input-area input { border: none; outline: none; flex: 1; font-size: 14px; }
          .chat-send-btn { color: #FBCFE8; cursor: pointer; }

          .form-section { background-color: #FBCFE8; padding: 30px; border-radius: 25px; }
          .form-group { margin-bottom: 15px; }
          .form-group label { display: block; font-weight: 700; margin-bottom: 5px; }
          .form-group input, .form-group textarea { width: 100%; padding: 10px; border: none; border-radius: 8px; outline: none; }
          .send-btn { background-color: #FFD700; border: none; padding: 10px 50px; border-radius: 8px; font-weight: 700; display: block; margin: 20px auto 0; cursor: pointer; }
          
          .faq-section { max-width: 1100px; margin: 50px auto; background-color: #FBCFE8; padding: 40px; border-radius: 25px; }
          .faq-title { text-align: center; font-size: 28px; font-weight: 800; margin-bottom: 30px; }
          .faq-item { margin-bottom: 20px; }
          .faq-question { color: #D53F8C; font-weight: 700; margin-bottom: 8px; font-size: 15px; }
          .faq-answer { background: white; padding: 15px; border-radius: 10px; font-size: 14px; line-height: 1.5; color: #444; }
          
          @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr; } .chat-window { width: 100%; } }
        `}
      </style>

      <div className="contact-grid">
        <div className="reach-us-section">
          <h2>Reach us</h2>

          {/* 2. CHAT WINDOW COMPONENT */}
          {showChat && (
            <div className="chat-window">
              <div className="chat-header">
                <X
                  size={20}
                  cursor="pointer"
                  onClick={() => setShowChat(false)}
                />
              </div>
              <div className="encryption-text">
                Messages are end-to-end encrypted
              </div>
              <div className="chat-body">Start asking what do you think!</div>
              <div className="chat-footer">
                <div style={{ fontSize: "12px", marginBottom: "5px" }}>
                  Say hello to start
                </div>
                <div className="suggested-msg">Hello !</div>
                <div className="chat-input-area">
                  <input type="text" placeholder="Type message..." />
                  <Send size={18} className="chat-send-btn" fill="#FBCFE8" />
                </div>
              </div>
            </div>
          )}

          <div className="info-box">
            <div className="info-item">
              <Phone size={18} /> +91-123-456-7890
            </div>
            <div className="info-item">
              <Mail size={18} /> support@babyzone.com
            </div>
          </div>
          <button className="action-button">
            <Truck size={22} /> Track order & Cancel order
          </button>
          <button className="action-button">
            <RefreshCcw size={20} /> Exchange and refund policy
          </button>

          {/* 3. CLICK HANDLER ON BUTTON */}
          <button className="live-chat-btn" onClick={() => setShowChat(true)}>
            Live Chat
          </button>
        </div>

        <div className="form-section">
          <h2>Contact Form</h2>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="johndoe@gmail.com" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" placeholder="1234567890" />
          </div>
          <div className="form-group">
            <label>Queries</label>
            <textarea rows="4" placeholder="How can we help?"></textarea>
          </div>
          <button className="send-btn">Send</button>
        </div>
      </div>

      <div className="faq-section">
        <div className="faq-title">FAQ'S</div>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question">{faq.q}</div>
            <div className="faq-answer">{faq.a}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
