import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding-right: 28px;
  padding-left: 28px;
  background: rgb(183, 219, 20);
  background: linear-gradient(
    98deg,
    rgba(183, 219, 20, 1) 0%,
    rgba(98, 117, 11, 1) 58%
  );
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
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a
        href="https://github.com/r1tt3r"
        target="_blank"
        rel="noreferrer"
        style={{ marginRight: '10px' }}
      >
        <FaGithub size="30px" />
      </a>
      <a
        href="https://www.linkedin.com/in/leandroritter/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin size="30px" />
      </a>
    </FooterWrapper>
  );
}
