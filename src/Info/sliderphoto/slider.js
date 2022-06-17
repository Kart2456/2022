import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import MediaQuery from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';
import Img from './img/1.jpg';
import Img1 from './img/2.jpg';
import Img2 from './img/3.jpg';
import Img3 from './img/4.jpg';
import Img4 from './img/5.jpg';
import Img5 from './img/6.jpg';
import Img6 from './img/7.jpg';
import Img7 from './img/8.jpg';
import Img8 from './img/9.jpg';
import Img9 from './img/10.jpg';
import Img10 from './img/11.jpg';
import Img11 from './img/12.jpg';


const styles = {
  forphoto: {
    height: '300px',
    width: '400px',
    borderRadius: '10px',
    objectFit: 'cover',
    objectPosition: '0 10'
  }
}

const stylesmin = {
  forphoto: {
    height: '300px',
    width: '500px',
    borderRadius: '10px',
    objectFit: 'cover',
    objectPosition: '0 10',
    borderRadius: '10px'
  },

  photosize: {
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    margin: 0,
    width: '80%',
  }
}

const stylessr = {
  forphoto: {
    height: '500px',
    width: '800px',
    borderRadius: '10px',
    objectFit: 'cover',
    objectPosition: '0 10',
    borderRadius: '10px'
  },

  photosize: {
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    margin: 0,
    height: '350px',
    width: '600px',
    objectFit: 'cover',
    objectPosition: '0 10',
  }
}
export default () => {
  return (
    <div>
      <MediaQuery minWidth={1707} maxWidth={10000}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          Mousewheel={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide><img style={styles.forphoto} src={Img} /></SwiperSlide>
          <SwiperSlide><img style={styles.forphoto} src={Img1} /></SwiperSlide>
          <SwiperSlide><img style={styles.forphoto} src={Img2} /></SwiperSlide>
          <SwiperSlide><img style={styles.forphoto} src={Img3} /></SwiperSlide>
          <SwiperSlide><img style={styles.forphoto} src={Img4} /></SwiperSlide>
          <SwiperSlide><img style={styles.forphoto} src={Img5} /></SwiperSlide>
          <SwiperSlide><img style={styles.forphoto} src={Img6} /></SwiperSlide>
          <SwiperSlide><img style={styles.forphoto} src={Img7} /></SwiperSlide>
          <SwiperSlide><img style={styles.forphoto} src={Img8} /></SwiperSlide>
          <SwiperSlide><img style={styles.forphoto} src={Img9} /></SwiperSlide>
          <SwiperSlide><img style={styles.forphoto} src={Img10} /></SwiperSlide>
          <SwiperSlide><img style={styles.forphoto} src={Img11} /></SwiperSlide>
        </Swiper>
      </MediaQuery>
      <MediaQuery minWidth={0} maxWidth={674}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          Mousewheel={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide><img style={stylesmin.photosize} src={Img} /></SwiperSlide>
          <SwiperSlide><img style={stylesmin.photosize} src={Img1} /></SwiperSlide>
          <SwiperSlide><img style={stylesmin.photosize} src={Img2} /></SwiperSlide>
          <SwiperSlide><img style={stylesmin.photosize} src={Img3} /></SwiperSlide>
          <SwiperSlide><img style={stylesmin.photosize} src={Img4} /></SwiperSlide>
          <SwiperSlide><img style={stylesmin.photosize} src={Img5} /></SwiperSlide>
          <SwiperSlide><img style={stylesmin.photosize} src={Img6} /></SwiperSlide>
          <SwiperSlide><img style={stylesmin.photosize} src={Img7} /></SwiperSlide>
          <SwiperSlide><img style={stylesmin.photosize} src={Img8} /></SwiperSlide>
          <SwiperSlide><img style={stylesmin.photosize} src={Img9} /></SwiperSlide>
          <SwiperSlide><img style={stylesmin.photosize} src={Img10} /></SwiperSlide>
          <SwiperSlide><img style={stylesmin.photosize} src={Img11} /></SwiperSlide>
        </Swiper>
      </MediaQuery>
      <MediaQuery minWidth={675} maxWidth={1707}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          Mousewheel={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide><img style={stylessr.photosize} src={Img} /></SwiperSlide>
          <SwiperSlide><img style={stylessr.photosize} src={Img1} /></SwiperSlide>
          <SwiperSlide><img style={stylessr.photosize} src={Img2} /></SwiperSlide>
          <SwiperSlide><img style={stylessr.photosize} src={Img3} /></SwiperSlide>
          <SwiperSlide><img style={stylessr.photosize} src={Img4} /></SwiperSlide>
          <SwiperSlide><img style={stylessr.photosize} src={Img5} /></SwiperSlide>
          <SwiperSlide><img style={stylessr.photosize} src={Img6} /></SwiperSlide>
          <SwiperSlide><img style={stylessr.photosize} src={Img7} /></SwiperSlide>
          <SwiperSlide><img style={stylessr.photosize} src={Img8} /></SwiperSlide>
          <SwiperSlide><img style={stylessr.photosize} src={Img9} /></SwiperSlide>
          <SwiperSlide><img style={stylessr.photosize} src={Img10} /></SwiperSlide>
          <SwiperSlide><img style={stylessr.photosize} src={Img11} /></SwiperSlide>
        </Swiper>
      </MediaQuery>
    </div>
  );
};
