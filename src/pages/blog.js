import React from 'react';
import { HeaderContainer, FooterContainer, BottomNoteContainer, EmptyHeadContainer, BlogContainer } from '../containers';

export default function Blog() {
    return (
            <div>
                <HeaderContainer  />
                <EmptyHeadContainer />
                <BlogContainer />
                <BottomNoteContainer />
                <FooterContainer />
            </div>

    )
}