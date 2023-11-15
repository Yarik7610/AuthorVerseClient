import { SetStateAction, memo, useCallback, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import s from './SearchBar.module.scss'

const debounce = (f: Function, ms: number) => {
  let timeout: number
  return function (...args: any) {
    clearTimeout(timeout)
    timeout = setTimeout(() => f(...args), ms) as unknown as number
  }
}

interface ISearchBar {
  query: string
  setQuery: React.Dispatch<SetStateAction<string>>
  setPage: React.Dispatch<React.SetStateAction<number>>
  width?: string
}
export const SearchBar: React.FC<ISearchBar> = memo(({ query, setQuery, setPage, width }) => {
  const [value, setValue] = useState(query)

  const updateSearchValue = (data: string) => {
    setQuery(data)
    setPage(1)
  }
  const debouncedUpdateSearchValue = useCallback(debounce(updateSearchValue, 400), [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    debouncedUpdateSearchValue(e.target.value)
  }
  const clearQuery = () => {
    setValue('')
    debouncedUpdateSearchValue('')
  }
  return (
    <div className={s.wrap}>
      <div className={s.inputWrap} style={{ width: width ? width : '' }}>
        <input
          value={value}
          onChange={handleChange}
          className={s.search}
          type="search"
          placeholder="Search book..."
        />
        <button onClick={clearQuery}>
          <RxCross2 size={'1.5rem'} />
        </button>
      </div>
    </div>
  )
})
