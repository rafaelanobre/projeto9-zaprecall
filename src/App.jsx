import { useState } from 'react'
import LoginPage from './components/LoginPage'
import MainPage from './components/MainPage'


function App() {
  const [login, setLogin] = useState(true);
  const [contAnswered, setAnswered] = useState(0);
  const [icons, setIcons] = useState([]);

  if (login === true){
  return (
    <>
      <LoginPage setLogin={setLogin} />
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