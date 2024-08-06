import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import '../styles/PhotoGallery.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

// import { LazyLoadImage } from 'react-lazy-load-image-component';


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
          className='h-96 w-full rounded-lg'
        >
          {photoSrc.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-48 w-full items-center justify-center'>
                  <img
                    src={image.src}
                    alt={index}
                    className=''
                  />
                  {/* <LazyLoadImage
                    alt={index}
                    width={374}
                    height={400}
                    className='max-h-48 max-w-full object-contain'
                    src={image.src} 
                    effect="blur" /> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </section>
  )
}