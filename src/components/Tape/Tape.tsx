import { memo, useEffect, useState } from 'react'
import { IGenre, ITag } from '../BigSlider/BookSlide/BookSlide'
import { RedirectBtn } from '../RedirectBtn/RedirectBtn'
import s from './Tape.module.scss'

interface IParsedDate {
  year: string
  month: string
  day: string
  monthFull: string
  dateParsed: Date
}
interface ITape {
  data: Array<ITag> | Array<IGenre>
  color?: string
  date?: IParsedDate
}
export const Tape: React.FC<ITape> = memo(({ data, color, date }) => {
  const [finalTags, setFinalTags] = useState<Array<ITag | IGenre>>([...data])

  const checkNew = () => {
    if (date) {
      //1 month
      let monthInMs = 2678400000
      if (Date.now() - date.dateParsed.getTime() < monthInMs && color === 'purple')
        setFinalTags([{ name: 'New', tagId: -1 }, ...data])
      else setFinalTags([...data])
    }
  }

  useEffect(() => {
    //per hour
    let timer: NodeJS.Timeout
    let i = setTimeout(function check() {
      checkNew()
      timer = setTimeout(check, 3600000)
    }, 0)
    return () => {
      clearTimeout(i)
      clearTimeout(timer)
    }
  }, [data])

  useEffect(() => {
    setFinalTags(data)
  }, [data])

  return (
    <div className={s.tape}>
      <ul>
        {finalTags.map((elem, i) => {
          return (
            <li key={i}>
              <RedirectBtn color={elem.name === 'New' ? 'black' : color} text={elem.name} />
            </li>
          )
        })}
      </ul>
    </div>
  )
})
