import React from 'react';
import { JumbotronContainer } from '../Containers/jumbotron';
import { FaqsContainer } from '../Containers/faqs'
import { HeaderContainer } from '../Containers/header'
import { Feature, OptForm } from '../Components'
import { FooterContainer } from '../Containers/footer'

export default function Home() {
    return (
        <>
            <HeaderContainer >
                <Feature>
                    <Feature.Title>
                        Unlimited films, TV programmes and more.
                    </Feature.Title>
                    <Feature.SubTitle>
                        Watch anywhere. Cancel at any time.
                    </Feature.SubTitle>
                    <OptForm>
                        <OptForm.Text>
                            Ready to watch? Enter your email to create or restart your membership
                    </OptForm.Text>
                        <OptForm.Break />
                        <OptForm.Input placeholder="Email address" />
                        <OptForm.Button>Try it now</OptForm.Button>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}