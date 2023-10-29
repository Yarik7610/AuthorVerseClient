// @ts-nocheck
import { useEffect, useRef, useState } from 'react'
import { register } from 'swiper/element/bundle'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import { useWindowSize } from '../../Hooks/useWindowSize'
import { IBook } from '../../pages/Main/SecondMain/SecondMain'
import { BookSkeleton } from '../BookSkeleton/BookSkeleton'
import { SliderCard } from './SliderCard/SliderCard'
register()

interface ISlider {
  images: Array<IBook>
}
export const Slider: React.FC<ISlider> = ({ images }) => {
  const windowSize = useWindowSize()
  const swiperRef = useRef(null)
  const [swiperProgress, setSwiperProgress] = useState(0)

  useEffect(() => {
    const swiperContainer = swiperRef.current
    const params = {
      spaceBetween: '60',
      pagination: {
        clickable: true
      },
      centeredSlides: windowSize.width < 500 ? true : false,
      slidesPerView: 'auto',
      injectStyles: [
        `
            .swiper-wrapper {
              max-width: 170px;
              height: 300px;
            }
            .swiper-pagination-bullet {
              transform: scale(1.5);
              margin: 0 10px !important;
              background-color: #614ED9;
            }
            .swiper-button-next,
            .swiper-button-prev {
              color: #614ED9;
            }
        `
      ]
    }
    Object.assign(swiperContainer, params)
    swiperContainer.initialize()

    swiperRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail
      setSwiperProgress(progress)
    })
  }, [windowSize.width])

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: '72rem' }}>
        {windowSize.width < 2400 && (
          <button onClick={() => swiperRef.current.swiper.slidePrev()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill={swiperProgress === 0 ? '#614ED980' : '#614ED9'}
              viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </button>
        )}
        <swiper-container style={{ width: '100%' }} ref={swiperRef} init="false">
          {images.length > 0
            ? images.map((image) => (
                <swiper-slide key={image.bookId}>
                  <SliderCard img={image} />
                </swiper-slide>
              ))
            : [...new Array(5).fill(0)].map((el, index) => {
                return (
                  <swiper-slide key={index}>
                    <BookSkeleton />
                  </swiper-slide>
                )
              })}
        </swiper-container>
        {windowSize.width < 2400 && (
          <button onClick={() => swiperRef.current.swiper.slideNext()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill={swiperProgress >= 1 ? '#614ED980' : '#614ED9'}
              viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        )}
      </div>
    </main>
  )
}
