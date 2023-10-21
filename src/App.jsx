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
    setItems(items.map( item => item.id === id ? {...item, status: !item.status} : item))
  }

  const handleRemoveAllItems = () => {
    setItems([])
  }

  //Sort Items Function
  const [sortBy, setSortBy] = useState()
  let sortedItems;

  if (sortBy === 'input') {
    console.log('input')
  }
  if (sortBy === 'name') {
    console.log('name')
  }
  if (sortBy === 'checked') {
    console.log('checked')
  }

  if (items.length == 0) {
    return (
      <section className='w-full h-[100vh] relative'>
        <ItemList items={items} onRemoveItem={handleRemoveItem} onCheckboxChange={handleFinishedItem} />
        <AddNew onAddItem={handleAddItem} onSortItems={setSortBy} />
      </section>
    )
  } else {
    return (
      <section className='w-full h-[100vh] relative'>
        <Header onRemoveAllItems={handleRemoveAllItems} items={items} />
        <ItemList items={items} onRemoveItem={handleRemoveItem} onCheckboxChange={handleFinishedItem} />
        <AddNew onAddItem={handleAddItem} onSortItems={setSortBy} />
      </section>
    )
  }
}

export default App