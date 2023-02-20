import React from 'react'
import ComponentContext1 from './components/ComponentContext1'
import ComponentContext2 from './components/ComponentContext2'
import ComponentRedux2 from './components/ComponentRedux2';

import { UserContextProvider } from './context/test.context';

function TestPage() {
  return (
    <UserContextProvider>
      <div style={{ display: 'flex', flexDirection: 'column', width: 'fit-content', gap: 10 }}>
        <ComponentContext1 />
        <ComponentContext2 />

        <ComponentRedux2 />
      </div>
    </UserContextProvider>
  )
}

export default TestPage