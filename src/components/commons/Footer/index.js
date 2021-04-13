/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Box } from '../foundation/layout/Box';
// eslint-disable-next-line import/no-cycle
import { WebsitePageContext } from '../../wrappers/WebsitePage';

const ContactButton = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  text-align: center;
  text-transform: uppercase;
  background: transparent;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  border: 2px solid #62750a;
  border-radius: 5px;
  margin-top: 20px;
  box-sizing: border-box;
  color: #fff;
  transition-property: color;
  transition-duration: 0.5s;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #b7db14;
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition-property: transform;
    transition-duration: 0.5s;
    transition-timing-function: ease-out;
    z-index: -1;
  }

  &:hover {
    color: black;

    &:before {
      transform: scaleX(1);
      transition-timing-function: cubic-bezier(0.45, 1.64, 0.47, 0.66);
    }
  }
`;

const FooterWrapper = styled.footer`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-right: 28px;
  padding-left: 28px;
  background: ${({ colorWrapper }) =>
    colorWrapper === 'white' ? '#2a2a2a' : '#202020'};
  border-top: 1px solid hsla(0, 0%, 40%, 0.3);
  padding: 20px;
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: ${({ theme }) => theme.colors.primary.main.color};
    text-decoration: none;
    transition: 0.3s;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
  }
`;

export default function Footer(props) {
  const websitePageContext = React.useContext(WebsitePageContext);

  return (
    <FooterWrapper id="footer" {...props}>
      <Box>
        <a
          href="https://github.com/r1tt3r"
          target="_blank"
          rel="noreferrer"
          style={{ marginRight: '10px' }}>
          <FaGithub size="30px" />
        </a>
        <a
          href="https://www.linkedin.com/in/leandroritter/"
          target="_blank"
          rel="noreferrer">
          <FaLinkedin size="30px" />
        </a>
      </Box>

      <Box>
        <ContactButton onClick={() => websitePageContext.toggleModalContato()}>
          Entrar em contato
        </ContactButton>
      </Box>
    </FooterWrapper>
  );
}
