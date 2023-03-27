import React,{useState} from "react";
import Modal from "./Poppup";
import Popup from "./Poppup";


function Card({robo}){
    const [openModal,setOpenModal]=useState(false)
    function modal() {
        setOpenModal(true);
    }
    return (
        <div className="card" onClick={modal}>
            <div>
                <img className="ig" src={`https://robohash.org/${robo.name}.png`}/>
                <h3 className="tex" >{robo.name}</h3>
                <h5 className="tex1" >{robo.email}</h5>
            </div>
            
            { openModal &&
                ( 
                         <Popup name={robo.name} /> 
                
                )
            }
            
        </div>
        
    )
}
export default Card;