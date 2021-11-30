import React from "react";
import "./styles.css";

export const FlipStatic = ({ value }) => {
  return (
    <div className="tick">
      <span className="tick-flip-top-card">{value}</span>
      <span data-view="flip" className="tick-flip">
        <span className="tick-flip-card">
          <span
            className="tick-flip-panel-front tick-flip-front tick-flip-panel"
            style={{ transform: "rotateX(0deg)" }}
          >
            <span className="tick-flip-panel-front-text">
              <span className="tick-flip-panel-text-wrapper">{""}</span>
            </span>
            <span
              className="tick-flip-panel-front-shadow"
              style={{ opacity: "0" }}
            ></span>
          </span>
          <span
            className="tick-flip-panel-back tick-flip-back tick-flip-panel"
            style={{ transform: "rotateX(-180deg)" }}
          >
            <span className="tick-flip-panel-back-text">
              <span className="tick-flip-panel-text-wrapper"></span>
            </span>
            <span
              className="tick-flip-panel-back-highlight"
              style={{ opacity: "2" }}
            ></span>
            <span className="tick-flip-panel-back-shadow"></span>
          </span>
        </span>
        <span className="tick-flip-card">
          <span
            className="tick-flip-panel-front tick-flip-front tick-flip-panel"
            style={{ transform: "rotateX(-180deg)" }}
          >
            <span className="tick-flip-panel-front-text">
              <span className="tick-flip-panel-text-wrapper"></span>
            </span>
            <span
              className="tick-flip-panel-front-shadow"
              style={{ opacity: "0" }}
            ></span>
          </span>
          <span
            className="tick-flip-panel-back tick-flip-back tick-flip-panel"
            style={{ transform: "rotateX(-360deg)" }}
          >
            <span className="tick-flip-panel-back-text">
              <span className="tick-flip-panel-text-wrapper">{""}</span>
            </span>
            <span
              className="tick-flip-panel-back-highlight"
              style={{ opacity: "0" }}
            ></span>
            <span
              className="tick-flip-panel-back-shadow"
              style={{ opacity: "0" }}
            ></span>
          </span>
        </span>
        <span className="tick-flip-spacer"> </span>
        <span className="tick-flip-shadow-top tick-flip-shadow tick-flip-front"></span>
        <span className="tick-flip-shadow-bottom tick-flip-shadow tick-flip-back"></span>
        <span
          className="tick-flip-card-shadow"
          style={{ opacity: "0", transform: "scaleY(0)" }}
        ></span>
      </span>
    </div>
  );
};
