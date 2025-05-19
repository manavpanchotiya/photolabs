import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from "../components/PhotoFavButton";

const PhotoDetailsModal = ({setDisplayModal, photo, toggleFavourite, isFavourite}) => {
  console.log('clicked photo data:', photo);
  
  return (
    <div className="photo-details-modal">
      <div className='photo-details-modal__top-bar'>
      <button className="photo-details-modal__close-button" onClick={()=> setDisplayModal(false)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      </div>

      <div>
        <PhotoFavButton 
          isFavourite={isFavourite(photo.id)}
          onClick={()=> toggleFavourite(photo.id)}
        />

        <img src={photo.urls.full} className='photo-details-modal__image' />
            
        <div className="photo-details-modal__photographer-details">
          <img src={photo.user.profile} alt={`${photo.user.username}'s profile`} className="photo-details-modal__photographer-profile"/>
          <div className="photo-details-modal__photographer-info">{photo.user.name}
          <div className="photo-details-modal__photographer-location">{`${photo.location.city}, ${photo.location.country}`}</div>
          </div>
        </div>

        <h2>Similar Photos</h2>
        
        <div className='photo-details-modal__images'>
          {Object.values(photo.similar_photos).map((similarPhoto, index) => (
          <div key={index}>
          <PhotoFavButton
            isFavourite={isFavourite(similarPhoto.id)}
            onClick={() => toggleFavourite(similarPhoto.id)}
          />
          <img
            src={similarPhoto.urls.regular} 
            alt="similar image"
            className='photo-details-modal__similar-image'
          />
        </div>            
        ))}
      </div>

      </div>
    </div>
  )
};

export default PhotoDetailsModal;
