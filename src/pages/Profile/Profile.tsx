import { BooksTape } from './BooksTape/BooksTape'
import s from './Profile.module.scss'
import { ProfileHeader } from './ProfileHeader/ProfileHeader'
import { ProfileMain } from './ProfileMain/ProfileMain'

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
