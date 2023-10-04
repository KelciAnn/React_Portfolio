import React from "react";
import "./style.css";

const Background = () => {
  return (
    <div className="back_container">
      <div id="college">
        <h2>Ashland University</h2>
        <p className="bold_paras">Magna Cum Laude</p>
        <p>Associates of Arts, 2021 - 2023</p>
      </div>

      <div id="bootcamp">
        {/* background */}
        <h2>Persevere</h2>
        <p className="bold_paras">Fullstack Developer</p>
        <p>2022 - 2023</p>
      </div>

      <div id="work">
        <h2>Televerde</h2>
        <p className="bold_paras">Sales / Marketing</p>
        <p>2019 - 2022</p>
      </div>
    </div>
  );
};
export default Background;
