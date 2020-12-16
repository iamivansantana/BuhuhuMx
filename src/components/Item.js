import React from "react";

const Item = () => {
  const a = ["a", "b", "c"];
  a[100] = "fox";
  console.log(a.length);

  return (
    <>
      <div className="container-grid">
        <div className="item-card">
          <div className="item-card-title">
            <div className="item-card-title-izq">
              <span style={{ marginLeft: "10%" }}>Mi Portafolio.</span>
            </div>
            <div className="item-card-title-der">
              <img
                src="Images/icon-g.png"
                alt="Enlace git"
                style={{ marginTop: "4%" }}
                height="80%"
              />
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
              <img
                src="Images/icon-g.png"
                alt="Enlace git"
                style={{ marginTop: "4%" }}
                height="80%"
              />
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
              <img
                src="Images/icon-g.png"
                alt="Enlace git"
                style={{ marginTop: "4%" }}
                height="80%"
              />
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
    </>
  );
};

export default Item;
