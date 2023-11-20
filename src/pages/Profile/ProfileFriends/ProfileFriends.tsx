import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io'
import { IoBanOutline, IoReloadOutline } from 'react-icons/io5'
import { parseDate } from '../../../Utils/parseDate'
import { FullDate } from '../../../components/FullDate/FullDate'
import { SearchBar } from '../../../components/SearchBar/SearchBar'
import img from '../../../images/download.jpg'
import s from './ProfileFriends.module.scss'

const requests = ['Yuri 137', 'Yarik7610dadadadadadadadadadad']
const banned = [
  'aboba',
  'poopy228dadadadadadadadadd',
  'poopy228dadadadadadadadadd',
  'poopy228dadadadadadadadadd',
  'poopy228dadadadadadadadadd',
  'poopy228dadadadadadadadadd'
]

export const ProfileFriends = () => {
  const parsedDate = parseDate('2023-11-19')

  return (
    <div className={s.wrap}>
      <SearchBar width="100%" query="" setQuery={() => {}} setPage={() => {}} />
      <div className={s.grid}>
        <nav className={s.nav}>
          <ul className={`${s.navBlock} ${s.requests}`}>
            <h3>Requests:</h3>
            {requests.map((r, i) => (
              <li key={i} className={`${s.li}`}>
                <span className={s.nick}>{r}</span>
                <div className={s.btns}>
                  <IoIosAddCircleOutline size={'1.25rem'} color={'614ed9'} />
                  <IoIosRemoveCircleOutline size={'1.25rem'} />
                </div>
              </li>
            ))}
          </ul>
          <ul className={`${s.navBlock} ${s.banned}`}>
            <h3>Banned:</h3>
            {banned.map((b, i) => (
              <li key={i} className={`${s.li}`}>
                <span className={s.nick}>{b}</span>
                <div className={`${s.btns}`}>
                  <IoReloadOutline size={'1.15rem'} color={'green'} />
                  <IoIosRemoveCircleOutline size={'1.15rem'} />
                </div>
              </li>
            ))}
          </ul>
        </nav>
        <main className={s.main}>
          <ul className={s.friends}>
            <li className={s.friend}>
              <div className={s.imgAndNick}>
                <img src={img} />
                <div>
                  <h2>Yuri 137</h2>
                  <FullDate parsedDate={parsedDate} additionalText="Friends since" />
                </div>
              </div>
              <div className={s.btns}>
                <IoIosRemoveCircleOutline size={'1.25rem'} />
                <IoBanOutline size={'1.15rem'} color={'#bb0a1e'} />
              </div>
            </li>
            <li className={s.friend}>
              <div className={s.imgAndNick}>
                <img src={img} />
                <div>
                  <h2>Yuri 137</h2>
                  <FullDate parsedDate={parsedDate} additionalText="Friends since" />
                </div>
              </div>
              <div className={s.btns}>
                <IoIosRemoveCircleOutline size={'1.25rem'} />
                <IoBanOutline size={'1.15rem'} color={'#bb0a1e'} />
              </div>
            </li>{' '}
            <li className={s.friend}>
              <div className={s.imgAndNick}>
                <img src={img} />
                <div>
                  <h2>Yuri 137</h2>
                  <FullDate parsedDate={parsedDate} additionalText="Friends since" />
                </div>
              </div>
              <div className={s.btns}>
                <IoIosRemoveCircleOutline size={'1.25rem'} />
                <IoBanOutline size={'1.15rem'} color={'#bb0a1e'} />
              </div>
            </li>{' '}
            <li className={s.friend}>
              <div className={s.imgAndNick}>
                <img src={img} />
                <div>
                  <h2>Yuri 137</h2>
                  <FullDate parsedDate={parsedDate} additionalText="Friends since" />
                </div>
              </div>
              <div className={s.btns}>
                <IoIosRemoveCircleOutline size={'1.25rem'} />
                <IoBanOutline size={'1.15rem'} color={'#bb0a1e'} />
              </div>
            </li>{' '}
            <li className={s.friend}>
              <div className={s.imgAndNick}>
                <img src={img} />
                <div>
                  <h2>Yuri 137</h2>
                  <FullDate parsedDate={parsedDate} additionalText="Friends since" />
                </div>
              </div>
              <div className={s.btns}>
                <IoIosRemoveCircleOutline size={'1.25rem'} />
                <IoBanOutline size={'1.15rem'} color={'#bb0a1e'} />
              </div>
            </li>{' '}
            <li className={s.friend}>
              <div className={s.imgAndNick}>
                <img src={img} />
                <div>
                  <h2>Yuri 137</h2>
                  <FullDate parsedDate={parsedDate} additionalText="Friends since" />
                </div>
              </div>
              <div className={s.btns}>
                <IoIosRemoveCircleOutline size={'1.25rem'} />
                <IoBanOutline size={'1.15rem'} color={'#bb0a1e'} />
              </div>
            </li>
          </ul>
        </main>
      </div>
    </div>
  )
}
