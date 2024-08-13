import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import '../styles/PhotoGallery.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade';

export default function PhotoGallery(props) {
  const photoSrc = props.modalPhotos || props.photosArray;

  return (
    <section className='swiper-container'>
      {/* <div className={modalStyle? modalStyle: ''}> */}
        <Swiper
          navigation
          loop={true}
          pagination={{ type: 'bullets' }}
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect={'fade'}
          autoplay={{delay: 3000}}
          onSwiper={swiper => console.log(swiper)}
        >
          {photoSrc.map((image, index) => (
            <SwiperSlide key={index}>
              
                <img
                  src={image.src}
                  alt={index}
                  // height={500}
                  // width={496}
                  loading='lazy'
                  className='photoGallery-img'
                />
              <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      {/* </div> */}
    </section>
  )
}