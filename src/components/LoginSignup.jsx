import React, { useRef, useState } from "react";
import "../index.css";
const LoginSignup = () => {
  const [active, setActive] = useState("sign up");
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });
  const name = useRef();
  const email = useRef();
  const password = useRef();
  function validateInput() {
    const newErrors = { name: "", email: "", password: "" };
    let valid = true;

    if (
      active === "sign up" &&
      (name.current?.value === "" || name.current?.value.length <= 5)
    ) {
      newErrors.name =
        name.current?.value === ""
          ? "Name is required"
          : "Name must be greater than 5 characters";
      valid = false;
    }
    if (email.current?.value === "" || !email.current?.value.includes("@")) {
      newErrors.email =
        email.current?.value === ""
          ? "Email is required"
          : "Email must be valid";
      valid = false;
    }

    if (password.current?.value === "" || password.current?.value.length <= 5) {
      newErrors.password =
        password.current?.value === ""
          ? "Password is required"
          : "Password must be greater than 5 characters";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      name.current.value = "";
      email.current.value = "";
      password.current.value = "";
    }
  }
  return (
    <div className="bg-[#fbf3eb] text-[#e05653] p-5 flex flex-col gap-2 justify-center rounded-md border-[3px] border-black shadow-custom-shadow w-[90dvw] max-h-[500px] md:w-[500px]  [&>div]:cursor-default [&>p]:cursor-default fade">
      <p className="text-3xl font-bold mb-5 text-center uppercase">{active}</p>
      {active == "sign up" ? (
        <div className="flex flex-col gap-0">
          <input
            type="text"
            placeholder="Name"
            ref={name}
            className="bg-transparent border-b fade transition-all border-gray-300 p-2 rounded-sm focus:outline-none focus:border-black"
          />
          <span className="text-red-500 text-10px p-0">{errors.name}</span>
        </div>
      ) : null}
      <input
        type="email"
        placeholder="Email"
        ref={email}
        className="bg-transparent border-b border-gray-300 p-2  rounded-sm focus:outline-none focus:border-black"
      />
      <span>{errors.email}</span>
      <input
        type="password"
        placeholder="Password"
        ref={password}
        className=" bg-transparent border-b border-gray-300 p-2  rounded-sm focus:outline-none focus:border-black"
      />
      <span>{errors.password}</span>
      {active === "sign up" ? (
        <p className="text-sm text-gray-500">
          Already have an account?
          <button
            className="text-[#e05653] font-semibold pl-1"
            onClick={() => {
              setActive("login");
            }}
          >
            Login
          </button>
        </p>
      ) : (
        <p className="text-sm text-gray-500">
          Didnt have an account?
          <button
            className="text-[#e05653] font-semibold pl-1"
            onClick={() => {
              setActive("sign up");
            }}
          >
            Sign Up
          </button>
        </p>
      )}
      <button
        onClick={validateInput}
        className="bg-[#e05653] border-[3px] border-black text-black font-bold uppercase p-2 mt-5 rounded-md shadow-btn-shadow focus:shadow-none focus:translate-y-2"
      >
        {active === "sign up" ? "Sign Up" : "Login"}
      </button>
      <p className="pt-5 text-[12px] text-black">
        &#169; 2024 developed by{" "}
        <a
          href="https://ash020202.github.io/MyPortfolio/portfolio.html"
          className="text-[#e05653] font-bold"
        >
          Vimalkanth
        </a>
      </p>
    </div>
  );
};

export default LoginSignup;
