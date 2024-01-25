const axios = require('axios');
require('dotenv').config();

const searchMovies = async (searchTerm) => {
  const apiKey = process.env.OMDB_API_KEY; // Assurez-vous que cette clé est définie dans votre fichier .env
  const url = `http://www.omdbapi.com/?s=${encodeURIComponent(searchTerm)}&apikey=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data.Search; // Retourne les résultats de la recherche
  } catch (error) {
    console.error(`Erreur lors de la recherche de films : ${error}`);
    return []; // Retourne un tableau vide en cas d'erreur
  }
};

// Exemple d'utilisation
searchMovies("Alien").then(movies => {
  console.log("Films trouvés : ", movies);
});
