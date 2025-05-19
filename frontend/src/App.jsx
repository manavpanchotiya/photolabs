import './App.scss';
import HomeRoute from './components/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import { useState } from 'react';
import PhotoDetailsModal from './routes/PhotoDetailsModal';


const App = () => {
  const [favourites, setFavourites] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleFavourite = (photoId) => {
    setFavourites((prev) =>
      prev.includes(photoId) ? prev.filter((id) => id !== photoId) : [...prev, photoId]);
  };
    return (
    <>
    <div className="App">
      <HomeRoute 
      photos={photos}
      topics={topics}
      favourites={favourites}
      toggleFavourite={toggleFavourite}
      setDisplayModal={setDisplayModal}
      setSelectedPhoto={setSelectedPhoto}
      />

      {/* only works if displayModal is true */}
      {displayModal && <PhotoDetailsModal
      setDisplayModal={setDisplayModal}
      photo={selectedPhoto}
      toggleFavourite={toggleFavourite}
      favourites={favourites}
      isFavourite={(photoId)=> favourites.includes(photoId)}
            
      />}
    </div>
    </>
  );
};
export default App;
