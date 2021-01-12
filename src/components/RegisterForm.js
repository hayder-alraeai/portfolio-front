import React, { useState } from 'react'
import RgLogo from './images/register.svg'
import '../App.css';
import {useForm} from 'react-hook-form'
const RegisterForm = ({onSubmit}) => {
    const {register, handleSubmit, errors} = useForm()

    return(
        <div className="register-body">

        <div className="register-logo">
            <img src={RgLogo} />
        </div>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="elements">
              <label>Name: </label>
              <input type="text" name="name" ref={register} />
          </div>

          <div className="elements">
              <label>Email: </label>
              <input type="email" name="email" ref={register} />
          </div>
          <div className="elements">
              <label>Password: </label>
              <input type="password" required name="pass" ref={register({required: "password required!"})} />
              {errors.pass && <p>{errors.pass.message}</p>}
          </div>
          <div className="elements">
              <label>Re password: </label>
              <input type="password" name="repass" ref={register} />
          </div>
          <div className="elements">
              <label>Phone: </label>
              <input type="number" name="phone" ref={register} />
          </div>
          <input type="submit" value="Register"/>
      </form>
    </div>
    )
}
export default RegisterForm