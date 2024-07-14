import './App.css';
import Navbar from './components/Navbar';
import PhotoGallery from './components/PhotoGallery';
import About from './components/About';
import Cover from './components/Cover';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <main>
        <Navbar/>
        <PhotoGallery/>
        <Cover/>
        <About/>
        <Footer/>
      </main>
      
    </div>
  );
}

export default App;
