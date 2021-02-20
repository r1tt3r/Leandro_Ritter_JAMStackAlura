import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { TextStyleVariantsMap } from '../foundation/Text';

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
  color: red;
  padding: 0;
  margin: 0;
  list-style: none;
  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: #88989e;
    transition: 200ms ease-in-out;
    ${breakpointsMedia({
      xs: css`
        ${TextStyleVariantsMap.smallestException}
      `,
      md: css`
        ${TextStyleVariantsMap.paragraph1}
      `,
    })}
    &:hover,
    &:focus {
      font-weight: 500;
      color: #070c0e;
    }
  }
`;

HeaderWrapper.Ul = styled.ul`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

HeaderWrapper.Li = styled.li`
  margin-bottom: 0;
  margin-right: 1.5rem;
  display: inline-flex;
`;
