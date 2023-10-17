import React, { useState } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';

function Home() {
  const [offres, setOffres] = useState([
    {
      titre: "Titre de l'offre 1",
      description: "Description de l'offre 1",
      entreprise: "Nom de l'entreprise 1",
    },
    {
      titre: "Titre de l'offre 2",
      description: "Descs l'offre 2",
      entreprise: "Nom de l'entreprise 2",
    },
    {
      titre: "Titre de l'offre 3",
      description: "Description de l'offre 3",
      entreprise: "Nom de l'entreprise 3",
    },
  ]);

  // Fonction pour mettre à jour la description d'une offre
  const updateDescription = (index, newDescription) => {
    const updatedOffres = [...offres];
    updatedOffres[index].description = newDescription;
    setOffres(updatedOffres);
  };

  return (
    <div>
      <Header />
      <div className="mt-6">
        {offres.map((offre, index) => (
          <Card key={index} offre={offre} onDescriptionChange={(newDescription) => updateDescription(index, newDescription)} />
        ))}
      </div>
    </div>
  );
}

export default Home;
