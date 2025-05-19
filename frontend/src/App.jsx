import './App.scss';
import HomeRoute from './components/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const {
    state,
    setPhotoSelected,
    updateToFavPhotoIds,
    
    onClosePhotoDetailsModal,
    setDisplayModal
  } = useApplicationData();
    
  return (
    <>
    <div className="App">
      <HomeRoute 
      photos={photos}
      topics={topics}
      favourites={state.favourites}
      toggleFavourite={updateToFavPhotoIds}
      setDisplayModal={setDisplayModal}
      setSelectedPhoto={setPhotoSelected}
      />

      {/* only works if displayModal is true */}
      {state.displayModal && state.selectedPhoto && (
        <PhotoDetailsModal
        setDisplayModal={onClosePhotoDetailsModal}
        photo={state.selectedPhoto}
        toggleFavourite={updateToFavPhotoIds}
        favourites={state.favourites}
        isFavourite={(photoId)=> state.favourites.includes(photoId)}
            
      />)}
      
    </div>
    </>
  );
};


export default App;
