import React from 'react'

const Item = () => {
    return (
        <>
        <div className="items" style={{width:'95%'}}>
            <div className="row">
                <div className="column">
                    <div className="item-card" style={{backgroundColor:'black'}}>
                        <div className="item-card-title">
                            <div className="item-card-title-izq">
                                <span>Hola mundo</span>
                            </div>
                            <div className="item-card-title-der"></div>
                        </div>
                        <div className="item-card-conten">
                            <div className="item-card-left" ></div>
                            <div className="item-card-right"></div>
                        </div>
                        <div className="item-card-description"></div>
                    </div>
                </div>
                <div className="column">
                    <div className="item-card" style={{backgroundColor:'black'}}>
                    </div>
                </div>
                <div className="column">
                    <div className="item-card" style={{backgroundColor:'black'}}>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Item