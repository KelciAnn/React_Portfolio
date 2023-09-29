import React, { useState, useEffect } from "react";
import "./style.css";
import Introduction from "../Introduction/Introduction";

const Parallax = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.addEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="parallax-container">
      <div
        className="parallax"
        style={{
          transform: `translate(ranslate(${offset.x / 10}px, ${
            offset.y / 10
          }px))`,
        }}
      ></div>
      <div className="content">
        {/* <Introduction /> */}
        <h1 id="intro_h">Hello, I am Kelci</h1>
        <p id="intro_p">
          Highly Enthusiastic, Driven, Awesome Fullstack Developer
        </p>
      </div>
    </div>
  );
};
export default Parallax;
