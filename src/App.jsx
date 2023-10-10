import './App.css'
import AddNew from './components/AddNew'
import Header from './components/Header'
import ItemList from './components/ItemList'

const App = () => {
  return (
    <section className='relative'>
      <Header />
      <ItemList />
      <AddNew />
    </section>
  )
}

export default App