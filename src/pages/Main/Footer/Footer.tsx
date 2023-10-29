import s from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <nav className={s.nav}>
        <ul className={s.ulFirst}>
          <h3 className={s.hl}>AuthorVerse</h3>
          <li>© 2023 Chuvaki, Inc</li>
        </ul>
        <ul>
          <h3 className={s.hl}>Support</h3>
          <li className={s.li}>Contact us</li>
          <li className={s.li}>Customer support</li>
          <li className={s.li}>Donate to project :)</li>
        </ul>
        <ul className={s.ulLast}>
          <h3 className={s.hl}>Socials</h3>
          <li className={s.li}>GitHub</li>
          <li className={s.li}>Stack Overflow</li>
          <li className={s.li}>Discord</li>
          <li className={s.li}>Telegram</li>
        </ul>
      </nav>
    </footer>
  )
}
