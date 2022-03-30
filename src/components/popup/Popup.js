import React from 'react'

function Popup(props) {
  return (
    <div
      className="modalBackground"
      onClick={props.onExit}
    >
      <div
        className="modalContainer"
        style={{ borderColor: `${props.bordercolor !== "transparent" ? `var(--${props.bordercolor}color)` : "transparent"}` }}
        onClick={(e) => { e.stopPropagation() }}
      >

        <button
          className="closeButton"
          onClick={props.onExit}>
          <b>X</b>
        </button>

        {props.children}

        <div className="changesButtons">
          <button
            className="saveButton"
            onClick={props.ReturnItem}>
            {props.confirm} {props.tooltip && <span className="required">please fill required fields</span>}
          </button>
          <button
            className="cancelButton"
            onClick={props.onExit}>{props.cancel}</button>
        </div>

      </div>
    </div>
  )
}

Popup.defaultProps = {
  confirm: "save",
  cancel: "cancel",
}
export default Popup
