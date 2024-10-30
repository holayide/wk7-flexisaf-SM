// import React from "react";
import { useContext, useState } from "react";
import styles from "./Login.module.css";
import { LoginContext } from "../../contexts/LoginContext";

export default function Login() {
  const [error, setError] = useState("");

  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("Login component must be used within a LoginProvider");
  }
  const { name, profile, setName, setProfile } = context;

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setError("");
  };

  const handleLogin = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Name cannot be empty");
    } else {
      setProfile(() => !profile);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.userImg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#fff"
            viewBox="0 0 256 256"
          >
            <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
          </svg>
        </div>
        <h1>Login-in</h1>

        <form action="#" className={styles.form}>
          <div>
            <label htmlFor="name" className={styles.label}>
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              className={styles.input}
              value={name}
              onChange={handleName}
            />
          </div>
          <div>
            <label htmlFor="password" className={styles.label}>
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className={styles.input}
            />
            <p className={styles.note}>Not important !!!</p>
          </div>

          <div onClick={handleLogin} className={styles.btnWrapper}>
            <button className={styles.btn}>Submit</button>
          </div>
        </form>

        {error && <div className={styles.error}>{error}</div>}
      </div>
    </div>
  );
}
