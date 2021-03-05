import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

export const CardItem = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  background-color: #fff;
  box-shadow: 0 2px 5px 0 #e4e4e4;
  color: #25262a;
  transition: all 0.3s ease;
  margin-bottom: 25px;
  margin-right: 0;
  border-radius: 0 0 5px 5px;
  ${breakpointsMedia({
    md: css`
      width: 30%;
      margin-right: 25px;
    `,
  })}
`;

CardItem.Image = styled.figure`
  position: relative;
  margin: 0;
  img {
    width: 100%;
  }
`;

CardItem.Content = styled.div`
  padding: 0 20px 20px 20px;
`;
