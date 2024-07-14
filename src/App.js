import './App.css';
import Navbar from './components/Navbar';
import PhotoGallery from './components/PhotoGallery';
import About from './components/About';
import Cover from './components/Cover';
import Footer from './components/Footer';
import Contact from './components/Contact';
import PhotoCollage from './components/PhotoCollage';
function App() {
  return (
    <div className="App">
      <main>
        <Navbar/>
        <PhotoGallery/>
        <Cover/>
        <About/>
        <PhotoCollage/>
        <Contact/>
        <Footer/>
      </main>
      
    </div>
  );
}

export default App;
