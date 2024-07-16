import './App.css';
import Navbar from './components/Navbar';
import PhotoGallery from './components/PhotoGallery';
import About from './components/About';
import Cover from './components/Cover';
import Footer from './components/Footer';
import Contact from './components/Contact';
import PhotoCollage from './components/PhotoCollage';
import useApplicationData from './hooks/applicationData';
import { applicationContext } from './hooks/applicationContext';

function App() {

  const {state, dispatch} = useApplicationData();

  return (
    <applicationContext.Provider value={{state, dispatch}} >
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
    </applicationContext.Provider>
  );
}

export default App;
