import React from 'react';

import { Container, PostContainer, HeaderContainer, PostTitle, PostSubtitle, PostDate, PostImage, TextBlock, Author, Subtitle, 
    Text, Quote, RecordingTitle, AudioContainer, Audio, ReturnLink} from './styles/blog';

export default function Blog({ children, ...restProps }) {
    return (<Container {...restProps}>{children}</Container>)
}

Blog.PostContainer = function BlogPostContainer({ ...restProps }) {
    return <PostContainer {...restProps } />;
}

Blog.HeaderContainer = function BlogHeaderContainer({ ...restProps }) {
    return <HeaderContainer {...restProps } />;
}

Blog.PostTitle = function BlogPostTitle({ ...restProps }) {
    return <PostTitle {...restProps } />;
}

Blog.PostSubtitle = function BlogPostSubtitle({ ...restProps }) {
    return <PostSubtitle {...restProps } />;
}

Blog.PostDate = function BlogPostDate({ ...restProps }) {
    return <PostDate {...restProps } />;
}

Blog.PostImage = function BlogPostImage({ ...restProps }) {
    return <PostImage {...restProps } />;
}

Blog.TextBlock = function BlogTextBlock({ ...restProps }) {
    return <TextBlock {...restProps } />;
}

Blog.Author = function BlogAuthor({ ...restProps }) {
    return <Author {...restProps } />;
}

Blog.Subtitle = function BlogSubtitle({ ...restProps }) {
    return <Subtitle {...restProps } />;
}

Blog.Text = function BlogText({ ...restProps }) {
    return <Text {...restProps } />;
}

Blog.Quote = function BlogQuote({ ...restProps }) {
    return <Quote {...restProps } />;
}

Blog.RecordingTitle = function BlogRecordingTitle({ ...restProps }) {
    return <RecordingTitle {...restProps } />;
}

Blog.AudioContainer = function BlogAudioContainer({ ...restProps }) {
    return <AudioContainer {...restProps } />;
}

Blog.Audio = function BlogAudio({ ...restProps }) {
    return <Audio {...restProps } />;
}

Blog.ReturnLink = function BlogReturnLink({ ...restProps }) {
    return <ReturnLink {...restProps } />;
}