import img from '../../images/download.jpg'
import { BooksTape } from './BooksTape/BooksTape'
import s from './Profile.module.scss'
import { ProfileMain } from './ProfileMain/ProfileMain'

const ProfileHeader = () => {
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

export const Profile = () => {
  return (
    <>
      <div className={s.wrap}>
        <BooksTape />
        <ProfileHeader />
        <ProfileMain />
      </div>
    </>
  )
}
