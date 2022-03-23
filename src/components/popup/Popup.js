import React from 'react'

function Popup({onExit, bordercolor, children, ReturnItem, tooltip, confirm, cancel}) {
  return (
    <div
      className="modalBackground"
      onClick={onExit}
    >
      <div
        className="modalContainer"
        style={{ borderColor: `${bordercolor !== "transparent" ? `var(--${bordercolor}color)` : "transparent"}` }}
        onClick={(e) => { e.stopPropagation() }}
      >

        <button
          className="closeButton"
          onClick={onExit}>
          <b>X</b>
        </button>

        {children}

        <div className="changesButtons">
          <button
            className="saveButton"
            onClick={ReturnItem}>
            {confirm} {tooltip && <span className="required">please fill required fields</span>}
          </button>
          <button
            className="cancelButton"
            onClick={onExit}>{cancel}</button>
        </div>

      </div>
    </div>
  )
}

Popup.defaultProps = {
  confirm: "save",
  cancel: "cancle",
}
export default Popup
