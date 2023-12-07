import React, { useState } from 'react'

const MouseOver = () => {

    const [active, setActive] = useState(false)
    const  [blur, setBlur] = useState(false)
  return (
    <div 
        onMouseOver={() => setActive(true)}
        onMouseLeave={() => setBlur(true)}
        style={{width: 300, height:300, background: 'beige'}}
    >
        <h3 style={{color: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {active  ? 'Reposaste el mouse por acá' : 'Pasa el mouse por acá'}
            
        </h3>
        <h3 style={{color: 'black'}}
        >{(active && blur) && 'por que te fuiste?'}</h3>
    </div>
  )
}

export default MouseOver