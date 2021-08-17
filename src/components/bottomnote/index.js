import React from 'react';
import { Container, Pane, Text, Title, Subtitle } from './styles/bottomnote';

export default function BottomNote({ children, ...restProps }) {
    return (<Container {...restProps}>{children}</Container>)
}

BottomNote.Pane = function BottomNotePane({ ...restProps }) {
    return (<Pane {...restProps} />);
}

BottomNote.Text = function BottomNoteText({ ...restProps }) {
    return (<Text {...restProps} />);
}

BottomNote.Title = function BottomNoteTitle({ ...restProps }) {
    return (<Title {...restProps} />);
}

BottomNote.Subtitle = function BottomNoteSubtitle({ ...restProps }) {
    return (<Subtitle {...restProps} />);
}

