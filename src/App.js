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
import PhotoDetailsModal from './components/Modal';
import {newImageData} from './lib/images'

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
          <Contact/>
          <Footer/>
        </main>   
      </div>
    </applicationContext.Provider>
  );
}

export default App;
