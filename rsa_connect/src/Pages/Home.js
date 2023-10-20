import React, { useState } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import NewModal from '../components/modal';


function Home() {
  const [offres, setOffres] = useState([
    {
      titre: "Titre de l'offre 1",
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
  ]);

  const [selectedOffreIndex, setSelectedOffreIndex] = useState(null);

  const updateDescription = (index, newDescription) => {
    const updatedOffres = [...offres];
    updatedOffres[index].description = newDescription;
    setOffres(updatedOffres);
  };  
  const updateTitle = (index, newTitle) => {
    const updatedOffres = [...offres];
    updatedOffres[index].titre = newTitle;
    setOffres(updatedOffres);
  };

  const updateName = (index, newName) => {
    const updatedOffres = [...offres];
    updatedOffres[index].name = newName;
    setOffres(updatedOffres);
  };

  const selectOffre = (index) => {
    setSelectedOffreIndex(index);
  };

  return (
    <div>
      <Header />
      <div className="mt-6">
      {offres.map((offre, index) => (
     <Card
     key={index}
     offre={offre}
     onDescriptionChange={(newDescription) => updateDescription(index, newDescription)}
     onTitleChange={(newTitle) => updateTitle(index, newTitle)}
     onNameChange={(newName)=> updateName(index, newName)} 
   />
   

    ))}
      </div>
      {selectedOffreIndex !== null && (
        <NewModal isOpen={true} offre={offres[selectedOffreIndex]} onClose={() => setSelectedOffreIndex(null)} />
      )}
    </div>
  );
}

export default Home;
