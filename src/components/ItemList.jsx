import { useState } from "react"
import styles from "../style"
import itemsData from '../static/placeholder'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'


const Item = (props) => {

  // Destructure itemsData
  const item = props.item;
  const {id, todo, status} = item;

  return (
    <li style={status ? {textDecoration: 'line-through'} : {} } className={`${styles.paddingY} px-4 flex justify-between items-center rounded-[20px] shadow-xl`}>
      <input type="checkbox" className="w-[20px] h-[20px] accent-primary" />
      <p>{todo}</p>
      <div className="w-[35px] h-[35px] flex justify-center items-center rounded-full bg-dimRed">
        <FontAwesomeIcon icon={faTrashCan} style={{color: "#ed0e0e",}} />
      </div>
    </li>
  )
}

// Parent Component
const ItemList = () => {

  return (
    <section className={`${styles.paddingX} ${styles.paddingY}`}>
      <ul className="flex flex-col space-y-5 font-inter font-bold text-[18px]">
        {itemsData.map( item => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </section>
  )
}

export default ItemList