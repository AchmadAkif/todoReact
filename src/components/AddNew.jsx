import styles from "../style"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const Input = () => {
  return (
    <div className="w-full h-14 flex items-center mb-5 px-5 border-[1px] border-primary rounded-[10px]" >
      <input type="text" className="w-full h-full focus:outline-none" />
      <FontAwesomeIcon icon={faCircleXmark} size="xl" style={{color: "#5438dc",}} />
    </div>
  )
}


const Button = () => {
  return (
    <div className="w-full h-14 flex justify-center items-center bg-primary rounded-[10px]">
      <p className="font-inter font-medium text-[18px] text-white">Add Task</p>
    </div>
  )
}

const AddNew = () => {
  return (
    <section className={`w-full ${styles.paddingX} ${styles.paddingY} font-inter sticky bottom-0 bg-white`}>
      <Input />
      <Button />
    </section>
  )
}

export default AddNew