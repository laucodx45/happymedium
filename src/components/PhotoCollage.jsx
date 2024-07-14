import * as React from 'react';
import {images} from '../lib/images'
import '../styles/PhotoCollage.css'


export default function PhotoCollage () {
  return (
    <div className='photoCollage-container'>
      {images.map((photo, index) => (
        <img key={index} src={photo.src} alt={`${index + 1}`} />
      ))}
    </div>
  )
}