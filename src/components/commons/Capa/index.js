import React from 'react';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import Text from '../foundation/Text';
import { CapaWrapper } from './styles';

export default function Capa() {
  return (
    <>
      <CapaWrapper>
        <Text
          tag="h1"
          variant="title"
          fontSize={{ md: '45px', xs: '30px' }}
          margin="15px"
        >
          {'<LEANDRO.RITTER />'}
        </Text>
        <Text tag="h2" variant="subtitle" fontSize="30px" margin="5px">
          Full-Stack developer
        </Text>
        <span style={{ fontSize: 25 }}>
          <Typewriter
            options={{
              strings: [
                'JavaScript',
                'PHP',
                'HTML',
                'CSS',
                'ReactJs',
                'NextJs',
                'Styled Components',
              ],
              autoStart: true,
              loop: true,
              delay: 20,
              deleteSpeed: 20,
            }}
          />
        </span>
        <CapaWrapper.Footer>
          <Link to="header" spy smooth duration={500}>
            <img
              alt="Seta para rolar"
              src="http://image.flaticon.com/icons/svg/3/3907.svg"
              id="arrow"
              className="animated bounce"
            />
          </Link>
        </CapaWrapper.Footer>
      </CapaWrapper>
    </>
  );
}
