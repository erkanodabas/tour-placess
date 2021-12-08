import React from "react";
import { data } from "../data";
import "./card.css" 
const Card = (props) =>{
    <h1>Popular Tour Places</h1>
    return(
        <div className = "Card-container" >
          {data.map((card,index)=>{
              return(
                    <div className="card"> 
                    <div className="title"><h2>{card.title}</h2></div>
                    <img src = {card.image}></img>
                    <div className="cardover"><p>{card.desc}</p></div>
                    </div>
          )})}
        </div>

            
    )
}

export default Card;