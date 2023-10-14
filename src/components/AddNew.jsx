import styles from "../style"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { v4 as uuidv4} from 'uuid'

const AddNew = ({onAddItem}) => {
  const [task, setTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Dont execute this function when input is empty
    if (task === ""){
      return
    };

    const newItem = {
      id: uuidv4(),
      todo: task, 
      status: false
    }

    onAddItem(newItem);
    clearInput()
  }

  const clearInput = () => {
    setTask("");
  }
  
  return (
    <section className={`w-full ${styles.paddingX} ${styles.paddingY} font-inter fixed bottom-0 bg-white`}>
      <form onSubmit={handleSubmit} className="w-full h-14" >
        <div className="w-full h-full flex items-center border-[1px] border-primary rounded-[10px] mb-5 px-5">
          <input type="text" className="w-full h-full focus:outline-none" value={task} onChange={(e)=>{setTask(e.target.value)}} />
          <FontAwesomeIcon onClick={handleSubmit} icon={faCirclePlus} size="xl" style={{color: "#5438dc",}} className="cursor-pointer"/>
        </div>
      </form>
    </section>
  )
}

export default AddNew