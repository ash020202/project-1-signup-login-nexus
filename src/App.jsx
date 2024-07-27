import { useState } from "react";

import "./App.css";
import LoginSignup from "./components/LoginSignup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LoginSignup />
    </>
  );
}

export default App;
