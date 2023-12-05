// server.js

const express = require('express');
const { fetchOffresPoleEmploi } = require('./api');

const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.get('/offres/:region', async (req, res) => {
  try {
    const { region } = req.params;
    const offres = await fetchOffresPoleEmploi(region);
    res.json(offres);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Erreur lors de la récupération des offres d\'emploi');
  }
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
