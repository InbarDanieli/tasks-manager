import React, { useEffect, useState } from 'react'
import "./SideBar.css"
import { AiOutlineDoubleLeft } from "react-icons/ai"

function SideBar(props) {
  const [classN, setClassN] = useState("open-sideB close")
  const [classNClose, setClassNClose] = useState("closeSBbutton close")

  useEffect(()=>{
    props.open ? setClassN("open-sideB close") : setClassN("open-sideB")
    props.open ? setClassNClose("closeSBbutton close") : setClassNClose("closeSBbutton")
  }, [props.open])

  return (
    <div className='wrapper'>
      <button onClick={props.onclick} className={`${classNClose}`}>{<AiOutlineDoubleLeft />}</button>
      <div className={classN}>
        <br />
        {props.children}
      </div>
    </div>
  )
}

export default SideBar