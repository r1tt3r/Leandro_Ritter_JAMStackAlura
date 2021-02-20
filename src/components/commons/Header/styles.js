import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  /* padding: 10px; */
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-evenly;
  top: 0px;
  left: 0px;
  border-bottom: 1px solid #3d3d3d;
`;

HeaderWrapper.Links = styled.nav`
  width: 100%;
  text-align: center;
  padding: 0;
  margin: 0;
  list-style: none;
  a {
    text-align: center;
    cursor: pointer;
    display: block;
    text-decoration: none;
    color: #88989e;
    transition: 200ms ease-in-out;
    &:hover,
    &:focus {
      font-weight: 500;
      color: #070c0e;
    }
  }
  ${breakpointsMedia({
    md: css`
      width: initial;
    `,
  })}
`;

HeaderWrapper.Ul = styled.ul`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-inline-start: 0;
`;

HeaderWrapper.Li = styled.li`
  margin-bottom: 0;
  margin-right: 1.5rem;
  display: inline-flex;
`;
