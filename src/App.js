import './App.css';
import Navbar from './components/Navbar';
import PhotoGallery from './components/PhotoGallery';
import About from './components/About';
import Cover from './components/Cover';

function App() {
  return (
    <div className="App">
      <main>
        <Navbar/>
        <Cover/>
        <PhotoGallery/>
        <About/>
      </main>
      
    </div>
  );
}

export default App;
