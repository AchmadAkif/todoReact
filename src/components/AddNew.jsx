import styles from "../style"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import {faArrowUpWideShort} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { v4 as uuidv4} from 'uuid'

//Add New task component
const AddNew = ({onAddItem, onSortItems}) => {
  const [task, setTask] = useState('');
  const [toggle, setToggle] = useState(false);

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
    <section className={`w-full ${styles.paddingX} py-5 font-inter fixed bottom-0 bg-white`}>
      <form onSubmit={handleSubmit} className="w-full h-14" >
        <div className="w-full h-full flex items-center border-[1px] border-primary rounded-[10px] mb-5 px-5">
          <input type="text" className="w-full h-full focus:outline-none" value={task} onChange={(e)=>{setTask(e.target.value)}} />
          <FontAwesomeIcon onClick={handleSubmit} icon={faCirclePlus} size="xl" style={{color: "#5438dc",}} className="cursor-pointer"/>
        </div>
      </form>
      <div onClick={() => setToggle(set => !set)} className="w-[50px] h-[50px] flex justify-center items-center bg-white rounded-full shadow-md absolute top-[-50px] right-[20px]">
        <FontAwesomeIcon icon={faArrowUpWideShort} style={{color: "#000000",}} />
      </div>
      <ul className={`${toggle ? 'block' : 'hidden'} flex flex-col items-start gap-2 absolute top-[-170px] right-[20px] bg-white p-3 rounded-[20px] shadow-md`}>
        <button value='input' onClick={(e) => onSortItems(e.target.value)}>Sort By Input</button>
        <button value='name' onClick={(e) => onSortItems(e.target.value)}>Sort By Name</button>
        <button value='checked' onClick={(e) => onSortItems(e.target.value)}>Sort By Checked</button>
      </ul>
    </section>
  )
}

export default AddNew