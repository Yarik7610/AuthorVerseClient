import { useState } from 'react'
import { ChangeProfileForm } from '../../../components/ChangeProfileForm/ChangeProfileForm'
import { Modal } from '../../../components/Modal/Modal'
import img from '../../../images/download.jpg'
import s from './ProfileHeader.module.scss'

export const ProfileHeader = () => {
  const [isModalOpened, setIsModalOpened] = useState(false)

  const handleModal = () => {
    setIsModalOpened(!isModalOpened)
  }

  return (
    <section className={s.wrap}>
      <div className={s.header}>
        <div className={s.imgAndNick}>
          <img src={img} />
          <div>
            <h2>Odinson 137</h2>
            <i>I exist... to live</i>
          </div>
        </div>
        <button className={s.settingsBtn} onClick={handleModal}>
          Settings
        </button>
      </div>
      {isModalOpened && (
        <Modal isOpened={isModalOpened} setIsOpened={setIsModalOpened}>
          <ChangeProfileForm />
        </Modal>
      )}
    </section>
  )
}
