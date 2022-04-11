import "./SideBar.css"
import { AiOutlineDoubleLeft } from "react-icons/ai"
import { useRef } from "react"
import useOutsideClick from "./useOutsideClick";

function SideBar(props) {
  const refSidebar = useRef(null)
   useOutsideClick(refSidebar, props.open ? props.onclick : ()=>{}) 

  return (
    <div ref={refSidebar} className='wrapper'>
      <button onClick={props.onclick} className={`${!props.open ? "closeSBbutton close" : "closeSBbutton"}`}>{<AiOutlineDoubleLeft />}</button>
      <div className={!props.open ? "open-sideB close" : "open-sideB"}>
        <br />
        {props.children}
      </div>
    </div>
  )
}

export default SideBar