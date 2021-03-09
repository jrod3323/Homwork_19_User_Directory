import React from "react";

function Discover() {

  return (
      <div>
        <h1 className={"text-center"}>Make New Friends</h1>
        <h3 className={"text-center"}>Thumbs up on any pups you'd like to meet!</h3>
        <div className={"card"} style={{backgroundImage:  this.state.image}}>
            <button className={"card-btn pass"} data-value={"pass"} style={{"opacity": "1"}}></button>
            <button className={"card-btn pick"} data-value={"pick"} style={{"opacity": "1"}}></button>
        </div>
        <h1 className={"text-center"}>
            {/* adjust 0 to populate with state count */}
            Made friends with 0 pups so far!
        </h1>
        <div className={"alert alert-success fade in"} style={{"width": "80%", "margin": "18px auto 0px", "opacity": "0"}}>Yay! That Pup Liked You Too!!!</div>
      </div>
  );
}

export default Discover;