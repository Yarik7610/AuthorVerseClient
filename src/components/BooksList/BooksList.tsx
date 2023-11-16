import { TStatus } from '../../pages/Books/Books'
import { IAuthor, IGenre, ITag } from '../BigSlider/BookSlide/BookSlide'
import { BookCover } from '../BookCover/BookCover'
import s from './BooksList.module.scss'

export interface IListBook {
  bookId: number
  title: string
  description: string
  author: IAuthor
  genres: Array<IGenre>
  tags: Array<ITag>
  ageRating: number
  countRating: number
  bookCoverUrl: string
  rating: number
  publicationData: string
}
interface IBooksList {
  books: Array<IListBook>
  status: TStatus
}

export const BooksList: React.FC<IBooksList> = ({ books, status }) => {
  return (
    <div className={s.wrap}>
      {books.length > 0 && status === 'fulfilled' ? (
        <ul>
          {books.map((book, i) => (
            <BookCover book={book} key={i} />
          ))}
        </ul>
      ) : (
        <h2 className={s.hl}>No such books yet</h2>
      )}
    </div>
  )
}
