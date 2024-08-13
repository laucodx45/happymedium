import './App.css';
import Navbar from './components/Navbar';
import PhotoGallery from './components/PhotoGallery';
import About from './components/About';
import Cover from './components/Cover';
import Footer from './components/Footer';
import PhotoCollage from './components/PhotoCollage';
import useApplicationData from './hooks/applicationData';
import { applicationContext } from './hooks/applicationContext';
import PhotoDetailsModal from './components/Modal';
import {newImageData} from './lib/images'
import { ContactUs } from './components/ContactForm';
import SubmissionMsgModal from './components/SubmissionStatusModal';
import skylar from '../src/images/woodenbench.jpg'

function App() {

  const {state, dispatch} = useApplicationData();
  
  return (
    <applicationContext.Provider value={{state, dispatch}} >
      <div className="App">
        <main>
          <Navbar/>
          <div className='desktop-container1'>
            <PhotoGallery photosArray={newImageData}/>
            <Cover/>
          </div>
          <div  id='About-section' className='desktop-container2'>
            <About />
            <div className='about-photos'>
              <img id='about-img' src={skylar} alt='skylar building furnitures' />
            </div>
          </div>
          <div>
          </div>
          <PhotoCollage />
          {state.modal && <PhotoDetailsModal/>}
          <SubmissionMsgModal/>
          <ContactUs />
          {/* <Contact/> */}
          <Footer/>
          {/* <FooterExample /> */}
        </main>   
      </div>
    </applicationContext.Provider>
  );
}

export default App;
