import { useState } from 'react'
import { BsStarFill } from 'react-icons/bs'
import { parseDate } from '../../../Utils/parseDate'
import { FullDate } from '../../../components/FullDate/FullDate'
import { Pagination } from '../../../components/Pagination/Pagination'
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
    date: '2023-11-19',
    chapterNumber: 23,
    chapterName: 'Your new parents',
    bookName: 'Tess of the Road'
  },
  {
    type: 'book',
    text: 'LolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldadLolololdadladladladladlaldaldad',
    date: '2023-11-19',
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
            key={i}
            onClick={() => handleFilter(i)}
            className={`${s.li} ${activeFilter === i ? s.active : ''}`}>
            {f} (19)
          </li>
        ))}
      </ul>
      <ul className={s.comments}>
        {comments.map((com, i) => {
          const parsedDate = parseDate(com.date)

          return (
            <li className={s.comment} key={i}>
              <h3 className={s.header}>
                <div>
                  Comment to {com.type}{' '}
                  {com.type === 'book' && (
                    <span className={s.ratingWrap}>
                      <BsStarFill color={'#F2CEF2'} />
                      {com.rating}
                    </span>
                  )}
                </div>
                <FullDate parsedDate={parsedDate} additionalText="Sent" />
              </h3>
              <span className={s.bookTitle}>
                {com.bookName}
                {com.type === 'chapter' && ` - Chapter ${com.chapterNumber}: ${com.chapterName}`}
              </span>
              <p>{com.text}</p>
            </li>
          )
        })}
      </ul>
      <Pagination count={20} currentPage={0} onPageClick={() => {}} />
    </div>
  )
}
