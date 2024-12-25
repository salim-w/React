import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Addcompte() {
  let navigate = useNavigate();

  const [compte, setcompte] = useState({
    solde: "",
    type: "",
  });

  const { solde, type } = compte;

  const onInputChange = (e) => {
    setcompte({ ...compte, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/banque/comptes", compte);
    navigate("/");
  };

  return (
    <div className="container" >
    <br/>
    <br/>
      <div className="login-signup-form animated fadeInDown" >
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"
        style={{
             backgroundImage: `
              linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 50, 0, 0.4))`
               }}>
          <h2 className="text-center m-4">Ajouter un compte</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="solde" className="form-label">
                Solde
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your solde"
                name="solde"
                value={solde}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="type" className="form-label">
                type
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your type"
                name="type"
                value={type}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-primary mx-2">
              Submit
            </button>
            <Link className="btn btn-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
