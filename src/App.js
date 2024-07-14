import './App.css';
import Navbar from './components/Navbar';
import PhotoGallery from './components/PhotoGallery';
import About from './components/About';
import Cover from './components/Cover';
import Footer from './components/Footer';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <main>
        <Navbar/>
        <PhotoGallery/>
        <Cover/>
        <About/>
        <Contact/>
        <Footer/>
      </main>
      
    </div>
  );
}

export default App;
