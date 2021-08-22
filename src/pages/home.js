import React from 'react';
import { FeedContainer, HeaderContainer, FooterContainer, BottomNoteContainer, HomeLandingContainer, CovidsationContainer } from '../containers';

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