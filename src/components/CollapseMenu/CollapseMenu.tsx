import { useState } from 'react'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'
import { IFilters } from '../../pages/Books/Books'
import { IGenre, ITag } from '../BigSlider/BookSlide/BookSlide'
import { TagsSkeleton } from '../TagsSkeleton/TagsSkeleton'
import s from './CollapseMenu.module.scss'

interface ICollapseMenu {
  name: 'Tags' | 'Genres'
  data: Array<ITag> | Array<IGenre>
  color: 'pink' | 'purple'
  filters: IFilters
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>
  setPage: React.Dispatch<React.SetStateAction<number>>
}

export const CollapseMenu: React.FC<ICollapseMenu> = ({
  data,
  color,
  name,
  filters,
  setFilters,
  setPage
}) => {
  const [isOpened, setIsOpened] = useState(false)
  const [activePos, setActivePos] = useState(0)

  const handleActiveTag = (elem: ITag | IGenre, i: number) => {
    if (name === 'Tags') {
      let elemTag = elem as ITag
      setFilters({ ...filters, activeTag: elemTag.tagId })
    } else {
      let elemGenre = elem as IGenre
      setFilters({ ...filters, activeGenre: elemGenre.genreId })
    }
    setPage(1)
    setActivePos(i)
  }

  return (
    <div className={s.wrap}>
      <h1>{name}</h1>
      <div className={s.content}>
        <ul className={`${s.ul} ${!isOpened ? s.collapsed : ''}`}>
          {data.length > 0 ? (
            data.map((elem, i) => (
              <li
                key={i}
                className={`${s.tag} ${activePos === i ? s.active : ''} ${
                  color === 'pink' ? s.pink : ''
                }`}
                onClick={() => handleActiveTag(elem, i)}>
                <button disabled={activePos === i}>{elem.name}</button>
              </li>
            ))
          ) : (
            <TagsSkeleton />
          )}
        </ul>
        <div className={s.arrowWrap}>
          {!isOpened ? (
            <SlArrowDown size={'1.5rem'} onClick={() => setIsOpened(true)} />
          ) : (
            <SlArrowUp size={'1.5rem'} onClick={() => setIsOpened(false)} />
          )}
        </div>
      </div>
    </div>
  )
}
