import React, { useState, useRef, useLayoutEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import SwiperCore, { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import styles from "./carousele.module.css"
import SlideItem from './SlideItem';

import left_arrow from "../../../../assets/left_arrow.png";
import right_arrow from "../../../../assets/right_arrow.png";

SwiperCore.use([EffectCoverflow, Autoplay, Pagination,Navigation]);

const SwiperList = (props) => {

    const swiperRef = useRef(null);
    const [slidesCount, setSlidesCount] = useState("auto");
    const container_ref = useRef(null);

    const carousel_slider_handler = () => {
        if(!props.data)return
        
        const currentWidth = container_ref.current ? container_ref.current.offsetWidth : 1;

        let number_of_slides = 4;
        if(currentWidth >= 1400 && currentWidth <= 1550)number_of_slides = 3.5;
        if(currentWidth >= 1100 && currentWidth <= 1400)number_of_slides = 3;
        if(currentWidth >= 850 && currentWidth <= 1100)number_of_slides = 2.5;
        if(currentWidth >= 650 && currentWidth <= 850)number_of_slides = 2;
        if(currentWidth <= 650 && currentWidth > 450)number_of_slides = 1.5;
        if(currentWidth <= 450) number_of_slides = "auto";
        setSlidesCount(number_of_slides);
    }

    useLayoutEffect(() => {
        carousel_slider_handler();
    });

    window.addEventListener("resize", () => {
        carousel_slider_handler();
    })


    return (
        <div className={styles.container} ref={container_ref}>

            { props.data && props.data.length > 0 &&
                <Swiper
                    ref={swiperRef}
                    effect={'coverflow'}
                    centeredSlides={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 10,
                        depth: 100,
                        modifier: 3.5,
                        slideShadows: false,
                    }}
                    
                    spaceBetween={70}
                    loop
                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                    slidesPerView={slidesCount}
                    initialSlide={1}
                    navigation={{ prevEl: "#arrow_left", nextEl: "#arrow_right" }}
                    watchSlidesProgress
                    className={styles.Swiper}
                >
                    <>
                        { props.data &&
                            props.data.map((place, key) => 
                                {
                                    return (
                                    <SwiperSlide 
                                        key={key} 
                                        style={{ backgroundImage: `url(${place.image})`}}
                                        className={styles.SwiperSlide}
                                    >
                                        {
                                            ({ isActive }) => (
                                                <SlideItem item={place} setType={props.callback} isActive={isActive}/>
                                            )
                                        }
                                        
                                    </SwiperSlide>
                                    
                                    )
                                }
                            )
                        }
                        
                    </>
                </Swiper>
            }
            <button id='arrow_left' className={styles.left_arrow}>
                <img src={left_arrow} alt='left' />
            </button>
            <button id='arrow_right' className={styles.right_arrow}>
                <img src={right_arrow} alt='right' />
            </button>
        </div>
    )
}

export default SwiperList
