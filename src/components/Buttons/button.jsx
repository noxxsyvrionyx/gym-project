import React, { useState } from "react";
import "./button.css";

const Clicks = () => {
  const [activeContent, setActiveContent] = useState(null);

  const contentData = {
  process: (
    <div className="process-steps">
      <div className="step">
        <div className="step-number">1</div>
        <div className="step-text">Understand your goals in detail.</div>
      </div>
      <div className="step">
        <div className="step-number">2</div>
        <div className="step-text">Bring experts based on your goal field.</div>
      </div>
      <div className="step">
        <div className="step-number">3</div>
        <div className="step-text">Develop a tailored action plan together.</div>
      </div>
      <div className="step">
        <div className="step-number">4</div>
        <div className="step-text">Track progress and optimize regularly.</div>
      </div>
    </div>
  ),
  plans: (
    <div className="plans-container">
      <h2>Gym Membership Plans</h2>
      <div className="plan-card">
        <h3>Basic Plan</h3>
        <p>Access to gym equipment, locker room, and group classes.</p>
        <p><strong>$25/month</strong></p>
      </div>
      <div className="plan-card">
        <h3>Standard Plan</h3>
        <p>Includes Basic Plan + personal trainer sessions (2/month).</p>
        <p><strong>$45/month</strong></p>
      </div>
      <div className="plan-card">
        <h3>Premium Plan</h3>
        <p>Includes Standard Plan + unlimited trainer sessions & nutrition plan.</p>
        <p><strong>$75/month</strong></p>
      </div>
    </div>
  ),
  contacts: (
    <div>
      <h2>Contacts</h2>
      <p>Email: info@gymexample.com</p>
      <p>Phone: +880 1234 567890</p>
    </div>
  ),
};

  const handleClose = () => setActiveContent(null);

  return (
    <div className="process-container">
      <div className="button-group">
        <button
          className="process-button"
          onClick={() => setActiveContent("process")}
        >
          Process
        </button>
        <button
          className="process-button"
          onClick={() => setActiveContent("plans")}
        >
          Plans
        </button>
        <button
          className="process-button"
          onClick={() => setActiveContent("contacts")}
        >
          Contacts
        </button>
      </div>

      {activeContent && (
        <div className="modal-overlay" onClick={handleClose}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
          >
            <span className="close-icon" onClick={handleClose}>
              &times;
            </span>
            {contentData[activeContent]}
          </div>
        </div>
      )}
    </div>
  );
};

export default Clicks;
