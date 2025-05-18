import {useState} from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    console.log('icon liked',!liked);
  }
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={toggleLike}>
        {/* Insert React */}
        <FavIcon selected={liked}/>
      
      </div>
    </div>
  );
};

export default PhotoFavButton;
