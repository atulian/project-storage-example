import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { createUser, modifyUser, resetUser } from '../../redux/states/user'

function ComponentRedux1() {

  const [email, setEmail] = useState('');

  const dispacher = useDispatch();

  const handleClick = () => {
    dispacher(createUser({
      user: 'atulian',
      email: 'andres.tulian7@gmail.com',
    }))
  }

  const handleClickRemoveState = () => {
    dispacher(resetUser())
  }

  const handleSubmitModifyEmail = (e) => {
    e.preventDefault();

    console.log('email > ', email)
    dispacher(modifyUser({email: email}))
  }

  return (
    <div>
      <button onClick={(handleClick)}>Enviar información a REDUX</button>
      <button onClick={(handleClickRemoveState)}>Reset información a REDUX</button>

      <form onSubmit={(handleSubmitModifyEmail)}>
        <label> Modificar email del state </label>
        <div>
          <input name="email" type="text" value={email} onChange={(e => setEmail(e.target.value))} />
          <button type="submit">Modificar</button>
        </div>
      </form>

    </div>
  )
}

export default ComponentRedux1