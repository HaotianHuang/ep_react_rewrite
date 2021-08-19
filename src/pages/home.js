import React from 'react';
import { CovidsationContainer } from '../containers/Covidsation';
import { FooterContainer } from '../containers/footer';
import { BottomNoteContainer } from '../containers/bottomnote';
import { HeaderContainer } from '../containers/header';
import { HomeLandingContainer } from '../containers/homelanding';


export default function Home() {
    return (
            <div>
                <HeaderContainer  />
                <HomeLandingContainer />
                <CovidsationContainer />
                
                <BottomNoteContainer />
                <FooterContainer />
            </div>

    )
}

/*
import { FeedContainer } from '../containers/feed';

<FeedContainer /> <== Hope leaving this out stops it from crashing :()

*/