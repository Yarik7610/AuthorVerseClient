import preloader from '../../images/preloader2.gif'
import s from './Preloader.module.scss'

export const Preloader = () => {
  return (
    <div className={s.wrap}>
      <img src={preloader} alt="" />
    </div>
  )
}
