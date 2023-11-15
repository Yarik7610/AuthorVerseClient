import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import s from './ModalPagination.module.scss'

interface IModalPagination {
  lastPage: number
  setPage: (page: number) => void
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>
}
export const ModalPagination: React.FC<IModalPagination> = ({ lastPage, setPage, setIsOpened }) => {
  const [value, setValue] = useState<string>('')

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (Number(value) < 1) setPage(1)
      else if (Number(value) > lastPage) setPage(lastPage)
      else setPage(Number(value))
      setValue('')
      setIsOpened(false)
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let nextPage = e.target.value
    if (Number(nextPage) || nextPage === '') setValue(nextPage)
  }
  return (
    <div className={s.wrap}>
      <h2>Choose page</h2>
      <div className={s.inputWrap}>
        <input
          value={value}
          onKeyPress={handleKeyDown}
          onChange={handleChange}
          className={s.input}
          placeholder=""
        />
        <button onClick={() => setValue('')}>
          <RxCross2 size={'1.5rem'} />
        </button>
      </div>
    </div>
  )
}
