import axios from 'axios'
import { useEffect, useState } from 'react'
import bg from '../../../images/bg.png'
import s from './FirstMain.module.scss'

export const FirstMain = () => {
  const [bookCount, setBookCount] = useState(0)
  useEffect(() => {
    const fetchBookCount = async () => {
      const response = await axios.get('https://localhost:7069/api/Book/Count')
      setBookCount(response.data)
    }
    fetchBookCount().catch(console.error)
  }, [])
  return (
    <div className={s.first}>
      <div className={s.mainText}>
        <h1 className={s.mainTextHl}>Author</h1>
        <p>
          <span className={s.amountOfBooks}>{!bookCount ? "Lot's of" : bookCount}</span>
          <span> books to read</span>
        </p>
        <h1 className={s.mainTextHl}>Verse</h1>
        <p>Unleash Your Creativity with the Power of Books</p>
      </div>
      <img className={s.img} src={bg} />
    </div>
  )
}
