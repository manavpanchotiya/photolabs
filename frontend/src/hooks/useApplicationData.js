import { useReducer, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  TOGGLE_DARK_MODE: 'TOGGLE_DARK_MODE',
};

const initialState = {
  favourites: [],
  displayModal: false,
  selectedPhoto: null,
  photoData: [],
  topicData: [],
  darkMode: false
};



function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload
      };

    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload
      };

    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return {
        ...state,
        photoData: action.payload
      };

    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favourites: [...state.favourites, action.payload]
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favourites: state.favourites.filter(id => id !== action.payload)
      };

    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload,
        displayModal: true
      };

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        displayModal: action.payload
      };
    
    case ACTIONS.TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode
      };
    
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //dark mode
  const toggleDarkMode = () => {
    const newMode = !state.darkMode;
    dispatch({ type: ACTIONS.TOGGLE_DARK_MODE, payload: newMode });

    if (newMode) {
    document.documentElement.classList.add('dark-mode');
    document.body.classList.add('dark-mode'); // Optional
  } else {
    document.documentElement.classList.remove('dark-mode');
    document.body.classList.remove('dark-mode'); // Optional
  }
  };

  const handleTopicClick = (topicId) => {
    fetch(`http://localhost:8001/api/topics/${topicId}/photos`)
    .then(res => res.json())
    .then(data => {
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
    })
    .catch(err => console.error("Error fetching topic photos:", err));
  };


  //fetch photos from DB
  useEffect(()=> {
  fetch('/api/photos')
    .then((response) => response.json())
    .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
  }, []);

  //fetch topics from DB
  useEffect(() => {
    fetch('/api/topics')
      .then((response) => response.json())
      .then((data) => dispatch({type: ACTIONS.SET_TOPIC_DATA, payload: data}))
  }, []);

  const updateToFavPhotoIds = (photoId) => {
    const isFav = state.favourites.includes(photoId);
    dispatch({
      type: isFav ? ACTIONS.FAV_PHOTO_REMOVED : ACTIONS.FAV_PHOTO_ADDED,
      payload: photoId
    });
  };

  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: null });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: false });
  };

  const setDisplayModal = (value) => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: value });
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    setDisplayModal,
    handleTopicClick,
    toggleDarkMode
  };
};

export default useApplicationData;