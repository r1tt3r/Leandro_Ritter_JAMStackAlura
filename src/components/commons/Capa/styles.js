import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

export const SocialLinks = styled.div`
  width: auto;
  position: absolute;
  left: 15px;
  bottom: 15px;
  z-index: 1;
  display: none;

  &:before {
    content: '';
    width: 1px;
    height: 50px;
    background: hsla(0, 0%, 49%, 0.4);
    position: absolute;
    left: 13px;
    top: -50px;
  }
  &:after {
    color: #888;
    content: 'SOCIAL';
    position: absolute;
    left: -29px;
    top: -115px;
    letter-spacing: 5px;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
  a {
    color: #fff;
    margin-bottom: 30px;
  }
  ${breakpointsMedia({
    md: {
      display: css`initial`,
    },
  })}
`;

SocialLinks.Ul = styled.ul`
  list-style: none;
  padding-inline-start: 0;
`;

export const CapaWrapper = styled.section`
  width: 100%;
  height: '100vh';
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #202020;
  /* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='75' height='75' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='46' height='46' fill-opacity='0.6' fill='%234f4f4f'/%3E%3C/svg%3E"); */
`;
CapaWrapper.Avatar = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url('/images/avatar.png');
  background-repeat: no-repeat;
  background-size: cover;
  border: 3px solid #909090;
  margin-bottom: 30px;
`;
CapaWrapper.Footer = styled.div`
  img {
    width: 30px;
    margin: 0px 0 0 -10px;
    line-height: 60px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    filter: invert(100%);
  }
  .bounce {
    animation-iteration-count: infinite;
    animation-duration: 1.5s;
    animation: bounce 3.6s ease infinite;
    transform-origin: 50% 50%;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    5.55556% {
      transform: translateY(0);
    }
    11.11111% {
      transform: translateY(0);
    }
    22.22222% {
      transform: translateY(-15px);
    }
    27.77778% {
      transform: translateY(0);
    }
    33.33333% {
      transform: translateY(-15px);
    }
    44.44444% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
