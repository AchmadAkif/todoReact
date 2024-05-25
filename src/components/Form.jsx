import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import {faArrowUpWideShort} from '@fortawesome/free-solid-svg-icons'

const Form = ({ 
  handleSubmit, 
  toggle, 
  setToggle,
  task,
  setTask }) => {
  return (
    <>
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
    </>
  )
}

export default Form