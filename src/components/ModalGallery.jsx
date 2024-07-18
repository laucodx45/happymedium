import * as React from 'react';

export default function ModalGallery (props) {

  const photoSrc = props.pic;

  return (
    <div>
      <img src={photoSrc} alt="" />
    </div>
  )
}