import React, {useState} from 'react';
import { Header } from '../components';
import logo from '../images/home/logo.jpeg';

// TODO - ?Bigger logo

export function HeaderContainer() {
    const [open, setOpen] = useState(false);

    return (
        <Header>
            <Header.InnerContainer>
                <Header.LogoBox href="/">
                    <Header.Logo src={logo} alt="" width="40"/>
                    <Header.HomeLink>ETERNAL POSSIBILITIES</Header.HomeLink>
                </Header.LogoBox>
                <Header.LinkContainer>
                    <Header.Link href="/blog">Archive</Header.Link>
                    <Header.Link href="/podcast">Podcast</Header.Link>
                    <Header.Link href="/team">Team</Header.Link>
                </Header.LinkContainer>
                <Header.StyledBurgerContainer onClick={() => setOpen(!open)}>
                    <Header.StyledBurger open={open}>
                      <div />
                      <div />
                      <div />
                    </Header.StyledBurger>
                </Header.StyledBurgerContainer>
            </Header.InnerContainer>

            <Header.DropdownMenuContainer open = {open}>
                <Header.DropdownMenuText open={open}>
                    <Header.DropdownLink href="/podcast">Podcast</Header.DropdownLink>
                </Header.DropdownMenuText>
                <Header.DropdownMenuText open={open}>
                    <Header.DropdownLink href="/team">Team</Header.DropdownLink>
                </Header.DropdownMenuText>
            </Header.DropdownMenuContainer>
        </Header>
    )
}

