import React from "react";

const Item = () => {
  

  return (
    <><div className="items-cont">
      <div className="container-grid">
        <div className="item-card">
          <div className="item-card-title">
            <div className="item-card-title-izq">
              <span style={{ marginLeft: "10%" }}>Portfolio.</span>
            </div>
            <div className="item-card-title-der">
              {/* <img
                src="Images/icon-g.png"
                alt="Enlace git"
                
              /> */}
              <a href='https://github.com/'
                target="_blank"
                rel="noopener noreferrer"
                style={{textDecoration:'none',color:"black",fontSize:"2.2rem"}}
                className="social-icons"><i class="fa fa-github"></i>
              </a>
            </div>
          </div>
          <div className="item-card-conten">
            <div className="item-card-left">
              <img
                className="center"
                src="Images/captura-pc.png"
                alt="imagen1"
                width="98%"
              />
            </div>
            <div className="item-card-right">
              <img
                className="center"
                src="Images/captura-cel.png"
                alt="imagen2"
                width="85%"
              />
            </div>
          </div>
          <div className="item-card-description">
            <span>
                Project developed with, ReactJS.<br /> 
                clic here for more....
            </span>
          </div>
        </div>
        
        <div className="item-card">
          <div className="item-card-title">
            <div className="item-card-title-izq">
              <span style={{ marginLeft: "10%" }}>Portfolio.</span>
            </div>
            <div className="item-card-title-der">
            <a href='https://github.com/'
                target="_blank"
                rel="noopener noreferrer"
                style={{textDecoration:'none',color:"black",fontSize:"2.2rem"}}
                className="social-icons"><i class="fa fa-github"></i>
              </a>
            </div>
          </div>
          <div className="item-card-conten">
            <div className="item-card-left">
              <img
                className="center"
                src="Images/captura-pc.png"
                alt="imagen1"
                width="98%"
              />
            </div>
            <div className="item-card-right">
              <img
                className="center"
                src="Images/captura-cel.png"
                alt="imagen2"
                width="85%"
              />
            </div>
          </div>
          <div className="item-card-description">
            <span>
                Este Proyecto fue desarrollado con ReactJS y otros. 
                Haz clic aqui para mostrar mas....
            </span>
          </div>
        </div>
        <div className="item-card">
          <div className="item-card-title">
            <div className="item-card-title-izq">
              <span style={{ marginLeft: "10%" }}>Mi Portafolio.</span>
            </div>
            <div className="item-card-title-der">
            <a href='https://github.com/'
                target="_blank"
                rel="noopener noreferrer"
                style={{textDecoration:'none',color:"black",fontSize:"2.2rem"}}
                className="social-icons"><i class="fa fa-github"></i>
              </a>
            </div>
          </div>
          <div className="item-card-conten">
            <div className="item-card-left">
              <img
                className="center"
                src="Images/captura-pc.png"
                alt="imagen1"
                width="98%"
              />
            </div>
            <div className="item-card-right">
              <img
                className="center"
                src="Images/captura-cel.png"
                alt="imagen2"
                width="85%"
              />
            </div>
          </div>
          <div className="item-card-description">
            <span>
                Este Proyecto fue desarrollado con ReactJS y otros. 
                Haz clic aqui para mostrar mas....
            </span>
          </div>
        </div>
        
      </div>
      </div>
      <h3 style={{textAlign:"center",position:'relative',bottom:'-80px',cursor:'pointer'}}>See More...</h3>
    </>
  );
};

export default Item;
