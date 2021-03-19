import React from 'react';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Text from '../foundation/Text';
import { CapaWrapper, SocialLinks } from './styles';
import { Wrapper } from '../foundation/layout/Wrapper';

export default function Capa({ colorWrapper }) {
  return (
    <>
      <Wrapper
        colorWrapper={colorWrapper}
        id="capa"
        fullHeight="sim"
        textAlign="center"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center">
        <SocialLinks>
          <SocialLinks.Ul>
            <li>
              <a
                href="https://github.com/r1tt3r"
                target="_blank"
                rel="noreferrer">
                <FaGithub size="25px" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/leandroritter/"
                target="_blank"
                rel="noreferrer">
                <FaLinkedin size="25px" />
              </a>
            </li>
          </SocialLinks.Ul>
        </SocialLinks>
        <CapaWrapper.Avatar />
        <Text
          tag="h1"
          variant="title"
          fontSize={{ md: '45px', xs: '30px' }}
          margin="15px">
          {'Leandro Ritter'}
        </Text>
        <Text tag="h2" variant="subtitle" fontSize="30px" margin="5px">
          Desenvolvedor Frontend
        </Text>
        <span style={{ fontSize: 25, color: '#B7DB14' }}>
          <Typewriter
            options={{
              strings: [
                'JavaScript',
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
      </Wrapper>
    </>
  );
}
