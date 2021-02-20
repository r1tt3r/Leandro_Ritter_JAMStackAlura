import React from "react";
import Typewriter from "typewriter-effect";
import { Box } from "../foundation/layout/Box";
import Text from "../foundation/Text";
import { CapaWrapper } from "./styles";

export default function Capa() {
  return (
    <>
      <CapaWrapper>
        <Text tag="h1" variant="title" fontSize="45px" margin="15px">
          {"<LEANDRO.RITTER />"}
        </Text>
        <Text tag="h2" variant="subtitle" fontSize="30px" margin="5px">
          Full-Stack developer
        </Text>
        <span style={{ fontSize: 25 }}>
          <Typewriter
            options={{
              strings: [
                "JavaScript",
                "PHP",
                "HTML",
                "CSS",
                "ReactJs",
                "NextJs",
                "Styled Components",
              ],
              autoStart: true,
              loop: true,
              delay: 20,
              deleteSpeed: 20,
            }}
          />
        </span>
        <CapaWrapper.Footer>
          <img
            src="http://image.flaticon.com/icons/svg/3/3907.svg"
            id="arrow"
            className="animated bounce"
          />
        </CapaWrapper.Footer>
      </CapaWrapper>
    </>
  );
}
