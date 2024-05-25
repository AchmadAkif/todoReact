import styles from "../style"

import { useState } from "react"
import { v4 as uuidv4} from 'uuid'

import Form from "./Form"

//Add New task component
const AddNew = ({onAddItem, onSortItems}) => {
  const [task, setTask] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(task);
  };
  
  return (
    <section className={`w-full ${styles.paddingX} py-5 font-inter sticky bottom-0 bg-white`}>
      <Form handleSubmit={handleSubmit} toggle={toggle} setToggle={setToggle} task={task} setTask={setTask} />
    </section>
  )
}

export default AddNew