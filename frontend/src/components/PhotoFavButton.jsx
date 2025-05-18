// import {useState} from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({isFavourite, onClick}) =>{
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={onClick}>
        {/* Insert React */}
        <FavIcon selected={isFavourite} displayAlert={false}/>
      
      </div>
    </div>
  );
};

export default PhotoFavButton;
