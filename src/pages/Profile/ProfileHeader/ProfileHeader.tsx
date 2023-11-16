import img from '../../../images/download.jpg'
import s from './ProfileHeader.module.scss'

export const ProfileHeader = () => {
  return (
    <section className={s.profileHeader}>
      <div className={s.header}>
        <div className={s.imgAndNick}>
          <img src={img} />
          <div>
            <h2>Odinson 137</h2>
            <i>I exist... to live</i>
          </div>
        </div>
        <button className={s.settingsBtn}>Settings</button>
      </div>
    </section>
  )
}
