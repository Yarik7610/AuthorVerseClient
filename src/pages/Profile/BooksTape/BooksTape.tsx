import { BookSkeleton } from '../../../components/BookSkeleton/BookSkeleton'
import img from '../../../images/download.jpg'
import s from './BooksTape.module.scss'

export const BooksTape = () => {
  return (
    <div className={s.updatesBlock}>
      <h1 className={s.hl}>Updates to your feed</h1>
      <ul className={s.booksList}>
        <li className={s.imgWrap}>
          <BookSkeleton />
          {/* <img src={img} />
          <div className={s.chapter}>Chapter 35 - Continues</div>
          <h3>Book name</h3> */}
        </li>
        <li className={s.imgWrap}>
          <img src={img} />
          <div className={s.chapter}>Chapter 35 - Continues</div>
          <h3 className={s.bookName}>Book name</h3>
        </li>
        <li className={s.imgWrap}>
          <img src={img} />
          <div className={s.chapter}>Chapter 35 - Continues</div>
          <h3 className={s.bookName}>Book name</h3>
        </li>
        <li className={s.imgWrap}>
          <img src={img} />
          <div className={s.chapter}>Chapter 35 - Continues</div>
          <h3 className={s.bookName}>Book name</h3>
        </li>
      </ul>
    </div>
  )
}
