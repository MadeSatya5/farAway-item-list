import './App.css'
import Logo from './assets/components/Logo'
import Form from './assets/components/Form'
import Stats from './assets/components/Stats'
import PackingList from './assets/components/PackingLIst'
import { useState } from 'react'

function App() {
  const [items, setItems] = useState([]);

  function handleDeleteItems(id){
    console.log("hei")
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleAddItems(item){
    setItems((items) => [...items, item])
  }

  return (
    <>
      <div className='app'>
        <Logo />
        <Form onAddItems={handleAddItems}/>
        <PackingList items={items} onDeleteItems={handleDeleteItems}/>
        <Stats />
      </div>
    </>
  )
}

export default App
