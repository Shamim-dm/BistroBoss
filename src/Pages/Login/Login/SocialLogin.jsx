import React from "react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProviders";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handleLogin = () => {
    googleLogin().then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      const saveUser = {
        name: loggedUser.displayName,
        email: loggedUser.email,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
            navigate(from, { replace: true });
        });
    });
  };
  return (
    <div className="mx-auto mt-3">
      <button onClick={handleLogin} className="btn btn-circle bg-white">
        <img
          src="https://cdn-icons-png.flaticon.com/512/270/270014.png"
          alt=""
        />
      </button>
    </div>
  );
};

export default SocialLogin;
