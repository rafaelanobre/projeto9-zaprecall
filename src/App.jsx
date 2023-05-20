import { useState } from 'react'
import Login from './components/Login'
import MainPage from './components/MainPage'


function App() {
  const [login, setLogin] = useState(true);
  const [contAnswered, setAnswered] = useState(0);
  const [icons, setIcons] = useState([]);

  if (login === true){
  return (
    <>
      <Login setLogin={setLogin} />
    </>
  )
  }
  if (login === false){
    return (
      <>
        <MainPage />
      </>
    )
  }
}

export default App;