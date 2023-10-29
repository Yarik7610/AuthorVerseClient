import { BookRating } from '../../BookRating/BookRating'
import { RedirectBtn } from '../../RedirectBtn/RedirectBtn'
import s from './BookSlide.module.scss'

export const BookSlide = () => {
  return (
    <div className={s.bigSlider}>
      <h1 className={s.hl}>Popular and recommendations</h1>
      <div className={s.wrap}>
        <div className={s.content}>
          <div className={s.left}>
            <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D"></img>
          </div>
          <div className={s.right}>
            <h2>Tess of the Road Hardcover</h2>
            <div>
              <div>A B 0rdcover</div>
              <div>February 27, 2018</div>
            </div>
            <p className={s.desc}>
              Tess of the Road is astonishing and perfect. It's the most compassionate book I've
              read since George Eliot's Middlemarch
            </p>
            <div className={s.tags}>
              <ul>
                <li>
                  <RedirectBtn color="black" text={'New'} />
                </li>
                <li>
                  <RedirectBtn color="pink" text={'Mystery'} />
                </li>
                <li>
                  <RedirectBtn text={'Audiobooks'} />
                </li>
                <li>
                  <RedirectBtn text={'Books'} />
                </li>
                <li>
                  <RedirectBtn text={'Books'} />
                </li>
                <li>
                  <RedirectBtn text={'Books'} />
                </li>
                <li>
                  <RedirectBtn text={'Books'} />
                </li>
                <li>
                  <RedirectBtn text={'Books'} />
                </li>
              </ul>
            </div>
            <BookRating rating={3.1} />
            <div className={s.endings}>
              <span>Endings: 3</span>
              <span>Choices: 125</span>
            </div>
          </div>
        </div>

        {/* <Slider images={[]} /> */}
      </div>
    </div>
  )
}
