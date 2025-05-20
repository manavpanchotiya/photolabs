import './App.scss';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const {
    state,
    setPhotoSelected,
    updateToFavPhotoIds,
    handleTopicClick,
    onClosePhotoDetailsModal,
    setDisplayModal
  } = useApplicationData();
  
  console.log("photo data", state.photoData);

  return (
    <>
    <div className="App">
      <HomeRoute 
      photos={state.photoData}
      topics={state.topicData}
      favourites={state.favourites}
      toggleFavourite={updateToFavPhotoIds}
      setDisplayModal={setDisplayModal}
      setSelectedPhoto={setPhotoSelected}
      onTopicClick={handleTopicClick}
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
