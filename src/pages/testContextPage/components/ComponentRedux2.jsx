import React from 'react'
import { useSelector } from 'react-redux'
import { useUserInformation } from '../../../redux/states/user'

function ComponentRedux2() {

  const state = useSelector(state => state.user);
  const { email } = useUserInformation();

  return (
    <div>
      <div>El state de user en REDUX es: {JSON.stringify(state)}</div>
      <div>El email del user en REDUX es: <strong> {email} </strong></div>
    </div>
  )
}

export default ComponentRedux2