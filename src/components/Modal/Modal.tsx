import React, { useEffect, useRef } from 'react'
import { RxCross2 } from 'react-icons/rx'
import s from './Modal.module.scss'

interface IModal {
  height?: string
  isOpened: boolean
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}

export const Modal: React.FC<IModal> = ({ setIsOpened, children, height }) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.classList.add('activeModal')
    const handleClickOutside = (e: globalThis.MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as HTMLElement)) {
        setIsOpened(false)
      }
    }
    document.body.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.body.classList.remove('activeModal')
      document.body.removeEventListener('mousedown', handleClickOutside)
      // dispatch(resetStatusMsg())
      setIsOpened(false)
    }
  }, [])

  return (
    <div className={s.wrap}>
      <div ref={modalRef} className={s.modal} style={{ height: `${height}px` }}>
        {children}
        <button
          className={s.closeModalBtn}
          onClick={() => {
            setIsOpened(false)
          }}>
          <RxCross2 size={'2em'} />
        </button>
      </div>
    </div>
  )
}
