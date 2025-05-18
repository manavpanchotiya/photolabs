import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({photos, favourites, toggleFavourite, setDisplayModal}) => {
  return (
     <ul className="photo-list">
      {photos.map((photo) => (
        <li key={photo.id}>
          <PhotoListItem 
          photo={photo} 
          isFavourite={favourites.includes(photo.id)}
          toggleFavourite={toggleFavourite}
          setDisplayModal={setDisplayModal}
          />
        </li>
      ))}      
    </ul>
  );
};

export default PhotoList;
