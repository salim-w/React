Gestion des Comptes - FirstSpringReact

Ce projet est une application web dédiée à la gestion des comptes bancaires, développée avec Spring Boot pour le backend et React pour le frontend. Elle permet de créer, consulter, mettre à jour et supprimer des comptes, ainsi que d'effectuer des opérations telles que les dépôts et les retraits.

Fonctionnalités
Gestion des comptes (CRUD) : Création, consultation, mise à jour et suppression des comptes bancaires.
Opérations bancaires : Réalisation de dépôts et de retraits sur les comptes.
Consultation des soldes : Affichage du solde actuel de chaque compte.
Persistance des données : Utilisation par défaut d'une base de données H2 en mémoire (pour le développement et les tests). Facilement configurable pour utiliser une autre base de données.
API REST : Le backend Spring Boot expose une API REST pour gérer les comptes et les opérations.
Interface utilisateur : Une interface interactive développée avec React permettant d'interagir avec l'API.
Validation des données : Validation des entrées côté backend et frontend pour assurer l'intégrité des données.
Technologies utilisées
Backend :

Spring Boot : Framework pour la création d'applications Java.
Spring Data JPA : Simplifie l'accès aux données avec JPA.
Spring Web : Pour la création de l'API REST.
H2 Database : Base de données en mémoire pour le développement.
Frontend :

React : Bibliothèque JavaScript pour créer des interfaces utilisateur dynamiques.
Axios : Client HTTP pour les appels API.
Material UI (optionnel) : Bibliothèque de composants React pour l'interface utilisateur.
Autres :

Maven : Gestion des dépendances du backend.
NPM : Gestion des dépendances du frontend.
Lombok (optionnel) : Simplifie le code Java en générant automatiquement des méthodes comme les getters et setters.
