import { useState } from "react"
import styles from "../style"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import AddNew from "./AddNew"


const Item = ({task, onRemoveItem}) => {
  const {todo, status} = task;

  const handleDelete = (id) => {
    onRemoveItem(id);
  }

  return (
    <li style={status ? {textDecoration: 'line-through'} : {} } className={`${styles.paddingY} px-4 flex justify-between items-center rounded-[20px] shadow-xl`}>
      <input type="checkbox" className="w-[20px] h-[20px] accent-primary" />
      <p>{todo}</p>
      <div className="w-[35px] h-[35px] flex justify-center items-center rounded-full bg-dimRed cursor-pointer" onClick={() => handleDelete(task.id)}>
        <FontAwesomeIcon icon={faTrashCan} style={{color: "#ed0e0e",}} />
      </div>
    </li>
  )
}

// Parent Component
const ItemList = ({items, onRemoveItem}) => {

  return (
    <section className={`${styles.paddingX} ${styles.paddingY}`}>
      <ul className="flex flex-col space-y-5 font-inter font-bold text-[18px]">
        {items.map( task => (
          <Item key={task.id} task={task} onRemoveItem={onRemoveItem} />
        ))}
      </ul>
    </section>
  )
}

export default ItemList