import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon selected={isFavPhotoExist} displayAlert={isFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;
