import React, { useState } from "react";
import { useSpring, a } from "react-spring";
import {
  AppContainer,
  MainContent,
  HeadingOne,
  HeadingTwo,
  SecondaryContent,
  Flip,
  FlipStatic
} from "./components";
import "./styles.css";

export default function App({
  currency,
  price,
  backgroundImage,
  endCard,
  headingOne,
  headingTwo,
  bodyOne,
  bodyUrl
}) {
  const [pause, setPause] = useState(false);
  const [flipProps, setFlip] = useState(false);
  const flipStyles = useSpring({
    from: { scale: 1 },
    to: { scale: 1.1 },
    reset: true,
    reverse: flipProps,
    delay: 1200,
    pause: pause,
    onRest: (data) => {
      if (data.value.scale === 1) {
        setPause(true);
      }
      return setFlip(!flipProps);
    }
  });
  const bgStyles = useSpring({
    from: { backgroundPosition: 0 },
    to: { backgroundPosition: -200 },
    config: { duration: 20000 },
    loop: { reverse: true }
  });

  return (
    <AppContainer>
      <MainContent
        gridArea="mainContent"
        img={backgroundImage}
        style={bgStyles}
      >
        <a.div style={flipStyles}>
          <HeadingOne>{headingOne}</HeadingOne>
          <div>
            <FlipStatic value="FROM" />
            <Flip value={currency} />
            {Array.from(price.toString()).map((num, index) => (
              <Flip key={index} value={Number(num)} countdown={true} />
            ))}
            {endCard && <FlipStatic value={endCard} />}
          </div>
        </a.div>
      </MainContent>
      <SecondaryContent gridArea="secondaryContent">
        <div>
          <HeadingTwo>{headingTwo}</HeadingTwo>
          <p>
            {bodyOne}
            <br />
            {bodyUrl}
          </p>
        </div>
      </SecondaryContent>
    </AppContainer>
  );
}

App.defaultProps = {
  currency: "$",
  price: "1198",
  backgroundImage: "image.jpg",
  endCard: "Per Couple",
  headingOne: "Flexible Changes",
  headingTwo: "Barossa Valley Wine & Dine Retreat",
  bodyOne:
    "^ Terms, conditions & select travel dates apply. Price and saving is per couple, twin share.",
  bodyUrl: "www.product.url/123"
};
