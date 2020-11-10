import React from 'react';
import { Parallax } from 'react-parallax';


const About = () => {
    const imagen = 'https://cdn.pixabay.com/photo/2016/04/12/11/19/coffee-1324126_960_720.jpg';
    
    return (
        <div className="body-area2">
             <Parallax
                bgImage={imagen}
                bgImageStyle={{height: '0%'}}
                strength={200}
                renderLayer={percentage => (
                    <div>
                        <div 
                            className="aboutme"
                            style={{
                                transform:`translate(-${percentage * 200}%, 0%)`
                            }}
                        >
                            <h1>About Me</h1>
                        </div>
                        <div 
                            className="lineMe"
                            style={{
                                transform:`translate(${percentage * 200}%, 0%)`
                            }}
                        >
                            <p id="lineMeText" >Designer &amp; Web Developer.</p> 
                        </div>
                        <div 
                            className="LineDesc"
                            style={{
                                transform:`translate(0%, ${percentage * 200}%)`
                            }}
                        >
                            <p>
                            <i className="em em-wave"></i>Hola, mi nombre es Iván Santana, soy Diseñador y Desarrollador web.
                                Mi enfoque ha sido principalmente el desarrollo web front-end.
                                <br></br><br></br>
                                Soy una persona responsable, comprometida con cualquier proyecto que se lleve a cabo, entusiasta, creativa y colaborativa, trabajando en equipo, aprendiendo de los demás y ayudando en todo momento.
                                <br></br><br></br>

                                Por otro lado me encanta disfrutar de las pequeñas y grandes cosas de la vida, soy apasionado de la música, me encantan los lugares con música en vivo,<i className="em em-the_horns" ></i><i className="em em-sunglasses" ></i> amo viajar,<i className="em em-earth_americas" ></i> me fascinan los perros<i className="em em-dog" ></i> y mi trabajo como desarrollador.<i className="em em-computer" ></i><i className="em em-muscle" ></i>
                            </p>
                        </div>
                        <div className="photo2"></div>

                    </div>
                )}
             >
                 <div style={{height:'600px'}}> 
                        {/* <img className="text" src="ios.png" alt="ios" width="100%"/>  */}
                        
                 </div>
             </Parallax>

            
        </div>
    )
}

export default About
