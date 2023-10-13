import { useState } from 'react'
import './App.css'
import AddNew from './components/AddNew'
import Header from './components/Header'
import ItemList from './components/ItemList'
import itemsData from './components/itemsData'

const App = () => {
  const [items, setItems] = useState(itemsData);
  
  const handleAddItem = (item) => {
    setItems([...items, item]);
  }

  return (
    <section className='relative'>
      <Header />
      <ItemList items={items} />
      <AddNew onAddItem={handleAddItem} />
    </section>
  )
}

export default App