import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import s from './ChangeProfileForm.module.scss'

interface IChangeProfileForm {
  username: string
  email: string
  password: string
  status: string
}

export const ChangeProfileForm = () => {
  const [isVisible, setIsVisible] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IChangeProfileForm>({
    mode: 'all'
  })

  const onSubmit: SubmitHandler<IChangeProfileForm> = (data) => {
    console.log(data)
    reset()
  }
  return (
    <div className={s.wrap}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <h1 className={s.title}>Change data:</h1>
        <div className={`${s.group} ${errors.username ? `${s.error}` : ''}`}>
          <input
            type="text"
            className={`${s.input} ${errors.username ? `${s.error}` : ''}`}
            {...register('username', {
              required: 'This field is required',
              pattern: {
                value: /^[a-zA-Z0-9\-._@+\s]+$/,
                message: 'Incorrect symbols'
              },
              validate: (value) => value.trim() !== '' || 'No white spaces',
              maxLength: { value: 50, message: 'Max length was achieved' }
            })}
            required
          />
          <label className={`${s.label} ${errors.username ? `${s.error}` : ''}`}>Username</label>
        </div>
        {errors.username && <div className={s.errorMessage}>{errors.username.message}</div>}

        <div className={`${s.group} ${errors.email ? `${s.error}` : ''}`}>
          <input
            type="text"
            className={`${s.input} ${errors.email ? `${s.error}` : ''}`}
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value:
                  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                message: 'Invalid format'
              },
              validate: (value) => value.trim() !== '' || 'No white spaces',
              maxLength: { value: 50, message: 'Max length was achieved' }
            })}
            required
          />
          <label className={`${s.label} ${errors.email ? `${s.error}` : ''}`}>Email</label>
        </div>
        {errors.email && <div className={s.errorMessage}>{errors.email.message}</div>}

        <div className={`${s.group} ${errors.password ? `${s.error}` : ''}`}>
          <input
            type={isVisible ? 'text' : 'password'}
            className={`${s.input} ${errors.password ? `${s.error}` : ''}`}
            {...register('password', {
              required: 'This field is required',
              pattern: {
                value: /^(?=.*?[A-ZА-Я])(?=.*?[a-zа-я])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
                message:
                  'Password must have 1 digit, 1 lowercase letter, 1 uppercase letter and 1 unique symbol (e.g. #?!@$%^&*-)'
              },
              validate: (value) => value.trim() !== '' || 'No white spaces',
              maxLength: { value: 50, message: 'Max length was achieved' },
              minLength: { value: 6, message: 'Min length is 6 chars' }
            })}
            required
          />
          <label className={`${s.label} ${errors.password ? `${s.error}` : ''}`}>Password</label>
          <div className={s.formEye}>
            {!isVisible ? (
              <AiFillEye size={'1.4rem'} onClick={() => setIsVisible(true)} />
            ) : (
              <AiFillEyeInvisible size={'1.4rem'} onClick={() => setIsVisible(false)} />
            )}
          </div>
        </div>
        {errors.password && <div className={s.errorMessage}>{errors.password.message}</div>}

        <div className={`${s.group} ${errors.status ? `${s.error}` : ''}`}>
          <input
            className={`${s.input} ${errors.password ? `${s.error}` : ''}`}
            {...register('status', {
              validate: (value) => value.trim() !== '' || 'No white spaces',
              maxLength: { value: 50, message: 'Max length was achieved' }
            })}
            required
          />
          <label className={`${s.label} ${errors.status ? `${s.error}` : ''}`}>Status</label>
        </div>
        {errors.status && <div className={s.errorMessage}>{errors.status.message}</div>}

        <div className={s.btnWrap}>
          <button className={s.formButton}>Next</button>
        </div>
      </form>
    </div>
  )
}
