// Importer le package dotenv
require('dotenv').config();

// Afficher la valeur de la clé API
console.log("La clé API de OMDB est:", process.env.OMDB_API_KEY);
