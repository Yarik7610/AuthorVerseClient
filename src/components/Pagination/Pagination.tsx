import React, { useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { Modal } from '../Modal/Modal'
import { ModalPagination } from '../Modal/ModalPagination/ModalPagination'
import s from './Pagination.module.scss'

export interface IPagination {
  booksCount: number
  currentPage: number
  onPageClick: (number: number) => void
}

export const Pagination: React.FC<IPagination> = React.memo(
  ({ currentPage, onPageClick, booksCount }) => {
    const [isOpened, setIsOpened] = useState(false)
    let pages = []
    const LAST_PAGE = Math.ceil(booksCount / 5)
    for (let i = 0; i < LAST_PAGE; i++) {
      pages.push(i + 1)
    }

    let slicedPages

    if (currentPage - 3 < 0) slicedPages = pages.slice(0, 3)
    else if (currentPage + 2 >= LAST_PAGE) slicedPages = pages.slice(LAST_PAGE - 3)
    else slicedPages = pages.slice(currentPage - 2, currentPage + 1)

    const setPage = (page: number) => {
      onPageClick(page)
    }

    const setPreviousPage = () => {
      if (currentPage > 1) onPageClick(currentPage - 1)
    }

    const setNextPage = () => {
      if (currentPage < pages.length) onPageClick(currentPage + 1)
    }
    if (booksCount === 0) return <></>
    return (
      <div className={s.wrap}>
        <ul>
          <MdKeyboardArrowLeft onClick={() => setPreviousPage()} className={s.arrow} />
          {slicedPages.map((p) => (
            <li
              onClick={() => onPageClick(p)}
              className={currentPage === p ? s.active : s.li}
              key={p}>
              {p}
            </li>
          ))}
          {currentPage + 3 < LAST_PAGE && (
            <li key={'right'} className={`${s.li} ${s.ellipsis}`} onClick={() => setIsOpened(true)}>
              ...
            </li>
          )}
          {currentPage + 3 < LAST_PAGE && (
            <li
              onClick={() => onPageClick(LAST_PAGE)}
              className={currentPage === LAST_PAGE ? s.active : s.li}
              key={LAST_PAGE}>
              {LAST_PAGE}
            </li>
          )}
          <MdKeyboardArrowRight onClick={() => setNextPage()} className={s.arrow} />
        </ul>
        {isOpened && (
          <Modal height="200" isOpened={isOpened} setIsOpened={setIsOpened}>
            <ModalPagination lastPage={LAST_PAGE} setPage={setPage} setIsOpened={setIsOpened} />
          </Modal>
        )}
      </div>
    )
  }
)
