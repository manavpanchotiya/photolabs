import PhotoList from "./PhotoList"
import TopNavigation from "./TopNavigationBar"

const HomeRoute = ({ photos, topics, favourites, toggleFavourite }) => {
    return (
        <div className="home-route">
            <TopNavigation topics={topics}/>
            <PhotoList photos={photos} favourites={favourites}
        toggleFavourite={toggleFavourite}/>
        </div>
    );
};

export default HomeRoute;