import React, { useState, useRef } from "react";
import { useSpring, a } from "react-spring";
import {
  AppContainer,
  MainContent,
  Heading,
  SecondaryContent,
  Flip,
  FlipStatic
} from "./components";
import "./styles.css";

export default function App({ price = 1198 }) {
  const [pause, setPause] = useState(false);
  const [flip, setFlip] = useState(false);
  const props = useSpring({
    to: { scale: 1.1 },
    from: { scale: 1 },
    // loop: () => 3 > n.current++,
    reset: true,
    reverse: flip,
    delay: 1200,
    pause: pause,
    onRest: (data) => {
      if (data.value.scale === 1) {
        setPause(true);
      }
      return setFlip(!flip);
    }
  });

  return (
    <AppContainer>
      <MainContent gridArea="mainContent" img="image.jpg">
        <a.div style={props}>
          <Heading>Flexible Changes</Heading>
          <div>
            <FlipStatic value="FROM" />
            <Flip value={"$"} />
            {Array.from(price.toString()).map((num, index) => (
              <Flip key={index} value={Number(num)} countdown={true} />
            ))}
            <FlipStatic value="Per Couple" />
          </div>
        </a.div>
      </MainContent>
      <SecondaryContent gridArea="secondaryContent">
        <h2>Barossa Valley</h2>
        <h2>Wine & Dine Retreat</h2>
        <p>
          ^ Terms, conditions & select travel dates apply. Price and saving is
          per couple, twin share.
          <br /> www.flightcentre.com.au/product/12879562
        </p>
      </SecondaryContent>
    </AppContainer>
  );
}
