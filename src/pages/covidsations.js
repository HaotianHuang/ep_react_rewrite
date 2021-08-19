import React from 'react';

import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { BottomNoteContainer } from '../containers/bottomnote';
import { EmptyHeadContainer } from '../containers/emptyHead';

export default function Covidsations() {
    return (
            <div>
                <HeaderContainer  />
                <EmptyHeadContainer />
                <BottomNoteContainer />
                <FooterContainer />
            </div>

    )
}