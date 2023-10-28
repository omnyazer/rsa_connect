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
    <div>
    <Header />
    <Swiper
      direction="vertical"
      slidesPerView={4}
      spaceBetween={200}
      mousewheel={true}
      className="mt-8"
    >
      {offres.map((offre) => (
        <SwiperSlide key={offre.id}>
          <Card
            offre={offre}
            onDescriptionChange={(newDescription) => updateDescription(offre.id, newDescription)}
            onTitleChange={(newTitle) => updateTitle(offre.id, newTitle)}
            onNameChange={(newName) => updateName(offre.id, newName)}
            onRemove={(id) => removeOffre(id)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  
    <button onClick={handleAddOffre} class="bg-blue-dark hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">Ajouter une offre</button>
  
    {selectedOffreIndex !== null && (
      <NewModal isOpen={true} offre={offres[selectedOffreIndex]} onClose={() => setSelectedOffreIndex(null)} />
    )}
  </div>
  
  );
}

export default Home;