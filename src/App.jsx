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

  const handleRemoveItem = (id) => {
    setItems(items.filter( item => item.id !== id))
  }

  return (
    <section className='relative'>
      <Header />
      <ItemList items={items} onRemoveItem={handleRemoveItem} />
      <AddNew onAddItem={handleAddItem} />
    </section>
  )
}

export default App