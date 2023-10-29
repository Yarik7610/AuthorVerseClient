import { NavLink } from 'react-router-dom'
import s from './RedirectBtn.module.scss'
interface ICustomBtn {
  text: string
  to?: string
  length?: string
  color?: string
}

export const RedirectBtn: React.FC<ICustomBtn> = ({ text, to, length, color }) => {
  let hex
  if (color === 'pink') hex = '#F2CEF2'
  else if (color === 'black') hex = '#000000'
  else hex = '#614ED9'

  if (!to) {
    return (
      <div
        className={s.btn}
        style={{ padding: `10px ${length ? length : 24}px`, backgroundColor: hex }}>
        {text}
      </div>
    )
  }
  return (
    <NavLink
      className={`${s.btn} ${s.link}`}
      to={to}
      style={{ padding: `10px ${length ? length : 24}px`, backgroundColor: hex }}>
      {text}
    </NavLink>
  )
}
