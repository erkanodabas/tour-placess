import React from "react";
import { data } from "../data";

const Card = (props) =>{
    return(
        <div className = "Card-container" >
          {data.map((card,index)=>{
              return(
                    <div className="card"> 
                    <div className="title"><h2>{card.title}</h2></div>
                    <img src = {card.image}></img>
                    <div><p>{card.desc}</p></div>
                    </div>
          )})}
        </div>

            
    )
}

export default Card;