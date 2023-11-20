import { useState } from 'react'
import { FaSortAmountDown, FaSortAmountDownAlt } from 'react-icons/fa'
import { parseDate } from '../../../Utils/parseDate'
import { FullDate } from '../../../components/FullDate/FullDate'
import { SearchBar } from '../../../components/SearchBar/SearchBar'
import img from '../../../images/download.jpg'
import s from './ProfileBooks.module.scss'

const categories = ['All', 'Planned', 'Abandoned', 'Reading', 'Finished', 'Favourites']
const sorts = ['Title', 'Date']

export const ProfileBooks = () => {
  const [category, setCategory] = useState(0)
  const [sortType, setSortType] = useState(0)
  const [isAsc, setIsAsc] = useState(true)

  const parsedDate = parseDate('2023-11-19')

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
        <SearchBar type="book" query="" setQuery={() => {}} setPage={() => {}} width="100%" />
        <div className={s.booksWrap}>
          <div className={s.book}>
            <img src={img} alt="book image" />
            <div className={s.right}>
              <div>
                <h2>Tess of the Road</h2>
                <FullDate parsedDate={parsedDate} additionalText="Added" />
                <div>Finished</div>
              </div>
              <div className={s.chapters}>
                <h4>Last chapter: 20</h4>
                <div className={s.continueBtn}>Continue (14)</div>
              </div>
            </div>
          </div>
          <div className={s.book}>
            <img src={img} alt="book image" />
            <div className={s.right}>
              <div>
                <h2>Tess of the Road</h2>
                <FullDate parsedDate={parsedDate} additionalText="Added" />
                <div>Finished</div>
              </div>
              <div className={s.chapters}>
                <h4>Last chapter: 20</h4>
                <div className={s.continueBtn}>Continue (14)</div>
              </div>
            </div>
          </div>
          <div className={s.book}>
            <img src={img} alt="book image" />
            <div className={s.right}>
              <div>
                <h2>Tess of the Road</h2>
                <FullDate parsedDate={parsedDate} additionalText="Added" />
                <div>Finished</div>
              </div>
              <div className={s.chapters}>
                <h4>Last chapter: 20</h4>
                <div className={s.continueBtn}>Continue (14)</div>
              </div>
            </div>
          </div>
          <div className={s.book}>
            <img src={img} alt="book image" />
            <div className={s.right}>
              <div>
                <h2>Tess of the Road</h2>
                <FullDate parsedDate={parsedDate} additionalText="Added" />
                <div>Finished</div>
              </div>
              <div className={s.chapters}>
                <h4>Last chapter: 20</h4>
                <div className={s.continueBtn}>Continue (14)</div>
              </div>
            </div>
          </div>
          <div className={s.book}>
            <img src={img} alt="book image" />
            <div className={s.right}>
              <div>
                <h2>Tess of the Road</h2>
                <FullDate parsedDate={parsedDate} additionalText="Added" />
                <div>Finished</div>
              </div>
              <div className={s.chapters}>
                <h4>Last chapter: 20</h4>
                <div className={s.continueBtn}>Continue (14)</div>
              </div>
            </div>
          </div>
          <div className={s.book}>
            <img src={img} alt="book image" />
            <div className={s.right}>
              <div>
                <h2>Tess of the Road</h2>
                <FullDate parsedDate={parsedDate} additionalText="Added" />
                <div>Finished</div>
              </div>
              <div className={s.chapters}>
                <h4>Last chapter: 20</h4>
                <div className={s.continueBtn}>Continue (14)</div>
              </div>
            </div>
          </div>
          <div className={s.book}>
            <img src={img} alt="book image" />
            <div className={s.right}>
              <div>
                <h2>Tess of the Road</h2>
                <FullDate parsedDate={parsedDate} additionalText="Added" />
                <div>Finished</div>
              </div>
              <div className={s.chapters}>
                <h4>Last chapter: 20</h4>
                <div className={s.continueBtn}>Continue (14)</div>
              </div>
            </div>
          </div>
          <div className={s.book}>
            <img src={img} alt="book image" />
            <div className={s.right}>
              <div>
                <h2>Tess of the Road</h2>
                <FullDate parsedDate={parsedDate} additionalText="Added" />
                <div>Finished</div>
              </div>
              <div className={s.chapters}>
                <h4>Last chapter: 20</h4>
                <div className={s.continueBtn}>Continue (14)</div>
              </div>
            </div>
          </div>
          {/* {new Array(4).fill(null).map((elem, i) => (
            <div key={i} className={s.preloaderWrap}>
              <AddedBooksSkeleton />
            </div>
          ))} */}
        </div>
      </main>
    </div>
  )
}
