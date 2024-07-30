import { ReactNode } from "react";

const Choreography = () => {
  const balls = [1, 2, 3];
  return (
    <div className="app">
        <h1>Choreography</h1>
        <div className="container">
            {balls.map((ball, i) => <div className="container--ball" key={i} style={{'--i': i}}></div>)}
        </div>
    </div>
  )
}

export default Choreography