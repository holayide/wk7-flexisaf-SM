import { useContext, useEffect } from "react";
import { LoginContext } from "../contexts/LoginContext";
import styles from "./welcome.module.css";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const context = useContext(LoginContext);
  const navigate = useNavigate();

  if (!context) {
    throw new Error("Content must be used within a LoginProvider");
  }

  const { name } = context;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/landing");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={styles.wrapper}>
      <h1>
        Welcome <span>{name.toUpperCase()}</span>
      </h1>
      <p>to Ola's Store</p>
      <div className={styles.celebrate}>🛒</div>
    </div>
  );
}
