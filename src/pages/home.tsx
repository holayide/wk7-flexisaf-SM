import { useContext } from "react";
import Welcome from "../components/welcome";
import Login from "./login/Login";
import { LoginContext } from "../contexts/LoginContext";

function Home() {
  const context = useContext(LoginContext);

  if (!context) {
    throw new Error("Content must be used within a LoginProvider");
  }

  const { profile } = context;

  return <div>{profile ? <Welcome /> : <Login />}</div>;
}

export default Home;
