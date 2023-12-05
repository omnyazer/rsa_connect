// api.js

const axios = require('axios');

const fetchOffresPoleEmploi = async (region) => {
  try {
    const clientId = 'PAR_test_879d47cbc63f7bd71bce9328237cb4fbe273bcfea2e046615ab6aaeefa37f3e9';
    const clientSecret = '382d690bb9d94961cb3f7e2b68362b6de556c3d7fe1fa05a6d2b091bd5448c64';
    const apiUrl = `https://api.emploi-store.fr/partenaire/offresdemploi/v2/offres/search?criterias=region=${region}`;

    const tokenResponse = await axios.post('https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=%2Fpartenaire', null, {
      params: {
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'client_credentials',
        scope: 'api_offresdemploiv2 o2dsoffre'
      }
    });

    const accessToken = tokenResponse.data.access_token;

    const offresResponse = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    const offres = offresResponse.data;
    return offres;
  } catch (error) {
    throw new Error(`Erreur lors de la récupération des offres d'emploi : ${error.message}`);
  }
};

module.exports = { fetchOffresPoleEmploi };
