// script.js

const { fetchOffresPoleEmploi } = require('./api');

const fetchOffres = async () => {
  try {
    const region = 'PAR'; // Remplacez par la région souhaitée
    const offres = await fetchOffresPoleEmploi(region);
    console.log(offres); // Faites ce que vous voulez avec les données récupérées
  } catch (error) {
    console.error('Erreur lors de la récupération des offres d\'emploi:', error.message);
  }
};

// Appel de la fonction pour récupérer les offres
fetchOffres();
