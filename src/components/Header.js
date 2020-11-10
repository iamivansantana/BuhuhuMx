import React, { useState } from 'react'


const Header = () => {
    const[estado,setEstado]= useState(true);

    const clickbotones = ()=>{
        if(estado){
            setEstado(false);  
            console.log(estado);  
        }else{
            
            // const navbar = document.getElementById('btn');
            // navbar.href='seccion1';
            setEstado(true);
            console.log(estado);  
        }
        
        
    }
    
    return (
        <>
        <div className="fondo" id='seccion1'>
            <div className="nbp">
                <div className="nabvar1"></div> 
                <a href="https://www.buhuhu.mx" className="logo">B</a>
                <div className="botones">
                    <nav id="nav">
                        
                            <a className="nabvar-section nabvar-tittle" href="#seccion2">&lt; ABOUT ME &#160;&#160;/&gt;</a>
                            <a className="nabvar-section nabvar-tittle" href="#seccion3">&lt; PORTFOLIO&#160;&#160;/&gt;</a>
                            <a className="nabvar-section nabvar-tittle" href="https://www.buhuhu.mx">&lt; POSTS &#160;&#160;/&gt;</a>
                            <a className="nabvar-section nabvar-tittle" href="https://www.buhuhu.mx">&lt; CONTACT&#160;&#160;/&gt;</a>
                        
                    </nav>
                    <a className="toggle-btn" id="btn" href="#ejemplo1" onClick={clickbotones}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
                   
                    {estado
                    ?<div className="lightbox" style={{display:"none"}} id="ejemplo1">
                        <figure>
                            <div  className="close" onClick={clickbotones} ></div>
                        </figure>
                    </div>
                    :<div className="lightbox" id="ejemplo1">
                        <figure>
                            <div  className="close" onClick={clickbotones}></div>
                                
                            <figcaption>
                            <div className="toggle-close"><span onClick={clickbotones} style={{transform: "scale(2)", fontWeight: "300"}}>|||</span></div>
                                <a className="nabvar-section nabvar-tittle" href="#seccion2" onClick={clickbotones}>&lt; ABOUT ME &#160;&#160;/&gt;</a>
                                <a className="nabvar-section nabvar-tittle" href="#seccion3" onClick={clickbotones}>&lt; PORTFOLIO&#160;&#160;/&gt;</a>
                                <a className="nabvar-section nabvar-tittle" href="#seccion1" onClick={clickbotones}>&lt; POSTS &#160;&#160;/&gt;</a>
                                <a className="nabvar-section nabvar-tittle" href="#seccion1" onClick={clickbotones}>&lt; CONTACT&#160;&#160;/&gt;</a></figcaption>
                        </figure>
                    </div>}  
            </div>
        </div>  
        </>
    )
}

export default Header
