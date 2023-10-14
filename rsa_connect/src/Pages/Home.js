import React from 'react';
import Header from '../components/Header';
import TitreOffre from '../components/TitreOffre';
import DescriptionOffre from '../components/DescriptionOffre';
import EntrepriseOffre from '../components/EntrepriseOffre';

function Home() {
  const offres = [
    {
      titre: "Titre l'offre 1",
      description: "Description de l'offre 1",
      entreprise: "Nom de l'entreprise 1",
    },
    {
      titre: "Titre de l'offre 2",
      description: "Description de l'offre 2",
      entreprise: "Nom de l'entreprise 2",
    },
    {
      titre: "Titre de l'offre 3",
      description: "Description de l'offre 3",
      entreprise: "Nom de l'entreprise 3",
    },
  ];

  return (
    <div>
      <Header />
      <div className="mt-6">
        {offres.map((offre, index) => (
          <div
            key={index}
            className="card p-4 border border-gray-300 rounded mb-6 shadow-lg max-w-xs mx-auto"
          >
            <TitreOffre titre={offre.titre} />
            <DescriptionOffre description={offre.description} />
            <EntrepriseOffre entreprise={offre.entreprise} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
