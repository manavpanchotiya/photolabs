import PhotoList from "./PhotoList"
import TopNavigation from "./TopNavigationBar"

const HomeRoute = () => {
    return (
        <div className="home-route">
            <TopNavigation/>
            <PhotoList/>
        </div>
    );
};

export default HomeRoute;