import axios from 'axios'
import { useEffect, useState } from 'react'
import { BigSlider } from '../../components/BigSlider/BigSlider'
import { IGenre, ISliderBook, ITag } from '../../components/BigSlider/BookSlide/BookSlide'
import { BooksList, IListBook } from '../../components/BooksList/BooksList'
import { CollapseMenu } from '../../components/CollapseMenu/CollapseMenu'
import { Pagination } from '../../components/Pagination/Pagination'
import { Preloader } from '../../components/Preloader/Preloader'
import { SearchBar } from '../../components/SearchBar/SearchBar'

export interface IFilters {
  activeTag: number
  activeGenre: number
}
export type TStatus = 'pending' | 'fulfilled' | 'rejected'

export const Books = () => {
  const [sliderData, setSliderData] = useState<Array<ISliderBook>>([])
  const [booksData, setBooksData] = useState<Array<IListBook>>([])
  const [query, setQuery] = useState<string>('')
  const [tags, setTags] = useState<Array<ITag>>([])
  const [genres, setGenres] = useState<Array<IGenre>>([])
  const [filters, setFilters] = useState<IFilters>({ activeTag: 0, activeGenre: 0 })
  const [page, setPage] = useState(1)
  const [booksCount, setBooksCount] = useState(0)
  const [status, setStatus] = useState<TStatus>('pending')

  useEffect(() => {
    const fetchBooksCovers = async () => {
      const response = await axios.get(
        `https://localhost:7069/api/Book/SearchBy?tagId=${filters.activeTag}&genreId=${
          filters.activeGenre
        }&page=${page}&searchText=${query.toUpperCase()}`
      )
      setBooksData(response.data.books)
      if (response.data.books.length > 0) {
        response.data.booksCount && setBooksCount(response.data.booksCount)
      } else setBooksCount(0)
      setStatus('fulfilled')
    }
    fetchBooksCovers().catch(() => {
      console.error()
      setStatus('rejected')
    })
  }, [page, query, filters])

  useEffect(() => {
    const fetchBookSlides = async () => {
      const response = await axios.get('https://localhost:7069/api/Book/MainPopularBooks')
      setSliderData(response.data)
    }
    fetchBookSlides().catch(console.error)
  }, [])

  useEffect(() => {
    const fetchTags = async () => {
      const response = await axios.get('https://localhost:7069/api/Tag')
      setTags([{ tagId: 0, name: 'All' }, ...response.data])
    }
    fetchTags().catch(console.error)
  }, [])

  useEffect(() => {
    const fetchGenres = async () => {
      const response = await axios.get('https://localhost:7069/api/Genre')
      setGenres([{ genreId: 0, name: 'All' }, ...response.data])
    }
    fetchGenres().catch(console.error)
  }, [])

  return (
    <>
      <BigSlider data={sliderData} />
      <SearchBar query={query} setQuery={setQuery} setPage={setPage} />
      <CollapseMenu
        name="Tags"
        color="purple"
        filters={filters}
        setFilters={setFilters}
        setPage={setPage}
        data={tags}
      />
      <CollapseMenu
        name="Genres"
        color="pink"
        filters={filters}
        setFilters={setFilters}
        setPage={setPage}
        data={genres}
      />
      {status === 'pending' || status === 'rejected' ? (
        <Preloader />
      ) : (
        <BooksList status={status} books={booksData} />
      )}
      <Pagination
        booksCount={booksCount}
        currentPage={page}
        onPageClick={(number) => setPage(number)}
      />
    </>
  )
}
