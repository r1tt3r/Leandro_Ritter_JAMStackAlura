import styled from 'styled-components';

export const CapaWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
  /* background: ${({ theme }) => theme.colors.primary.main.color}; */
  color: #fff;
  background-color: #3d3d3d;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='75' height='75' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='46' height='46' fill-opacity='0.6' fill='%234f4f4f'/%3E%3C/svg%3E");
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
