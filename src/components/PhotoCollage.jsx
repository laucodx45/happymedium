import * as React from 'react';
import { newImageData} from '../lib/images'
import '../styles/PhotoCollage.css'
import { useContext } from 'react';
import { applicationContext } from '../hooks/applicationContext';

export default function PhotoCollage () {

  const { dispatch} = useContext(applicationContext);
  const toggleModal = (photoId) => {
    dispatch({type: 'toggleModal'})
    dispatch({type: 'setPhotoId', payload: photoId})
  }
  
  return (
    
    <div className='photoCollage-container' id='PreviousWork-section'>
      {newImageData.map((photo, index) => (
        <img onClick={
          () => {
            toggleModal(photo.id)
          }
        } key={index} src={photo.src} alt={`${index + 1}`} />
      ))}
    </div>
  )
}