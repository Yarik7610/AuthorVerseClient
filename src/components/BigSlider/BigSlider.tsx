// @ts-nocheck
import { memo, useEffect, useRef, useState } from 'react'
import { register } from 'swiper/element/bundle'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import { Preloader } from '../Preloader/Preloader'
import s from './BigSlider.module.scss'
import { BookSlide, ISliderBook } from './BookSlide/BookSlide'
register()

export interface IBigSlider {
  data: Array<ISliderBook>
}
export const BigSlider: React.FC<IBigSlider> = memo(({ data }) => {
  const swiperRef = useRef(null)
  const [swiperProgress, setSwiperProgress] = useState(0)

  useEffect(() => {
    const swiperContainer = swiperRef.current
    const params = {
      pagination: {
        clickable: true
      },
      centeredSlides: true,
      slidesPerView: 'auto',
      injectStyles: [
        `
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
  }, [])

  return (
    <main>
      <div className={s.hlJustify}>
        <div className={s.pseudoBtn}></div>
        <div className={s.hlWrap}>
          <h1>Popular and recommendations</h1>
        </div>
        <div className={s.pseudoBtn}></div>
      </div>
      <div className={s.bigSliderWrap}>
        <button className={s.bigSliderBtn} onClick={() => swiperRef.current.swiper.slidePrev()}>
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
        <swiper-container style={{ width: 'calc(100% - 100px)' }} ref={swiperRef} init="false">
          {data.length > 0 ? (
            data.map((data, i) => (
              <swiper-slide key={i}>
                <BookSlide book={data} />
              </swiper-slide>
            ))
          ) : (
            <Preloader />
          )}
        </swiper-container>

        <button className={s.bigSliderBtn} onClick={() => swiperRef.current.swiper.slideNext()}>
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
      </div>
    </main>
  )
})
