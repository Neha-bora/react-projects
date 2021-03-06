import React from "react";
import Avata from "./Avata";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avata img={props.img} />
      </div>
      <div className="bottom">
        <Detail detailsInfo={props.tel} />
        <Detail detailsInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
