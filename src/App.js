import { useState } from "react";
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmTouched, setConfirmTouched] = useState(false);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordValid = password.length >= 8;
  const confirmValid = password === confirmPassword && confirmPassword !== "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailValid && passwordValid && confirmValid) {
      alert("Form submitted successfully!");
    } else {
      alert("Can't submit the form");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        {/* EMAIL */}
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setEmailTouched(true)}
          className={
            emailTouched
              ? emailValid
                ? "valid"
                : "invalid"
              : ""
          }
        />
        {emailTouched && !emailValid && (
          <p className="error">Invalid email format</p>
        )}

        {/* PASSWORD */}
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setPasswordTouched(true)}
          className={
            passwordTouched
              ? passwordValid
                ? "valid"
                : "invalid"
              : ""
          }
        />
        {passwordTouched && !passwordValid && (
          <p className="error">Password must be at least 8 characters</p>
        )}

        {/* CONFIRM PASSWORD */}
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onFocus={() => setConfirmTouched(true)}
          className={
            confirmTouched
              ? confirmValid
                ? "valid"
                : "invalid"
              : ""
          }
        />
        {confirmTouched && !confirmValid && (
          <p className="error">Passwords do not match</p>
        )}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
