import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Header from '../components/Header';
import VerticalSwipe from '../components/VerticalSwipe';
import DesktopModal from '../components/DesktopModal';

function Home() {
  const [offres, setOffres] = useState([
    {
      id: 0,
      titre: "Titre de l'offre 1",
      description: "Description de l'offre 1",
      name: "Nom de l'entreprise 1",
      lienDeLoffre: "https://www.liendeloffre1.com",
    },
    {
      id: 1,
      titre: "Titre de l'offre 2",
      description: "Description de l'offre 2",
      name: "Nom de l'entreprise 2",
      lienDeLoffre: "https://www.liendeloffre2.com",
    },
    {
      id: 2,
      titre: "Titre de l'offre 3",
      description: "Description de l'offre 3",
      name: "Nom de l'entreprise 3",
      lienDeLoffre: "https://www.liendeloffre3.com",
    },
    {
      id: 3,
      titre: "Titre de l'offre 4",
      description: "Description de l'offre 4",
      name: "Nom de l'entreprise 4",
      lienDeLoffre: "https://www.liendeloffre4.com",
    },
    {
      id: 4,
      titre: "Titre de l'offre 5",
      description: "Description de l'offre 5",
      name: "Nom de l'entreprise 5",
      lienDeLoffre: "https://www.liendeloffre5.com",
    },
    {
      id: 5,
      titre: "Titre de l'offre 6",
      description: "Description de l'offre 6",
      name: "Nom de l'entreprise 6",
      lienDeLoffre: "https://www.liendeloffre6.com",
    },
    {
      id: 6,
      titre: "Titre de l'offre 7",
      description: "Description de l'offre 7",
      name: "Nom de l'entreprise 7",
      lienDeLoffre: "https://www.liendeloffre7.com",
    },
    {
      id: 7,
      titre: "Titre de l'offre 8",
      description: "Description de l'offre 8",
      name: "Nom de l'entreprise 8",
      lienDeLoffre: "https://www.liendeloffre8.com",
    },
  ]);

  const [selectedOffreIndex, setSelectedOffreIndex] = useState(null);
  const [isDesktopView, setIsDesktopView] = useState(false);
  const [showDesktopModal, setShowDesktopModal] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopView(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Mettez à jour selectedOffreIndex pour afficher la première offre par défaut
    setSelectedOffreIndex(offres.length > 0 ? offres[0].id : null);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [offres]);

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

  const removeOffre = (id) => {
    const updatedOffres = offres.filter((offre) => offre.id !== id);
    setOffres(updatedOffres);
  };

  const handleAddOffre = async () => {
    console.log("Ajout d'une nouvelle offre");
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

  const handleOpenDesktopModal = (offre) => {
    // Utilisez l'ID de l'offre directement
    setSelectedOffreIndex(offre.id);
    setShowDesktopModal(true);
  };
  

  return (
    <div className="home-container">
      <Header />
      <div className="flex">
        <div className="w-full md:w-1/2">
          <VerticalSwipe
            data={offres}
            updateDescription={updateDescription}
            updateTitle={updateTitle}
            updateName={updateName}
            selectOffre={selectOffre}
            isDesktopView={isDesktopView}
          />
        </div>

        {isDesktopView && (
          <div className="w-1/2 border-l-2  border-blue-900">
            {showDesktopModal && (
              <DesktopModal
                offre={offres.find((o) => o.id === selectedOffreIndex)}
                onClose={() => setShowDesktopModal(false)}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;