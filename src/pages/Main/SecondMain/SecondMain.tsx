import axios from 'axios'
import { useEffect, useState } from 'react'
import { RedirectBtn } from '../../../components/RedirectBtn/RedirectBtn'
import { Slider } from '../../../components/Slider/Slider'
import s from './SecondMain.module.scss'

export interface IBook {
  bookId: number
  bookCoverUrl: string
}
const SlidersMain = () => {
  const [images, setImages] = useState<Array<IBook>>([])

  useEffect(() => {
    const fetchImagesMain = async () => {
      const response = await axios.get('https://localhost:7069/api/Book/Popular')
      setImages(response.data)
    }
    fetchImagesMain().catch(console.error)
  }, [])

  return (
    <div className={s.sliders}>
      <div>
        <h1>Explore your tastes</h1>
        <div>
          with <strong>Most</strong> read books
        </div>
        <Slider images={images.slice(0, 5)} />
      </div>
      <div>
        <h1>Continue your jorney</h1>
        <div>
          with <strong>Popular</strong> novelties
        </div>
        <Slider images={images.slice(5, 10)} />
      </div>
    </div>
  )
}

export const SecondMain = () => {
  return (
    <section className={s.second}>
      <SlidersMain />
      <div className={s.right}>
        <h1 className={s.hl}>Open the door to a new world</h1>
        <p className={s.par}>
          You will find a huge and captivating catalog of books. We offer a wide selection of
          literature, from classic works to modern bestsellers. Regardless of your taste and
          interests, we have books for all age groups and genre preferences. Don't miss the
          opportunity to dive into captivating stories, broaden your horizons, and enjoy the world
          of words. Move to the next page and open the door to a new world of literature.
        </p>
        <div className={s.btnWrap}>
          <RedirectBtn to="books" text="See more" length="50" />
        </div>
      </div>
    </section>
  )
}
