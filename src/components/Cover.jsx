import * as React from 'react';
import '../styles/Cover.css';
// import image1 from '../images/Skylar.jpg'
// import image2 from '../images/coffeetable2.jpg'
// import image3 from '../images/woodenbench.jpg'


export default function Cover () {
  return (
    <div className='cover-container'>
      <div className='moto-container'>
        <div style={{
          display: 'flex'
        }}> 
          <p className="lora-unique-700" id='abbrev-brand-name'>HPY MDM</p>
        </div>
        <p className="lora-unique-400">furniture | objects</p>
        <p className="lora-unique-400">made from life, for life.</p>
      </div>
    </div>
  )
}
