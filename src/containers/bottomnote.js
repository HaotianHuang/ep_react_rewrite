import React from 'react';
import { BottomNote } from '../components';

export function BottomNoteContainer() {
    return (
        <BottomNote>
            <BottomNote.Pane>
                <BottomNote.Subtitle>About Eternal Possibilities</BottomNote.Subtitle>
                <BottomNote.Title>Our mission is to convey the endless beautiful possibilities as a medical graduate.</BottomNote.Title>
                <BottomNote.Text>We hand-pick medical graduates who have done remarkable things out in the real world, so that you - with your future ahead of you - can discover the boundaries of what is possible, and be inspired to achieve your full potential.</BottomNote.Text>
            </BottomNote.Pane>
        </BottomNote>
    )
}