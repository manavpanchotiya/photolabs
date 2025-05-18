import PhotoList from "./PhotoList"
import TopNavigation from "./TopNavigationBar"

const HomeRoute = ({ photos, topics, favourites, toggleFavourite, setDisplayModal }) => {
    return (
        <div className="home-route">
            <TopNavigation topics={topics} favourites={favourites}/>
            <PhotoList 
            photos={photos} 
            favourites={favourites}
            toggleFavourite={toggleFavourite}
            setDisplayModal={setDisplayModal}/>
        </div>
    );
};

export default HomeRoute;