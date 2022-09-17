import { Outlet } from 'react-router-dom';
import { useTheme } from '@emotion/react';

import { Container } from 'components/App/App.styled';
import { IoIosContact } from 'react-icons/io';

import {
  HeaderWrapper,
  LinkWrapper,
  NavBar,
  NavLinkStyled,
} from './Header.styled';

export const Header = () => {
  const theme = useTheme();

  return (
    <>
      <NavBar>
        <Container>
          <HeaderWrapper>
            <IoIosContact size="40px" color={theme.colors.light} />

            <LinkWrapper>
              <NavLinkStyled to="/">Home</NavLinkStyled>
              <NavLinkStyled to="/add">Add Contact</NavLinkStyled>
            </LinkWrapper>
          </HeaderWrapper>
        </Container>
      </NavBar>

      <main>
        <Outlet />
      </main>
    </>
  );
};
