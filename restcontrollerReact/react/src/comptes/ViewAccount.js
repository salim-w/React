import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Viewcompte() {
  const [compte, setcompte] = useState({
    solde: "",
    type: "",
    dateCreation: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadcompte();
  }, []);

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
      <div className="login-signup-form-forAff animated fadeInDown">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"
        style={{
             backgroundImage: `
              linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 50, 0, 0.4))
              `
               }}>
          <h2 className="text-center m-4">Details du compte </h2>
          <br/>
          <div>
            <div>
              <ul>
                <li>
                   Details de compte de id : {compte.id}
                </li>
                <br/>
                <li>
                  <b>Solde :  </b>
                  &nbsp; &nbsp; {compte.solde}
                </li>
                <br/>
                <li>
                  <b>type : </b>
                   &nbsp; &nbsp; {compte.type}
                </li>
                <br/>
                <li>
                  <b>date du creation : </b>
                  &nbsp; &nbsp; {compte.dateCreation}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Page accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
