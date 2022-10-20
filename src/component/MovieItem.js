import React from "react";

export default function MovieItem({imageUrl ,imageAlt , year, title , distributor , amount}) {
  return (
    <div className="card" style={{width: '18rem',backgroundColor: "black"}}>
      <img
        src={imageUrl}
        className="card-img-top"
        alt={imageAlt}
      />
      <div className="card-body">
        <h4 className="card-text">
         #{title} ({year})
        </h4>
        <hr />
        <p>
        Distributor : {distributor}
        </p>
        <hr />
        <span>
          Amount : {amount}
        </span>
      </div>
    </div>
  );
}
