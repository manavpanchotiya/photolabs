import './App.scss';
import HomeRoute from './components/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import { useState } from 'react';
import PhotoDetailsModal from './routes/PhotoDetailsModal';


const App = () => {
  const [favourites, setFavourites] = useState([]);

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
      toggleFavourite={toggleFavourite}/>
      <PhotoDetailsModal/>
    </div>
    </>
  );
};
export default App;
