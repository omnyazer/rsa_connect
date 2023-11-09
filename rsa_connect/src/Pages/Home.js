import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Header from '../components/Header';
import Card from '../components/Card';
import DesktopModal from '../components/Desktopmodal'; // Assurez-vous que le chemin d'importation est correct
import VerticalSwipe from '../components/VerticalSwipe';


function Home() {
  const [offres, setOffres] = useState([
    {
      id: 1,
      titre: "Titre de l'offre 1",
      description: "Description de l'offre 1",
      name: "Nom de l'entreprise 1",
      lienDeLoffre: "https://www.liendeloffre1.com",
    },
    {
      id: 2,
      titre: "Titre de l'offre 2",
      description: "Description de l'offre 2",
      name: "Nom de l'entreprise 2",
      lienDeLoffre: "https://www.liendeloffre2.com",
    },
    {
      id: 3,
      titre: "Titre de l'offre 3",
      description: "Description de l'offre 3",
      name: "Nom de l'entreprise 3",
      lienDeLoffre: "https://www.liendeloffre3.com",
    },
    {
      id: 4,
      titre: "Titre de l'offre 4",
      description: "Description de l'offre 4",
      name: "Nom de l'entreprise 4",
      lienDeLoffre: "https://www.liendeloffre4.com",
    },
    {
      id: 5,
      titre: "Titre de l'offre 5",
      description: "Description de l'offre 5",
      name: "Nom de l'entreprise 5",
      lienDeLoffre: "https://www.liendeloffre5.com",
    },
    {
      id: 6,
      titre: "Titre de l'offre 6",
      description: "Description de l'offre 6",
      name: "Nom de l'entreprise 6",
      lienDeLoffre: "https://www.liendeloffre6.com",
    },
    {
      id: 7,
      titre: "Titre de l'offre 7",
      description: "Description de l'offre 7",
      name: "Nom de l'entreprise 7",
      lienDeLoffre: "https://www.liendeloffre7.com",
    },
    {
      id: 8,
      titre: "Titre de l'offre 8",
      description: "Description de l'offre 8",
      name: "Nom de l'entreprise 8",
      lienDeLoffre: "https://www.liendeloffre8.com",
    },
  ]);

  const [selectedOffreIndex, setSelectedOffreIndex] = useState(null);
  const [isDesktopView, setIsDesktopView] = useState(false);

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

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopView(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="home-container">
      <Header />

      {/* Use Tailwind CSS classes for the right background on the body or a wrapper div */}
      <div className="flex">
        {/* Left side content */}
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

        {/* Right side content with blue background - render only on desktop */}
        {isDesktopView && (
          <div className="bg-blue-500 w-1/2">
            {/* Add any content you want on the right side */}
          </div>
        )}
      </div>

      {/* DesktopModal component */}
      {selectedOffreIndex !== null && isDesktopView && (
        <DesktopModal isOpen={true} offre={offres[selectedOffreIndex]} onClose={() => setSelectedOffreIndex(null)} />
      )}
    </div>
  );
}

export default Home;