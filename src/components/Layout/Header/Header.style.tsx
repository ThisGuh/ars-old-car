import styled from 'styled-components';
import { BURGER_DIMENSIONS } from 'components/Layout/Menu/Burger/Burger.style';

export const HEADER_HEIGHT = '80px';

export const Wrapper = styled.header`
  position: fixed;
  display: grid;
  grid-template-columns: calc(2 * ${BURGER_DIMENSIONS}) 1fr;
  justify-items: center;
  align-items: center;
  height: ${HEADER_HEIGHT};
  width: 100vw;

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    grid-template-columns: 1fr 5fr;
  }
`;

export const Logo = styled.h1`
  grid-column: 2/3;

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    grid-column: 1/2;
  }
`;
