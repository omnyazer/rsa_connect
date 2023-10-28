import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Header from '../components/Header';
import Card from '../components/Card';
import NewModal from '../components/modal';

function Home() {
  const [offres, setOffres] = useState([
    {
      id: 1,
      titre: "Titre de l'offre 1",
      description: "Description de l'offre 1",
      name: "Nom de l'entreprise 1",
    },
    {
      id: 2,
      titre: "Titre de l'offre 2",
      description: "Description de l'offre 2",
      name: "Nom de l'entreprise 2",
    },
    {
      id: 3,
      titre: "Titre de l'offre 3",
      description: "Description de l'offre 3",
      name: "Nom de l'entreprise 3",
    },
    {
      id: 4,
      titre: "Titre de l'offre 4",
      description: "Description de l'offre 4",
      name: "Nom de l'entreprise 4",
    },
    {
      id: 5,
      titre: "Titre de l'offre 5",
      description: "Description de l'offre 5",
      name: "Nom de l'entreprise 5",
    },
    {
      id: 6,
      titre: "Titre de l'offre 6",
      description: "Description de l'offre 6",
      name: "Nom de l'entreprise 6",
    },
    {
      id: 7,
      titre: "Titre de l'offre 7",
      description: "Description de l'offre 7",
      name: "Nom de l'entreprise 7",
    },
    {
      id: 8,
      titre: "Titre de l'offre 8",
      description: "Description de l'offre 8",
      name: "Nom de l'entreprise 8",
    },
   
    
  ]);

  const [selectedOffreIndex, setSelectedOffreIndex] = useState(null);

  const updateDescription = (id, newDescription) => {
    const updatedOffres = [...offres];
    const index = updatedOffres.findIndex((offre) => offre.id === id);
    updatedOffres[index].description = newDescription;
    setOffres(updatedOffres);
  };

  const updateTitle = (id, newTitle) => {
    const updatedOffres = [...offres];
    const index = updatedOffres.findIndex((offre) => offre.id === id);
    updatedOffres[index].titre = newTitle;
    setOffres(updatedOffres);
  };

  const updateName = (id, newName) => {
    const updatedOffres = [...offres];
    const index = updatedOffres.findIndex((offre) => offre.id === id);
    updatedOffres[index].name = newName;
    setOffres(updatedOffres);
  };

  const selectOffre = (index) => {
    setSelectedOffreIndex(index);
  };
  function removeOffre(id) {
    const updatedOffres = offres.filter((offre) => offre.id !== id);
    setOffres(updatedOffres);
  }
  
  const handleAddOffre = async () => {
    console.log('Ajout d\'une nouvelle offre'); 
    const response = await fetch('/api/offres', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        titre: 'Titre de la nouvelle offre',
        description: 'Description de la nouvelle offre',
        name: "Nom de l'entreprise",
      }),
    });
  
    if (response.status === 200) {
      const newOffre = await response.json();
      setOffres([...offres, newOffre]);
    } else {
      console.error('Error adding offre:', response.statusText);
    }
  };
  
  return (
    <div className="home-container ">
      <Header />
      <Swiper
  direction="vertical"
  className="mt-8"
>
  <SwiperSlide>
    <div className="offres-group">
      {offres.map((offre) => (
        <Card
          key={offre.id}
          offre={offre}
          onDescriptionChange={(newDescription) => updateDescription(offre.id, newDescription)}
          onTitleChange={(newTitle) => updateTitle(offre.id, newTitle)}
          onNameChange={(newName) => updateName(offre.id, newName)}
          onRemove={(id) => removeOffre(id)}
        />
      ))}
    </div>
  </SwiperSlide>
</Swiper>


      <button
        onClick={handleAddOffre}
        className="bg-blue-dark hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Ajouter une offre
      </button>


      {selectedOffreIndex !== null && (
        <NewModal isOpen={true} offre={offres[selectedOffreIndex]} onClose={() => setSelectedOffreIndex(null)} />
      )}
    </div>
  );
}

export default Home;