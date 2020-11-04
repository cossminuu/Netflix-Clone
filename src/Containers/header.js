import React from 'react';
import { Header } from '../Components'

export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to="/" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
                <Header.ButtonLink to="/signin">Sign in</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}