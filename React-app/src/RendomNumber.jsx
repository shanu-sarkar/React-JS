import React from 'react'

function RendomNumber() {
    let number = Math.random() * 100
  return (
        <h1>Rebdom no is: {Math.floor(number)}</h1>
  )
}

export default RendomNumber;
