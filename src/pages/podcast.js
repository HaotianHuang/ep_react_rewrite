import React from 'react';

import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { BottomNoteContainer } from '../containers/bottomnote';
import { EmptyHeadContainer } from '../containers/emptyHead';
import { PodcastBodyContainer } from '../containers/podcastBody';

export default function Podcast() {
    return (
            <div>
                <HeaderContainer  />
                <EmptyHeadContainer />
                <PodcastBodyContainer />
                <BottomNoteContainer />
                <FooterContainer />
            </div>

    )
}