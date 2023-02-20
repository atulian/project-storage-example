import { useState } from 'react'
import './App.css'
import TestPage from './pages/testContextPage/testPage'

import { Provider } from 'react-redux';
import store from './redux/store';
import ComponentRedux1 from './components/Redux/ComponentRedux1';

function App() {
  return (
    <div className="App">
      <h1>Test Storage</h1>

      <Provider store={store}>
        <h2>Context</h2>
        <TestPage />

        <h2>Redux</h2>
        <ComponentRedux1 />
      </Provider>
    </div>
  )
}

export default App
