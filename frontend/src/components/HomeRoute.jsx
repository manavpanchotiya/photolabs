import PhotoList from "./PhotoList"
import TopNavigation from "./TopNavigationBar"

const HomeRoute = ({ photos, topics, favourites, toggleFavourite, setDisplayModal, setSelectedPhoto}) => {
    return (
        <div className="home-route">
            <TopNavigation topics={topics} favourites={favourites}/>
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