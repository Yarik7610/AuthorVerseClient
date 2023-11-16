import { useState } from 'react'
import { BookRating } from '../../../components/BookRating/BookRating'
import { SearchBar } from '../../../components/SearchBar/SearchBar'
import s from './ProfileComments.module.scss'

type TComment =
  | {
      type: 'chapter'
      text: string
      date: string
      chapterNumber: number
      chapterName: string
      bookName: string
    }
  | {
      type: 'book'
      text: string
      date: string
      bookName: string
      rating: number
    }

const comments: Array<TComment> = [
  {
    type: 'chapter',
    text: 'LolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldad',
    date: '14 January, 2019',
    chapterNumber: 23,
    chapterName: 'Your new parents',
    bookName: 'Tess of the Road'
  },
  {
    type: 'book',
    text: 'LolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldad',
    date: '14 January, 2019',
    bookName: 'Tess of the Road',
    rating: 4
  }
]

const filters = ['All', 'Chapters', 'Books']

export const ProfileComments = () => {
  const [activeFilter, setActiveFilter] = useState(0)

  const handleFilter = (i: number) => {
    setActiveFilter(i)
  }
  return (
    <div className={s.wrap}>
      <SearchBar
        type={'comment'}
        width={'100%'}
        query={''}
        setQuery={() => {}}
        setPage={() => {}}
      />
      <ul className={s.filters}>
        {filters.map((f, i) => (
          <li
            onClick={() => handleFilter(i)}
            className={`${s.li} ${activeFilter === i ? s.active : ''}`}>
            {f} (19)
          </li>
        ))}
      </ul>
      <ul>
        {comments.map((com, i) => (
          <li className={s.comment} key={i}>
            <h3>
              Comment to {com.type} {com.type === 'book' && <BookRating rating={com.rating} />}
            </h3>
            <span>
              {com.bookName}
              {com.type === 'chapter' && ` - Chapter ${com.chapterNumber}: ${com.chapterName}`}
            </span>
            <div>Sent {com.date}</div>
            <p>{com.text}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
