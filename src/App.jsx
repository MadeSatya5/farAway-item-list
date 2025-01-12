import './App.css'
import Logo from './assets/components/Logo'
import Form from './assets/components/Form'
import Stats from './assets/components/Stats'
import PackingList from './assets/components/PackingLIst'

function App() {

  return (
    <>
      <div className='app'>
        <Logo />
        <Form />
        <PackingList />
        <Stats />
      </div>
    </>
  )
}

export default App
