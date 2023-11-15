import { NavLink, Outlet } from 'react-router-dom'
import s from './ProfileMain.module.scss'

export const isActive = ({ isActive }: { isActive: boolean }) => (isActive ? s.activeLi : s.li)

export const ProfileMain = () => {
  return (
    <div className={s.grid}>
      <header className={s.header}>
        <ul className={s.ul}>
          <NavLink to={''} end className={isActive}>
            Books
          </NavLink>
          <NavLink to={'/profile/comments'} end className={isActive}>
            Comments
          </NavLink>
          <NavLink to={'/profile/friends'} end className={isActive}>
            Friends
          </NavLink>
          <NavLink to={'/profile/yourBooks'} end className={isActive}>
            Your Books
          </NavLink>
        </ul>
      </header>
      <Outlet />
    </div>
  )
}
