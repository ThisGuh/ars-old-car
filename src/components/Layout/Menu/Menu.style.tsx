import styled from 'styled-components';
import { HEADER_HEIGHT } from 'components/Layout/Header/Header.style';

type Props = {
  isOpen: boolean | null;
};

export const StyledNav = styled.nav<Props>`
  position: absolute;
  top: ${HEADER_HEIGHT};
  left: 0;
  min-height: ${({ isOpen }) => (isOpen ? '100vh' : 'inherit')};
  width: 100vw;
  transition: all 0.3s linear;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100vw')});
  background-color: ${({ theme }) => theme.colors.headerGray};

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    position: static;
    height: 100%;
    width: inherit;
    min-height: inherit;
    transform: translateX(0);
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  gap: 50px;

  :first-child {
    margin-top: 30px;
  }

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    flex-direction: row;
    justify-content: center;

    :first-child {
      margin-top: 0;
    }
  }
`;

export const NavListItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const TitleForSubtitle = styled.span``;

export const SubNavItemSection = styled.div`
  position: relative;
  width: 100%;
  display: none;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.initial};

  div {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 15px;
    background-color: ${({ theme }) => theme.colors.headerGray};
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes.sm};

    :hover {
      color: ${({ theme }) => theme.colors.red};
    }
  }
`;

export const MobileSubNavItemSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 200px;

  a {
    align-self: flex-end;
  }
`;

export const DesktopLink = styled.span`
  cursor: pointer;
  transition-duration: 0.2s;

  :hover {
    color: ${({ theme }) => theme.colors.red};
  }

  :hover ${SubNavItemSection} {
    display: flex;
    color: ${({ theme }) => theme.colors.white};
  }
`;
