import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";

const Navigation = () => {
 return (
   <header className="header">
     <nav className="nav container">
       <NavLink to="/" className="nav__logo">
         Gestion des Comptes
       </NavLink>

       <div
         className={"nav__menu"}
         id="nav-menu"
       >
         <ul className="nav__list">
           <li className="nav__item">
             <NavLink to="/addAccount" className="btn-add"
             style={{
                       position: 'fixed', // Fixe le bouton à un endroit spécifique
                       right: '20px', // Décalage du bord droit
                       top: '20px', // Décalage du haut
                       zIndex: 1000, // Assure que le bouton soit au-dessus des autres éléments
                     }}
             >
               Ajouter Compte
             </NavLink>
           </li>
         </ul>
       </div>

     </nav>
   </header>
 );
};

export default Navigation;