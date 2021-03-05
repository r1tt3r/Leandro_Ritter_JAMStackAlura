import styled from 'styled-components';

export const ContactButton = styled.div`
  /* border: 2px solid #62750a;
  border-radius: 30px;
  padding: 20px;
  font-weight: 800;
  font-size: 24px;
  &:hover {
    background: #b7db14;
    color: #fff;
  } */
  position: relative;
  display: inline-block;
  padding: 20px 30px;
  text-align: center;
  text-transform: uppercase;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  border: 2px solid #62750a;
  border-radius: 15px;
  margin-bottom: 20px;
  box-sizing: border-box;
  color: #3d3d3d;
  transition-property: color;
  transition-duration: 0.5s;

  &.btn--border.btn--primary {
    border: 1px solid #3d3d3d3;
  }

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
