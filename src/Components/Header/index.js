import React, { useEffect, useState } from 'react'
import { Background, Container, Group, Logo, ButtonLink, Picture, Profile, Dropdown, Link, Search, SearchIcon, SearchInput } from './styles/header'
import { Link as ReactRouterLink } from 'react-router-dom';



export default function Header({ bg = true, children, ...restProps }) {
    return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", null)
        };
    }, []);

    return <Container color={show} {...restProps}>{children}</Container>
}


Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={`/images/users/${src}.png`} />
}


Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile {...restProps}> {children}</Profile >
}

Header.Search = function HeaderSearch({ ...restProps }) {
    const [searchActive, setSearchActive] = useState(false);
    return <Search {...restProps}>
        <SearchIcon active={searchActive} onClick={() => setSearchActive(searchActive => !searchActive)}>
            <img src="/images/icons/search.png" alt="Search" />
        </SearchIcon>
        <SearchInput placeholder="Search films and series" active={searchActive} />
    </Search>
}


Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}> {children}</Dropdown >
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};


Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}> {children}</Group >
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}> {children}</ButtonLink >
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to} >
            <Logo {...restProps} />
        </ReactRouterLink>
    )
}

