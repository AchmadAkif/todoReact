import { useState } from "react"
import styles from "../style"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import img from '../assets/Asset 1.png'

const Item = ({task, onRemoveItem, onCheckboxChange}) => {
  const {todo_id, description} = task;

  const handleCheckbox = (id) => {
    onCheckboxChange(id)
  }

  const handleDelete = (id) => {
    onRemoveItem(id);
  }

  return (
    <li style={status ? {textDecoration: 'line-through'} : {} } className={`${styles.paddingY} px-4 flex justify-between items-center rounded-[20px] border-[1px] border-[rgb(109,40,217)]  shadow-[5px_5px_0px_0px_rgba(109,40,217)]`}>
      <input type="checkbox" className="w-[20px] h-[20px] accent-primary" onChange={() => handleCheckbox(id)} />
      <p>{description}</p>
      <div className="w-[35px] h-[35px] flex justify-center items-center rounded-full bg-dimRed cursor-pointer" onClick={() => handleDelete(todo_id)}>
        <FontAwesomeIcon icon={faTrashCan} style={{color: "#ed0e0e",}} />
      </div>
    </li>
  )
}

// Parent Component
const ItemList = ({items, onRemoveItem }) => {

  if (items.length === 0) {
    return (
      <section className="flex flex-col justify-center font-inter px-10 h-full">
        <img src={img} alt="task empty" className="mb-3" />
        <h1 className="text-center font-bold text-[25px] mb-">Your Task List is empty!</h1>
        <p className="text-center font-light text-grey">You don't have any active tasks right now. Try to add some!</p>
      </section>
    )
  } else {
    return (
      <section className={`${styles.paddingX} ${styles.paddingY} h-full`}>
        <ul className="flex flex-col space-y-5 font-inter font-bold text-[18px]">
          {items.map( task => (
            <Item key={task.todo_id} task={task} onRemoveItem={onRemoveItem} />
          ))}
        </ul>
      </section>
    )
  }
}

export default ItemList

