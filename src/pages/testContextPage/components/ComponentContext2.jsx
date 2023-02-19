import React from 'react'

import { useUserContext } from '../context/test.context';



function ComponentContext2() {
  const { userInfo } = useUserContext();
  return (
    <div>
      <p>Se recibe la información del contexto user</p>
      <p>
        User: {userInfo?.user ? userInfo?.user : 'no hay información'}
      </p>
      <p>
        Email: {userInfo?.email ? userInfo?.email : 'no hay información'}
      </p>
    </div>
  )
}

export default ComponentContext2