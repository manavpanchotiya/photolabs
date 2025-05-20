import PhotoList from "./PhotoList"
import TopNavigation from "./TopNavigationBar"
import '../styles/HomeRoute.scss'

const HomeRoute = ({ photos, topics, favourites, toggleFavourite, setDisplayModal, setSelectedPhoto, onTopicClick}) => {
    return (
        <div className="home-route">
            <TopNavigation topics={topics} favourites={favourites} onTopicClick={onTopicClick}/>
            <PhotoList 
            photos={photos} 
            favourites={favourites}
            toggleFavourite={toggleFavourite}
            setDisplayModal={setDisplayModal}
            setSelectedPhoto={setSelectedPhoto}/>
        </div>
    );
};

export default HomeRoute;