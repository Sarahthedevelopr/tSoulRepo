import React from "react";
import Images from "./Images";
import Heading from "./Heading";


function Card(props){

    return(
    <>
     <div className="cards">
         <div className="card">
            <Images imgsrc = {props.imgsrc} />
                 <div className="card__info">
                 <span className="card__category">{props.title}</span>
                 <Heading sname={props.sname} />
                 
                 <a href={props.link} target="Netflix_movies">
                     <button className="button">Watch Now</button>
                 </a>
             </div>
         </div>
     </div>
     </>
    );
    }

    export default Card;