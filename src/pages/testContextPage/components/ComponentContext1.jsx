import React from 'react'
import { useUserContext } from '../context/test.context'

function ComponentContext1() {

  const { setUserInfo } = useUserContext();

  const handleAddInfo = () => {
    setUserInfo({
      user: 'Andres',
      email: 'andres.tulian7@gmail.com'
    })
  }

  const handleResetInfo = () => {
    setUserInfo({
      user: '',
      email: ''
    })
  }

  return (
    <div>
      <button onClick={(handleAddInfo)}>
        Enviar informacion al contexto
      </button>
      <button onClick={(handleResetInfo)}>
        Resetear informacion al contexto
      </button>
    </div>
  )
}

export default ComponentContext1