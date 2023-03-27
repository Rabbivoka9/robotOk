import React from "react"; 

 function Popup (props){
    return(
        <div className="modal">
            <button className="cont-popup">
                <p>{props.name}</p>
                <p>{props.username}</p>
                <p>{props.tel}</p>
                <p>{props.Email}</p>
            </button>
        </div>
    )
    
 } export default Popup