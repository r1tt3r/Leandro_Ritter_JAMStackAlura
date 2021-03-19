/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { propToStyle } from '../../../../../theme/utils/propToStyle';

export const WrapperSection = styled.section`
  /* min-height: 600px; */
  position: relative;
  border-top: 1px solid hsla(0, 0%, 40%, 0.3);
  height: ${({ fullHeight }) => (fullHeight === 'sim' ? '100vh' : 'initial')};
  background-color: ${({ colorWrapper }) =>
    colorWrapper === 'white' ? '#2a2a2a' : '#202020'};
  padding-bottom: 80px;
  ${propToStyle('textAlign')}
  ${propToStyle('minHeight')}
  ${propToStyle('display')} 
  ${propToStyle('alignItems')}
  ${propToStyle('flexDirection')} 
  ${propToStyle('justifyContent')}
  ${propToStyle('height')};
`;

export const WrapperFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  line-height: 0;
`;

export function Wrapper({
  children,
  colorWrapper,
  fullHeight,
  noFooter,
  ...props
}) {
  return (
    <WrapperSection
      colorWrapper={colorWrapper}
      fullHeight={fullHeight}
      {...props}>
      {children}
      {!noFooter && (
        <WrapperFooter>
          <svg
            x="0px"
            y="0px"
            fill={colorWrapper === 'white' ? '#202020' : '#2a2a2a'}
            viewBox="0 186.5 1920 113.5">
            <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 " />
          </svg>
        </WrapperFooter>
      )}
    </WrapperSection>
  );
}

Wrapper.defaultProps = {
  fullHeight: 'nao',
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  colorWrapper: PropTypes.string.isRequired,
  fullHeight: PropTypes.string,
};
