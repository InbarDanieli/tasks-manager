import "./SideBar.css"
import { AiOutlineDoubleLeft } from "react-icons/ai"

function SideBar(props) {

  return (
    <div className='wrapper'>
      <button onClick={props.onclick} className={`${!props.open ? "closeSBbutton close" : "closeSBbutton"}`}>{<AiOutlineDoubleLeft />}</button>
      <div className={!props.open ? "open-sideB close" : "open-sideB"}>
        <br />
        {props.children}
      </div>
    </div>
  )
}

export default SideBar