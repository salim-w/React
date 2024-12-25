import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Editcompte() {
  let navigate = useNavigate();


  const {id} = useParams();

  const [compte, setcompte] = useState({
    solde: "",
    type: "",
    dateCreation: "",
  });

  const { solde, type, dateCreation } = compte;

  const onInputChange = (e) => {
    setcompte({ ...compte, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadcompte();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/banque/comptes/${id}`, compte);
    navigate("/");
  };

  const loadcompte = async () => {
    const result = await axios.get(`http://localhost:8080/banque/comptes/${id}`);
    setcompte(result.data);
  };

  return (
    <div className="container">
    <br/>
    <br/>
    <br/>
    <br/>
      <div className="login-signup-form animated fadeInDown">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"
        style={{
             backgroundImage: `
              linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 50, 0, 0.4))`
               }}>
          <h2 className="text-center m-4">Modifier un compte</h2>

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
                Type
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

            <div>
                    <label htmlFor="dateCreation">Date de Création:</label>
                    <input
                      type="date"
                      name="dateCreation"
                      className="form-control"
                      id="dateCreation"
                      value={dateCreation}
                      onChange={onInputChange}
                    />
                  </div>
                  <br/>


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
