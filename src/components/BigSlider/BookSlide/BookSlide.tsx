import { parseDate } from '../../../Utils/parseDate'
import { BookRating } from '../../BookRating/BookRating'
import { Tape } from '../../Tape/Tape'
import s from './BookSlide.module.scss'

export interface IGenre {
  genreId: number
  name: string
}
export interface ITag {
  tagId: number
  name: string
}
export interface IAuthor {
  id: string
  userName: string
}
export interface ISliderBook {
  bookId: number
  title: string
  description: string
  author: IAuthor
  genres: Array<IGenre>
  tags: Array<ITag>
  rating: number
  endings: number
  choices: number
  bookCoverUrl: string
  publicationData: string
}
export interface IBookSlide {
  book: ISliderBook
}

export const BookSlide: React.FC<IBookSlide> = ({ book }) => {
  const parsedDate = parseDate(book.publicationData)

  return (
    <div className={s.slide}>
      <div className={s.wrap}>
        <div className={s.content}>
          <div className={s.left}>
            <img src={`https://localhost:7069/api/images/${book.bookCoverUrl}`}></img>
          </div>
          <div className={s.right}>
            <h2>{book.title ? book.title : 'No title yet'}</h2>
            <div>
              <div>{book.author.userName}</div>
              <div>{`${parsedDate.monthFull} ${parsedDate.day}, ${parsedDate.year}`}</div>
            </div>
            <p className={s.desc}>{book.description ? book.description : 'No description yet'}</p>
            <Tape data={book.tags} date={parsedDate} color="purple" />
            <Tape data={book.genres} color="pink" />
            <div className={s.bookRating}>
              <BookRating rating={book.rating} />
            </div>
            <div className={s.endings}>
              <span>{`Endings: ${book.endings}`}</span>
              <span>{`Choices: ${book.choices}`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
