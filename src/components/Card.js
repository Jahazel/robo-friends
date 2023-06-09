import React from "react";

// recieving props, and the desctructuring it
// this is a ES6 thing
const Card = ({ name, email, id }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
      {/* because this format is a JS feature, you need to use curly brackets */}
      {/* anything is JS needs to be placed inside curly brackets */}
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
