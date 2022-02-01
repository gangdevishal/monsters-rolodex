import React from "react";
import './card.style.css'

const Card = (props) => {
  console.log(props);
  // let companySort = props.monster.sort((a, b) => a.company.name.localeCompare(b.company.name));
  // console.log(companySort);
  
  return (
    <div className="card-container">
    <img alt="monster" width={180} src={`https://robohash.org/${props.monster.id}?set=set2`} />
      <h1>{props.monster.name}</h1>
      <p>{props.monster.email}</p>
    </div>
  );
};

export default Card;
