import React from 'react';
import { Container, InnerContainer, LinkContainer, StyledLink, LogoBox, Logo, HomeLink, StyledBurger, StyledBurgerContainer, DropdownMenuContainer, DropdownMenuText, DropdownLink } from './styles/header';

export default function Header({ children, ...restProps }) {
    return (<Container {...restProps}>{children}</Container>)
}

Header.InnerContainer = function HeaderInnerContainer ({ ...restProps}) {
    return <InnerContainer {...restProps } />;
}

Header.LinkContainer = function HeaderLinkContainer ({ ...restProps}) {
    return <LinkContainer {...restProps } />;
}

Header.StyledLink = function HeaderStyledLink ({ ...restProps}) {
    return <StyledLink {...restProps } />;
}

Header.LogoBox = function HeaderLogoBox ({ ...restProps}) {
    return <LogoBox {...restProps } />;
}

Header.Logo = function HeaderLogo ({ ...restProps}) {
    return <Logo {...restProps } />;
}

Header.HomeLink = function HeaderHomeLink ({ ...restProps}) {
    return <HomeLink {...restProps } />;
}

Header.StyledBurger = function HeaderStyledBurger ({ ...restProps}) {
    return <StyledBurger {...restProps } />;
}

Header.StyledBurgerContainer = function HeaderStyledBurgerContainer ({ ...restProps}) {
    return <StyledBurgerContainer {...restProps } />;
}

Header.DropdownMenuContainer = function HeaderDropdownMenuContainer ({ ...restProps}) {
    return <DropdownMenuContainer {...restProps } />;
}

Header.DropdownMenuText = function HeaderDropdownMenuText ({ ...restProps}) {
    return <DropdownMenuText {...restProps } />;
}

Header.DropdownLink = function HeaderDropdownLink ({ ...restProps}) {
    return <DropdownLink {...restProps } />;
}