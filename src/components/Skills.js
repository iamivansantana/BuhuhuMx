import React, { useState } from 'react'
import Skill from './Skill';

const Skills = () => {
    
    const[skillsUno] = useState([
        {nombre:'HTML5',pad:'Images/html5.svg'},
        {nombre:'CSS3',pad:'Images/css3.svg'},
        {nombre:'JAVASCRIPT',pad:'Images/js.png'}
    ]);
    const[skillsDos]=useState([
        {nombre:'TYPESCRIPT',pad:'Images/typescript.png'},
        {nombre:'REACT JS',pad:'Images/react.png'},
        {nombre:'JAVA',pad:'Images/java.png'}
    ]);
    const[skillsTres]=useState([
        {nombre:'SQL',pad:'Images/sql.png'},
        {nombre:'NODE.JS',pad:'Images/node.png'},
        {nombre:'JSON',pad:'Images/json.png'}
    ]);
    const[skillsCuatro]=useState([
        {nombre:'GIT & GITHUB',pad:'Images/hit.png'},
        {nombre:'PHOTOSHOP',pad:'Images/ps.png'},
        {nombre:'ILLUSTRATION',pad:'Images/ai.png'}
    ]);
    const[numberSkills]=useState([skillsUno,skillsDos,skillsTres,skillsCuatro]);

    return (
        <>
            <div className="body-area3">
                <div className="titulo">
                    <h1 > P R O F E S S I O N A L - S K I L L S</h1>
                </div>
                <div className="skills">
                    {
                      numberSkills.map(numbers=>(
                        <div className="row" key={numbers[numbers]}>
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
            </div>  
        </>
    )
}

export default Skills
