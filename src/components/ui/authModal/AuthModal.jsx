import React, { useState } from "react";
import "./AuthModal.css";
import Login from "./Login";
import Register from "./Register";

const AuthModal = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [active, setActive] = useState(true);

  return (
    <div className={`auth-modal ${active}`} onClick={() => setActive(false)}>
      <div
        className="auth-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="auth-modal-tabs-container">
          <div
            className={`single-auth-modal-tab ${activeTab === "login"}`}
            onClick={() => setActiveTab("login")}
          >
            Sign in
          </div>
          <div
            className={`single-auth-modal-tab ${activeTab === "register"}`}
            onClick={() => setActiveTab("register")}
          >
            New account
          </div>
        </div>
        <form>{activeTab === "login" ? <Login /> : <Register />}</form>
      </div>
    </div>
  );
};

export default AuthModal;
