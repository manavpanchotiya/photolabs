import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({ photo, isFavourite, toggleFavourite, setDisplayModal }) => {
  /* Insert React */
  const { id, location, urls, user } = photo;
  return(
      <div className="photo-list__item" key={id}>
      <PhotoFavButton 
      isFavourite={isFavourite}
      onClick={()=> toggleFavourite(id)}
      />
      <img 
      src={urls.regular} 
      alt="Regular size image"
      className="photo-list__image"
      onClick={()=> setDisplayModal(true)}
      />
            
      <div className="photo-list__user-details">
        <img src={user.profile} alt={`${user.username}'s profile`} className="photo-list__user-profile"/>
          
        <div className="photo-list__user-info">{user.name}
          <div className="photo-list__user-location">{`${location.city}, ${location.country}`}</div>
        </div>
      </div>
      
      
    </div>
  )

};

export default PhotoListItem;
