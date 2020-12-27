import React, { useState } from 'react'
import Skill from './Skill';

const Skills = () => {
    
    const[skillsUno] = useState([
        {nombre:'HTML5'},
        {nombre:'CSS3'},
        {nombre:'JAVASCRIPT'}
    ]);
    const[skillsDos]=useState([
        {nombre:'TYPESCRIPT'},
        {nombre:'REACT JS'},
        {nombre:'JAVA'}
    ]);
    const[skillsTres]=useState([
        {nombre:'SQL'},
        {nombre:'NODE.JS'},
        {nombre:'JSON'}
    ]);
    const[skillsCuatro]=useState([
        {nombre:'GIT & GITHUB'},
        {nombre:'PHOTOSHOP'},
        {nombre:'ILLUSTRATION'}
    ]);
    const[numberSkills]=useState([skillsUno,skillsDos,skillsTres,skillsCuatro]);

    const URL = 'https://drive.google.com/file/d/1ASAqUGqMAbjJKrVmRYND903qsVYwQahe/view?usp=sharing'
    return (
        <>
            <div className="body-area3">
                <div className="titulo">
                    <h1 > P R O F E S S I O N A L - S K I L L S</h1>
                </div>
                <div className="skills">
                    {
                      numberSkills.map((numbers,i)=>(//el parametro i es para utilizar la iteracion de cada map y despues utilizarlo como key
                        <div className="row" key={i}>
                            {numbers.map(datos=>(                                
                                <Skill 
                                key={datos.nombre}
                                datos={datos}
                                />
                            ))}
                        </div>                    
                      ))  
                    }
                </div>
                

                
                <a
                    href={URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{textDecoration:'none'}}
                    className="resume-cont"
                >
                    {/* <span>SHOW RESUME</span> */}
                    <span
                    style={{color:'white'}}
                >Show Resume  </span>

                    <span
                        style={{fontSize:'1rem'}}
                        className="resume"
                        > ➡
                    
                    </span>
                </a>
                
            </div>  
        </>
    )
}

export default Skills
