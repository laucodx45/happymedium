import './App.css';
import Navbar from './components/Navbar';
import PhotoGallery from './components/PhotoGallery';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <PhotoGallery/>
      </main>
      
    </div>
  );
}

export default App;
