import styles from "../style"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { v4 as uuidv4} from 'uuid'

const Input = () => {
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

    clearInput()
    console.log(newItem)
  }

  const clearInput = () => {
    setTask("");
  }
  
  return (
    <form onSubmit={handleSubmit} className="w-full h-14" >
      <div className="w-full h-full flex items-center border-[1px] border-primary rounded-[10px] mb-5 px-5">
        <input type="text" className="w-full h-full focus:outline-none" value={task} onChange={(e)=>{setTask(e.target.value)}} />
        <FontAwesomeIcon onClick={clearInput} icon={faCircleXmark} size="xl" style={{color: "#5438dc",}} className="cursor-pointer"/>
      </div>
      <button className="w-full h-14 flex justify-center items-center bg-primary rounded-[10px] font-inter font-medium text-[18px] text-white">Add Task</button>
    </form>
  )
}

const AddNew = () => {
  return (
    <section className={`w-full ${styles.paddingX} ${styles.paddingY} font-inter sticky bottom-0 bg-white`}>
      <Input />
    </section>
  )
}

export default AddNew