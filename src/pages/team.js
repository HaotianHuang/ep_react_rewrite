import React from 'react';
import { HeaderContainer, FooterContainer, BottomNoteContainer, EmptyHeadContainer, TeamBodyContainer } from '../containers';

export default function Team() {
    return (
            <div>
                <HeaderContainer  />
                <EmptyHeadContainer />
                <TeamBodyContainer />
                <BottomNoteContainer />
                <FooterContainer />
            </div>
    )
}