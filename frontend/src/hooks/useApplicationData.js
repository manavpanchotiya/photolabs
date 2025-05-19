import { useState } from "react";

const useApplicationData = () => {
  const [state, setState] = useState({
    favourites: [],
    displayModal: false,
    selectedPhoto: null,
  });

  const updateToFavPhotoIds = (photoId) => {
    setState(prev => ({
        ...prev,favourites: prev.favourites.includes(photoId) ? prev.favourites.filter(id => id !== photoId) : [...prev.favourites, photoId]
    }));
  };

  const setPhotoSelected = (photo) => {
    setState(prev => ({
      ...prev, selectedPhoto:photo, displayModal:true,
    }));
  };

  const onClosePhotoDetailsModal = () => {
    setState(prev => ({
      ...prev, selectedPhoto: null, displayModal: false
    }));
  };

  const setDisplayModal = (value) => {
    setState((prev) => ({
      ...prev, displayModal: value
    }));
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    setDisplayModal,
  };
};
export default useApplicationData;  
