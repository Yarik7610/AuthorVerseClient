import { parseDate } from '../../Utils/parseDate'
import { BookRating } from '../BookRating/BookRating'
import { IListBook } from '../BooksList/BooksList'
import { Tape } from '../Tape/Tape'
import s from './BookCover.module.scss'

interface IBookCover {
  book: IListBook
}
export const BookCover: React.FC<IBookCover> = ({ book }) => {
  const parsedDate = parseDate(book.publicationData)

  return (
    <div className={s.wrap}>
      <div className={s.left}>
        <img src={`https://localhost:7069/api/images/${book.bookCoverUrl}`} />
        <div className={s.bookRating}>
          <BookRating rating={book.rating} />
        </div>
        <div className={s.ratingAmount}>
          {book.countRating > 0 ? book.countRating : 'No'} user ratings
        </div>
      </div>
      <div className={s.right}>
        <h2>{book.title ? book.title : 'No title yet'}</h2>
        <div className={s.authorUserName}>{book.author.userName}</div>
        <div
          className={s.date}>{`${parsedDate.monthFull} ${parsedDate.day}, ${parsedDate.year}`}</div>
        <p>{book.description ? book.description : 'No description yet'}</p>
        <div className={s.tapes}>
          <Tape key="tape1" color="purple" date={parsedDate} data={book.tags} />
          <Tape key="tape2" color="pink" data={book.genres} />
        </div>
      </div>
    </div>
  )
}
