import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from './Card';

export default function SwiperComponent({ offres, updateDescription, updateTitle, updateName, removeOffre }) {
  return (
    <Swiper
      direction="vertical"
      className="mySwiper"
    >
      {offres.map((offre) => (
        <SwiperSlide key={offre.id}>
          <div className="offres-group">
            <Card
              offre={offre}
              onDescriptionChange={(newDescription) => updateDescription(offre.id, newDescription)}
              onTitleChange={(newTitle) => updateTitle(offre.id, newTitle)}
              onNameChange={(newName) => updateName(offre.id, newName)}
              onRemove={(id) => removeOffre(id)}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
