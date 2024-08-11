import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import '../styles/PhotoGallery.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'


export default function PhotoModalGallery(props) {
  const photoSrc = props.modalPhotos || props.photosArray;

  // const {dispatch} = useContext(applicationContext);
  // const onLoadAction = () => dispatch({type: 'setModalLoadingStatus', payload: false})
 
  return (
    <section onload={() => {console.log('loaded');
    }} className='swiper-container'>
        <Swiper
          navigation
          loop={true}
          pagination={{ type: 'bullets' }}
          modules={[Navigation, Pagination, Autoplay]}
          onSwiper={swiper => console.log(swiper)}
          // className='h-96 w-full rounded-lg'
        >
          {photoSrc.map((image, index) => (
            <SwiperSlide key={index}>
                  <img
                    src={image.src}
                    alt={index}
                    className=''
                    loading="lazy"
                    style={{backgroundColor:'#A69080'}}
                    width={496}
                    height={620}
                  />
                  <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide>
          ))}
        </Swiper>
    </section>
  )
}