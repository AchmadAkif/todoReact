import { useState } from 'react'
import './App.css'
import AddNew from './components/AddNew'
import Header from './components/Header'
import ItemList from './components/ItemList'
import useFetch from './utils/useFetch'


const App = () => {
  const {data: items, isLoading} = useFetch('http://localhost:5000/todos');

  const handleAddItem = async (task) => {
    // Dont execute this function when input is empty
    if (task === ""){
      return;
    };

    try {
      const body = { desc: task }
      const response = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      console.log(response);
      setTask('');
    } catch (err) {
      console.error(err);
    }

    window.location = '/';
  };
  
  const handleRemoveItem = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE',
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }

    window.location = '/';
  };
  
  const handleRemoveAllItems = () => {
    setItems([]);
  };

  //Sort Items Function
  const [sortBy, setSortBy] = useState('input')
  let sortedItems;

  if (sortBy === 'input') {
    sortedItems = items
  }
  if (sortBy === 'name') {
    sortedItems = items.slice().sort((a,b) => a.todo.localeCompare(b.todo))
  }
  if (sortBy === 'checked') {
    sortedItems = items.slice().sort((a,b) => a.status - b.status)
  }

  return (
    isLoading 
    
    ?
    null
    
    :
    <section className='w-full h-[100vh] relative'>
      {items.length !== 0 ? <Header onRemoveAllItems={handleRemoveAllItems} items={items} /> : null}
      <ItemList items={sortedItems} onRemoveItem={handleRemoveItem} />
      <AddNew onAddItem={handleAddItem} onSortItems={setSortBy} />
    </section>
  )
}

export default App