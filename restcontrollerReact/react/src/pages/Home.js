import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [comptes, setcomptes] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadcomptes();
  }, []);

  const loadcomptes = async () => {
    const result = await axios.get("http://localhost:8080/banque/comptes");
    setcomptes(result.data);
  };

  const deletecompte = async (id) => {
    await axios.delete(`http://localhost:8080/banque/comptes/${id}`);
    loadcomptes();
  };

  return (

    <div>
    <br />
    <br />
    <br />
    <br />
    <br />
      <div className="animated fadeInDown">
      <div className="form">
              <h1 className="title">Liste des Comptes</h1>
              <br/>
              <br/>
        <table>
          <thead style={{ backgroundColor: 'black', color: 'white' }}>
            <tr className="text-center">
              <th scope="col" >id</th>
              <th scope="col">Date de creation</th>
              <th scope="col">type</th>
              <th scope="col">solde</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {comptes.map((compte, index) => (
              <tr className="text-center">
                <td>{compte.id}</td>
                <td>{compte.dateCreation}</td>
                <td>{compte.type}</td>
                <td>{compte.solde}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewAccount/${compte.id}`}
                  >
                    Voir
                  </Link>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/editAccount/${compte.id}`}
                  >
                    Modifier
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deletecompte(compte.id)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      </div>

    </div>
  );
}