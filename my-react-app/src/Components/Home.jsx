import React from "react";
import "./Home.css"; // Import the CSS file

const Home = () => {
  return (
    <div className="container">
      <div className="box">
        <h1>Abilasha manne</h1>
        <p>Email: abilashamanne@gamil.com</p>
        <p>Phone: +91-9876543210</p>
        <button onClick={() => alert("You're amazing, bbg! 💖")}>Click Me ✨</button>
      </div>
    </div>
  );
};

export default Home;
