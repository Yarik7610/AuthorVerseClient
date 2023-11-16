import React, { useEffect, useState } from 'react'
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'
import { useWindowSize } from '../../Hooks/useWindowSize'
import s from './Header.module.scss'

const isActive = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${s.li} ${s.active}` : `${s.li}`

export const Header: React.FC = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)
  const size = useWindowSize()

  useEffect(() => {
    if (isMenuActive === true && size.width > 1035) setIsMenuActive(false)
  }, [size, isMenuActive])
  return (
    <div className={`${s.header}`}>
      <ul className={s.nav}>
        <div className={s.left}>
          <NavLink to={'/'} className={isActive}>
            Main
          </NavLink>
          <NavLink to={'books'} className={isActive}>
            Books
          </NavLink>
          <NavLink to={'creator'} className={isActive}>
            Creator
          </NavLink>
        </div>
        <div className={s.burger}>
          {!isMenuActive ? (
            <RxHamburgerMenu
              size={'1.5rem'}
              color="#614ed9"
              onClick={() => setIsMenuActive(!isMenuActive)}
            />
          ) : (
            <RxCross1
              size={'1.5rem'}
              color="#614ed9"
              onClick={() => setIsMenuActive(!isMenuActive)}
            />
          )}
        </div>
        <div className={`${s.hiddenMenu} ${isMenuActive ? '' : s.hidden}`}>
          <div>
            <NavLink to={'/'} className={isActive}>
              Main
            </NavLink>
          </div>
          <div>
            <NavLink to={'books'} className={isActive}>
              Books
            </NavLink>
          </div>
          <div>
            <NavLink to={'creator'} className={isActive}>
              Creator
            </NavLink>
          </div>
        </div>
        <div className={s.right}>
          <li>
            <NavLink to={'profile'} className={isActive}>
              Profile
            </NavLink>
          </li>
          {/* <li>
            <div className={`${s.headerAuthBtns}`}>
              <NavLink to={'login'}>Log in</NavLink>
              <RedirectBtn to="signup" text="Sign up" />
            </div>
          </li> */}
        </div>
      </ul>
    </div>
  )
}
