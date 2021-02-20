import styled from 'styled-components';

export const CapaWrapper = styled.section`
  /* flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary.main.color};
  color: ${({ theme }) => theme.colors.primary.main.contrastText};
`;

CapaWrapper.Footer = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */

  img {
    width: 30px;
    margin: 0px 0 0 -40px;
    line-height: 60px;
    position: absolute;
    left: 50%;
    bottom: 0px;
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
