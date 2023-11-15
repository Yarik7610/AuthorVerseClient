import { NavLink } from 'react-router-dom'
import { IBook } from '../../../pages/Main/SecondMain/SecondMain'
import s from './SliderCard.module.scss'

interface ISliderCard {
  img: IBook
}
export const SliderCard: React.FC<ISliderCard> = ({ img }) => {
  return (
    <NavLink to={`/${img.bookId}`}>
      <div className={s.sliderCard}>
        <img src={'https://localhost:7069/api/images/' + img.bookCoverUrl} alt={img.bookCoverUrl} />
      </div>
    </NavLink>
  )
}
