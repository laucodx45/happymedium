import './App.css';
import Navbar from './components/Navbar';
import PhotoGallery from './components/PhotoGallery';
import About from './components/About';
import Cover from './components/Cover';
import Footer from './components/Footer';
import PhotoCollage from './components/PhotoCollage';
import Contact from './components/Contact';
import useApplicationData from './hooks/applicationData';
import { applicationContext } from './hooks/applicationContext';
import PhotoDetailsModal from './components/Modal';
import {newImageData} from './lib/images'
import { ContactUs } from './components/ContactForm';

function App() {

  const {state, dispatch} = useApplicationData();
  
  return (
    <applicationContext.Provider value={{state, dispatch}} >
      <div className="App">
        <main>
          <Navbar/>
          <PhotoGallery photosArray={newImageData}/>
          <Cover/>
          <About/>
          <PhotoCollage/>
          {state.modal && <PhotoDetailsModal/>}
          <ContactUs/>
          <Contact/>
          <Footer/>
        </main>   
      </div>
    </applicationContext.Provider>
  );
}

export default App;
