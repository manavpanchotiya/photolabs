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
    setDisplayModal,
    toggleDarkMode
  } = useApplicationData();
  
 
  return (
    <>
    <div className={`App ${state.darkMode ? 'dark-mode' : ''}`}>
      <HomeRoute 
      photos={state.photoData}
      topics={state.topicData}
      favourites={state.favourites}
      toggleFavourite={updateToFavPhotoIds}
      setDisplayModal={setDisplayModal}
      setSelectedPhoto={setPhotoSelected}
      onTopicClick={handleTopicClick}
      toggleDarkMode={toggleDarkMode}
      darkMode={state.darkMode}
      />

      {/* only works if displayModal is true */}
      {state.displayModal && state.selectedPhoto && (
        <PhotoDetailsModal
        setDisplayModal={onClosePhotoDetailsModal}
        photo={state.selectedPhoto}
        toggleFavourite={updateToFavPhotoIds}
        favourites={state.favourites}
        isFavourite={(photoId)=> state.favourites.includes(photoId)}
        darkMode={state.darkMode}
            
      />)}
      
    </div>
    </>
  );
};


export default App;
