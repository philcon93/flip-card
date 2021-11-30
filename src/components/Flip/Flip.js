import React, { useRef, useEffect, useState } from "react";
import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.min.css";
import "./styles.css";

const underTen = (value) => {
  if (value < 10 && value !== 0) {
    return value;
  } else if (value === 10 || value === 0) {
    return 9;
  }

  return value - 10;
};

export const Flip = ({ value, countdown }) => {
  const divRef = useRef();
  const tickRef = useRef();
  const [tickValue, setTickValue] = useState(
    countdown ? underTen(value + 3) : value
  );

  useEffect(() => {
    const currDiv = divRef.current;
    const currentTick = tickRef.current;

    Tick.DOM.create(currDiv, {
      value: tickValue,
      didInit: (tick) => {
        tickRef.current = tick;
      },
      // repeat: true,
      view: {
        children: [
          {
            root: "div",
            style: ".tick",
            repeat: true,
            children: [
              {
                view: "flip"
              }
            ]
          }
        ]
      }
    });
    return () => Tick.DOM.destroy(currentTick);
  }, []);

  useEffect(() => {
    if (countdown) {
      const timer = Tick.helper.interval(() => {
        setTickValue((prevState) => {
          if (prevState === value) {
            return value;
          }

          const newValue = Math.abs(underTen(--prevState));

          return newValue;
        });
      }, 250);

      return () => {
        timer.stop();
      };
    }
  }, [value, countdown]);

  useEffect(() => {
    if (tickRef.current) {
      tickRef.current.value = tickValue;
    }
  }, [tickValue]);

  return <div ref={divRef} />;
};
