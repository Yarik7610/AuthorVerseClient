import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import s from './SignupForm.module.scss'

interface ISignupForm {
  username: string
  email: string
  password: string
}

export const SignupForm = () => {
  const [isVisible, setIsVisible] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ISignupForm>({
    mode: 'all'
  })

  const onSubmit: SubmitHandler<ISignupForm> = (data) => {
    console.log(data)
    reset()
  }
  return (
    <div className={s.box}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <h1 className={s.formTitle}>Sign Up</h1>
        <div className={`${s.formGroup} ${errors.username ? `${s.error}` : ''}`}>
          <input
            type="text"
            className={`${s.formControl} ${errors.username ? `${s.error}` : ''}`}
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
          <label className={`${s.formLabel} ${errors.username ? `${s.error}` : ''}`}>
            Username
          </label>
        </div>
        {errors.username && <div className={s.errorMessage}>{errors.username.message}</div>}

        <div className={`${s.formGroup} ${errors.email ? `${s.error}` : ''}`}>
          <input
            type="text"
            className={`${s.formControl} ${errors.email ? `${s.error}` : ''}`}
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
          <label className={`${s.formLabel} ${errors.email ? `${s.error}` : ''}`}>Email</label>
        </div>
        {errors.email && <div className={s.errorMessage}>{errors.email.message}</div>}

        <div className={`${s.formGroup} ${errors.password ? `${s.error}` : ''}`}>
          <input
            type={isVisible ? 'text' : 'password'}
            className={`${s.formControl} ${errors.password ? `${s.error}` : ''}`}
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
          <label className={`${s.formLabel} ${errors.password ? `${s.error}` : ''}`}>
            Enter Your Password
          </label>
          <div className={s.formEye}>
            {!isVisible ? (
              <AiFillEye size={'1.4em'} onClick={() => setIsVisible(true)} />
            ) : (
              <AiFillEyeInvisible size={'1.4em'} onClick={() => setIsVisible(false)} />
            )}
          </div>
        </div>
        {errors.password && <div className={s.errorMessage}>{errors.password.message}</div>}

        <div className={s.bottomBox}>
          <button className={s.formButton}>Next</button>
        </div>
      </form>
    </div>
  )
}
