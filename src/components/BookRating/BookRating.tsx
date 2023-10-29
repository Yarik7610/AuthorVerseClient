import * as React from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import s from './BookRating.module.scss'

export interface IBookRaiting {
  rating: number
}

export const BookRating: React.FC<IBookRaiting> = ({ rating }) => {
  let checkedRating = rating
  if (rating < 0 || rating > 5) checkedRating = 0
  let truncedLeft = Math.trunc(checkedRating)
  let half = Math.ceil(checkedRating)
  let truncedRight = truncedLeft !== half ? 5 - half : 5 - truncedLeft

  return (
    <div className={s.wrapper}>
      {[...new Array(truncedLeft)].map((_, index) => (
        <BsStarFill color={'#F2CEF2'} key={index} />
      ))}
      {truncedLeft !== half && <BsStarHalf color={'#F2CEF2'} />}
      {[...new Array(truncedRight)].map((_, index) => (
        <BsStar color={'#F2CEF2'} key={index} />
      ))}
    </div>
  )
}
