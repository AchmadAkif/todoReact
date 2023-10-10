import styles from "../style"
import itemsData from '../static/placeholder'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ItemList = () => {
  return (
    <section className={`${styles.paddingX} ${styles.paddingY}`}>
      <ul className="flex flex-col space-y-5 font-inter font-bold text-[18px]">
        {itemsData.map( item => (
          <li key={item.id} className={`${styles.paddingY} px-4 flex justify-between items-center rounded-[20px] shadow-xl`}>
            <input type="checkbox" className="w-[20px] h-[20px]" />
            {item.todo}
            <div className="w-[35px] h-[35px] flex justify-center items-center rounded-full bg-dimRed">
              <FontAwesomeIcon icon={faTrashCan} style={{color: "#ed0e0e",}} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ItemList