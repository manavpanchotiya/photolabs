import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: 1,
  location: {
    city: "Montreal",
    country: "Canada",
  },
  urls: {
    full: "/Image-1-Full.jpeg",
    regular: "/Image-1-Regular.jpeg",
  },
  user: {
    username: "exampleuser",
    name: "Joe Example",
    profile: "/profile-1.jpg",
  },
};

const photos = new Array(3).fill(sampleDataForPhotoListItem);

const App = () => {
  return (
    <div className="App">
      {photos.map((photo, index) => (
        <PhotoListItem key={index} photo={photo} />
      ))}
    </div>
  );
};
export default App;
