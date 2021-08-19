import React from 'react';

import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { BottomNoteContainer } from '../containers/bottomnote';
import { EmptyHeadContainer } from '../containers/emptyHead';
import { TeamBodyContainer } from '../containers/teamBody';

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