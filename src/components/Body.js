import React from 'react'
import About from './About';
import Item from './Item';
import Portada from './Portada';
import Skills from './Skills';



    const Body = () => {
        
    return (
        <>
        <section >
          <Portada />            
        </section>
        <section id='seccion2'>
            <About />
        </section>
        <section id='seccion3'>
            <Skills />
        </section>
        <section id='seccion4'>
            <h3 style={{textAlign:"center"}}>Sección en Producción...</h3>
            <Item />
        </section>
            

        </>
    )
}

export default Body
