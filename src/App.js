import './App.css';
import Navbar from './components/Navbar';
import PhotoGallery from './components/PhotoGallery';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <PhotoGallery/>
        <About/>
      </main>
      
    </div>
  );
}

export default App;
