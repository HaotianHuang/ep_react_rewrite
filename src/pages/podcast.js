import React from 'react';
import { HeaderContainer, FooterContainer, BottomNoteContainer, EmptyHeadContainer, PodcastBodyContainer} from '../containers';

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