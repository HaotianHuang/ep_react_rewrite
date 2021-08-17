import React from 'react';
import { CovidsationContainer } from '../containers/Covidsation';
import { FooterContainer } from '../containers/footer';
import { BottomNoteContainer } from '../containers/bottomnote';
import { HeaderContainer } from '../containers/header';
import { HomeLandingContainer } from '../containers/homelanding';
import { FeedContainer } from '../containers/feed';

export default function Home() {
    return (
            <div>
                <HeaderContainer  />
                <HomeLandingContainer />
                <CovidsationContainer />
                <FeedContainer />
                <BottomNoteContainer />
                <FooterContainer />
            </div>

    )
}