import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import '../styles/PhotoGallery.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function PhotoGallery(props) {
  const photoSrc = props.modalPhotos || props.photosArray;
  // looks like the src is expecting object but the modalPhoto is just an array

  return (
    <section className='swiper-container'>
        <Swiper
          navigation
          pagination={{ type: 'fraction' }}
          modules={[Navigation, Pagination]}
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
    </section>
  )
}