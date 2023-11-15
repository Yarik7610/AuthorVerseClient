import { useState } from 'react'
import { FaSortAmountDown, FaSortAmountDownAlt } from 'react-icons/fa'
import { AddedBooksSkeleton } from '../../../components/AddedBooksSkeleton/AddedBooksSkeleton'
import { SearchBar } from '../../../components/SearchBar/SearchBar'
import s from './ProfileBooks.module.scss'

const categories = ['All', 'Planned', 'Abandoned', 'Reading', 'Finished', 'Favourites']
const sorts = ['Title', 'Date']

export const ProfileBooks = () => {
  const [category, setCategory] = useState(0)
  const [sortType, setSortType] = useState(0)
  const [isAsc, setIsAsc] = useState(true)

  const handleCategory = (i: number) => {
    if (category !== i) setCategory(i)
  }
  const handleSortType = (i: number) => {
    if (sortType !== i) setSortType(i)
  }
  const handleIsAsc = (val: boolean) => {
    if (isAsc !== val) setIsAsc(val)
  }

  return (
    <div className={s.grid}>
      <nav className={s.nav}>
        <ul className={`${s.navBlock} ${s.categories}`}>
          <h3>Categories:</h3>
          {categories.map((c, i) => (
            <li
              key={i}
              className={`${s.li} ${category === i ? s.active : ''}`}
              onClick={() => handleCategory(i)}>
              {c} (3)
            </li>
          ))}
        </ul>
        <ul className={`${s.navBlock} ${s.sort}`}>
          <h3>Sort by:</h3>
          {sorts.map((elem, i) => (
            <li
              key={i}
              className={`${s.li} ${i === sortType ? s.active : ''}`}
              onClick={() => handleSortType(i)}>
              {elem}
            </li>
          ))}
          <div className={s.acsDesc}>
            <FaSortAmountDownAlt
              size={'1.25rem'}
              className={`${s.svg} ${isAsc ? s.active : ''} `}
              onClick={() => handleIsAsc(true)}
            />
            <FaSortAmountDown
              size={'1.25rem'}
              className={`${s.svg} ${!isAsc ? s.active : ''}`}
              onClick={() => handleIsAsc(false)}
            />
          </div>
        </ul>
      </nav>
      <main className={s.main}>
        <SearchBar query="" setQuery={() => {}} setPage={() => {}} width="100%" />
        <div className={s.booksWrap}>
          {/* <div className={s.book}>
            <img src={img} alt="profile image" />
            <div className={s.right}>
              <div>
                <h2>Tess of the Road</h2>
                <div>Added 13 May, 2023</div>
                <div>Finished</div>
              </div>
              <div className={s.chapters}>
                <h4>Last chapter: 20</h4>
                <div className={s.continueBtn}>Continue (14)</div>
              </div>
            </div>
          </div> */}
          {new Array(4).fill(null).map((elem, i) => (
            <div key={i} className={s.preloaderWrap}>
              <AddedBooksSkeleton />
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
