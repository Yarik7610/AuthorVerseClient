import { IParsedDate } from '../../Utils/parseDate'
import s from './FullDate.module.scss'

interface IFullDate {
  parsedDate: IParsedDate
  additionalText?: string
}
export const FullDate: React.FC<IFullDate> = ({ parsedDate, additionalText }) => {
  return (
    <div className={s.wrap}>
      {`${additionalText ? additionalText : ''} ${parsedDate.monthFull} ${parsedDate.day}, ${
        parsedDate.year
      }`}
    </div>
  )
}
