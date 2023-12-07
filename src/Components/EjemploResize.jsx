import React, { useEffect } from 'react'

const EjemploResize = () => {
    const onResize = () => {

    }
  
    useEffect(() => {
        window.addEventListener('resize', onResize)
        return () => {
            console.log('Se desmontó el Componente Resize')
            window.removeEventListener('resize', onResize)
        }
    }, [])
  return (
    <div>EjemploResize</div>
  )
}

export default EjemploResize