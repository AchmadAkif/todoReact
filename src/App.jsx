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

  const handleFinishedItem = (id) => {
    setItems(items.map( item => item.id === id ? {...item, status:!item.status} : {}))
  }

  const handleRemoveAllItems = () => {
    console.log('Hapus')
  }

  return (
    <section className='relative'>
      <Header onRemoveAllItems={handleRemoveAllItems} />
      <ItemList items={items} onRemoveItem={handleRemoveItem} onCheckboxChange={handleFinishedItem} />
      <AddNew onAddItem={handleAddItem} />
    </section>
  )
}

export default App