import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import '../styles/PhotoGallery.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { applicationContext } from '../hooks/applicationContext'
import { useContext } from 'react'

export default function PhotoGallery(props) {
  const photoSrc = props.modalPhotos || props.photosArray;
  const {state} = useContext(applicationContext);

  return (
    <section className='swiper-container'>
      {/* <div className={modalStyle? modalStyle: ''}> */}
        <Swiper
          navigation
          pagination={{ type: 'fraction' }}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={!state.modal? {delay: 3000}: ''}
          onSwiper={swiper => console.log(swiper)}
          className='h-96 w-full rounded-lg'
        >
          {photoSrc.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-48 w-full items-center justify-center'>
                <img
                  src={image.src}
                  alt={index}
                  className='max-h-48 max-w-full object-contain'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      {/* </div> */}
    </section>
  )
}