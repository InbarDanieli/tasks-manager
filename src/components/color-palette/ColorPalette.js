import React, { useState } from 'react';
import "./ColorPalette.css"

function SelectColors({ colorClicked, colorValue }) {
  const colorarr = ["yellow", "orange", "red", "green", "blue", "purple","transparent"]
  const [openPallete, setOpenPallete] = useState(false)
  const [bordercolor, setBordercolor] = useState(colorValue || "transparent")

  function colorClickedHandler(color) {
    setBordercolor(color)
    colorClicked(color)
    setOpenPallete(!openPallete)
  }
  
  return (
    <>
      <div className='container'>
        <div className='colorWrapper'>
        <button className={bordercolor} onClick={() => setOpenPallete(!openPallete)}></button>
        </div>
        {openPallete &&
          colorarr.filter((color)=> color !== bordercolor).map((color, index) =>
            <div key={index+color} className='colorWrapper'> <button className={color} onClick={() => {colorClickedHandler(color)}} ></button> </div>
          )
        }
      </div>
    </>
  )
}

export default SelectColors;
