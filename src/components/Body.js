import React from 'react'
import About from './About';
import Contact from './Contact';
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
            <h3 style={{textAlign:"center",textTransform:'uppercase'}}>Projects</h3>
            <Item />
            
        </section>
        <section id='seccion5'>
            <Contact />
        </section>
            

        </>
    )
}

export default Body
