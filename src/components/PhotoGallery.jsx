import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import '../styles/PhotoGallery.css'
import {newImageData} from '../lib/images'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function PhotoGallery() {
  return (
    <section className='swiper-container'>
      <div className=''>
        <Swiper
          navigation
          pagination={{ type: 'fraction' }}
          modules={[Navigation, Pagination]}
          onSwiper={swiper => console.log(swiper)}
          className='h-96 w-full rounded-lg'
        >
          {newImageData.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-48 w-full items-center justify-center'>
                <img
                  src={image.src}
                  alt={image.alt}
                  className='max-h-48 max-w-full object-contain'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}