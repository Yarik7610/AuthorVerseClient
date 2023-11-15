import s from './ChoiceBtn.module.scss'

interface IChoiceBtn {
  val: string
}

export const ChoiceBtn: React.FC<IChoiceBtn> = ({ val }) => {
  return (
    <div className={s.wrap}>
      <div className={s.btn}>
        <div className={s.circle}></div>
        <div>{val}</div>
      </div>
    </div>
  )
}
